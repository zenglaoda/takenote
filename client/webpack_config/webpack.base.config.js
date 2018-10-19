const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    //构建的目标环境
    target:'web',
    //构建环境
    mode:'development',
    //入口文件
    entry:{
        app:'./src/main.js'
    },
    //输出文件
    output:{
        //指定打包后生成的文件存放的位置
        path:path.resolve(__dirname,"../",'dist/js'),           
        //指定如何生成打包后的文件名字
		filename:'[name].js',        
    },    
    //开发调试工具
    devtool: 'inline-source-map',  
    //配置开发时的本地服务器
    devServer:{
		port:'8081',                                          	//指定端口号
		open:false,                                           	//自动打开浏览器
		host:"0.0.0.0",                                	        //开启局域网
		hot:true,                                             	//热替换，当页面中依赖的文件发生改变时，对改变的部分进行局部更新，而无需完全将页面进行更新
    }, 
    //配置插件
    plugins:[
        //动态的生成一个html文件，然后将打包后生成的js文件动态的插入到生成的html文件中
        new HtmlWebpackPlugin({
            title: '首页',                                        //标题
            template: 'src/index.html',                           //模板文件
            filename: './index.html',                             //输出文件名
            minify:{
                    caseSensitive: false,                        //是否大小写敏感
                    removeComments:false,                        // 去除注释
                    removeEmptyAttributes:false,                 // 去除空属性
                    collapseWhitespace: false                    //是否去除空格
            }
        }),

        //启动热替换
        new webpack.HotModuleReplacementPlugin(),
        
        //vue-loader一定要配合VueLoaderPlugin使用,它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言
        //的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块
        new VueLoaderPlugin()
    
    ],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
};

/*
source-map的作用:

        我们在打包中，将开发环境中源代码经过压缩，去空格，babel编译转化，最终可以得到适用于生产环境的项目代码，这样处
    理后的项目代码和源代码之间差异性很大，会造成无法debug的问题。举例来说，如果压缩等处理过的生产环境中的代码出现bug，
    候只能定位到压缩处理后的代码的位置，无法定位到开发环境中的源代码。sourcemap就是为了解决上述代码定位的问题，
    简单理解，就是构建了处理前的代码和处理后的代码之间的桥梁。主要是方便开发人员的错误定位

    inline-source-map:主要用于开发环境
    source-map:主要用于生产环境

热替换:
    热替换即当编辑的源码发生变化时，实时的更新变化的那一部分内容(局部更新)，实时刷新是每当源码发生改变就整体重新编译
    一次源码。





*/