#.gitignore文件
    用来声明本项目中需要忽略的文件

#.eslintrc.js文件
    1) vs code可配合eslint对代码进行非强制性的检查，不符合时只会给出错误提示，要是想强制性检查可在项目的构建编译中进行配置。

    2) vs code + eslint拓展 + elint npm包可在文件进行保存时对文件进行检查。
    当使用eslint来校验vue时需要安装eslint-plugin-vue npm包，因为eslint默认只对js文件进行检查.故需要检查vue文件时需要用到该插件

    3)可在package.json中配置脚本来初始化.eslintrc.js配置 
        如: ./node_modules/.bin/eslint --init
    
    4)eslint官网:
        https://cn.eslint.org/docs/user-guide/configuring

    5)vue eslint官方配置
        https://eslint.vuejs.org/rules/comment-directive.html
        https://eslint.vuejs.org/developer-guide/
        https://eslint.vuejs.org/rules/
        
        https://vue-loader.vuejs.org/zh/guide/linting.html

#.eslintignore文件
    1)用于告诉eslint，哪些文件不需要检查其语法。配置规则与.gitignore一样。

#.jshintrc文件
    1)除了可以使用eslint来检验代码规范，也看可以使用jshint拓展，然后在项目目录中创建.jshintrc文件对代码进行校验