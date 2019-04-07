const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

/**
 * @param {String} url 相对路径地址
 * @returns {String} 返回绝对路径
 */
function resolvePath (url) {
    return path.resolve(__dirname, '../', url);
}
module.exports = {
    mode: 'development',
    target: 'web',
    entry: resolvePath('main.js'),
    output: {
        path: resolvePath('dist'),  //输出路径地址
        publicPath: './',   //为页面中所有的引用路径加上/public/前缀,默认就是"./"
        filename: '[name].js', //name,hash,id,chunkhash;filename用于决定入口文件打包后的名字
        chunkFilename: 'async/[name].[id].[chunkhash].js',//chunkFilename用于决定非入口文件打包后的名字
        hashDigest: 'hex',
        hashDigestLength: 4,
    },
    module: {
        // loader的解析顺序从右往左
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.scss$/,
                loader:[
                    'vue-style-loader', //<style> 会通过 vue-style-loader 自行热重载，所以它不会影响应用的状态。
                    'css-loader',   //处理css中引用中的资源，如src,import等将引入的资源使用webpack的require引入（作为一个资源模块）
                    'sass-loader',
                    {
                      loader: 'sass-resources-loader',
                      options: {
                        resources: [
                            resolvePath('src/assets/element-scss-var/var.scss'),
                            resolvePath('src/assets/element-scss-var/transition.scss'),
                            resolvePath('src/assets/element-scss-var/popup.scss'),
                        ]
                      },
                    },
                ]
            },
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //  eslint-friendly-formatter:格式化输出的错误报告，更加简明易懂
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                include: [
                    resolvePath('src')
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                loader: 'file-loader',//用于将本地开发资源复制或移动至打包输出位置
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'rap',
            filename: resolvePath('dist/admin.html'),        //输出位置及路径
            template: resolvePath('index.html')     //模板文件
        }),
        //这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块,如css,html,script
        new VueLoaderPlugin(),
        // 当使用了webpack-dev-server，并且derServer.hot为true时，默认会自动添加该插件
        // new Webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: [
            '.js',
            '.json',
            '.vue'
        ],
        alias: {
            '@': resolvePath('src')
        }
    },
    performance: {
        hints: false,//warning, 'error', false
        // 整数类型（以字节为单位
        maxAssetSize: 200000,
        //  整数类型（以字节为单位）
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) {
            return true;
        },
    },
    // 嵌入到源文件中    
    devtool: 'inline-source-map', 
    devServer: {
        proxy: { 
          '/api': 'http://localhost:3000'
        },
        // https://www.webpackjs.com/configuration/dev-server/#devserver-publicpath-
        port: 8080,
        open: false,
        hot: true, 
        publicPath: '/gg/',     //在项目的根目录生成一个虚拟目录，然后将打包的内容放置该目录下，与output中配置的path没有任何关系,它是基于style-loader的
        // contentBase: '',    //告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要，路径从根目录开始,默认值为"./" 
        // historyApiFallback: true, //当请求的页面地址不存在时，页面是否回滚到首页
        noInfo: true, 
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        //   minSize: 30000,
          minSize: 0,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 10,
          maxInitialRequests: 10,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            // default: {
            // //   minChunks: 2,
            //   minChunks: 1,
            //   priority: -20,
            //   reuseExistingChunk: true
            // }
          }
        }
    }
};
/*
    vue-loader相关配置参考:
        https://vue-loader.vuejs.org/zh/guide/

    lazy loading and code spliting：
        import,export,import()在webpack中都是开箱即用的，
        1. import from方式是静态加载
        2.动态地加载模块。调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会分离到一个单独的 chunk 中。

        vue中的 lazy loading
            https://alexjover.com/blog/lazy-load-in-vue-using-webpack-s-code-splitting/
    
        webpackChunkName配置:
            https://www.webpackjs.com/api/module-methods/#import-

        在net work面板中可以看到admin.html与main.js加载过一次之后再次请求这两个页面时，会返回304状态码，表示
        未发生改变，然后直接从冲缓存中读取内容，而其他js文件，如login.js返回的是200,因为login.js是main.js中
        通过jsonP的方式动态的发送一个login.js文件的请求。

    相关变量
        name: 文件名
        hash: 本次的构建hash,项目代码中每一个改动都会产生一个不同的哈希值，
        id: 文件id
        chunkhash: 非入口文件的chunkhash值
    
        output:{
            chunkFilename:设置非入口文件打包之后生成的bundle名字，若在import()中添加注释参数的形式定义了文件名之后，将会覆盖[name]变量的值。
        }

        splitChunks默认配置:
            参考地址:https://webpack.js.org/plugins/split-chunks-plugin/
            webpack默认拆包规则:
                1.可以共享新块或来自该node_modules文件夹的模块
                2.新块将大于30kb（在min + gz之前）
                3.根据需要加载块时的最大并行请求数将小于或等于5
                4.初始页面加载时的最大并行请求数将小于或等于3
            optimization: {
                splitChunks: {
                    chunks: 'async',
                    minSize: 30000,
                    maxSize: 0,
                    minChunks: 1,
                    maxAsyncRequests: 5,
                    maxInitialRequests: 3,
                    automaticNameDelimiter: '~',
                    name: true,
                    cacheGroups: {
                        vendors: {
                            //将引用的node_modules中的文件全部打包到vendors文件中
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10
                        },
                        default: {
                            //使用import()函数进行动态(按需加载)导入的文件会单独打包成一个chunk文件
                            //其余的文件，如router/index.js,app.vue这些静态文件将会打包到default文件中
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true
                        }
                    }
                }
            }
            缓存组的作用是将某几个文件打包进一个文件。



*/