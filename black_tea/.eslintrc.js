/*

    off => 0      关闭校验
    warn => 1     对错误显示绿色提示
    error => 2    对错误显示红色警告  
    eslint官方文档: https://eslint.vuejs.org/rules/

    vue-eslit配置参考: https://eslint.vuejs.org/rules/html-indent.html    
*/
module.exports = {
    "extends": [
        'plugin:vue/recommended',
        // "plugin:vue/essential"
    ],
    // vue-eslint-plugin 需要配合 vue-eslint-parser解析器,当使用eslint-plugin-vue插件但不使用vue-eslint-parser解析器时，需要将parser移入parserOption
    // "parser": 'vue-eslint-parser',
    "plugins": [
        "vue",
    ],
    "parserOptions": {
        "parser": "babel-eslint",//有些js语法babel语法是支持的，但是eslint时不支持的如，es6,es7的一些语法，拓展运算符，import()函数，故需要先将js先通过babel-eslint解析，在交给eslint-loader去解析
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "rules": {
        "no-console": "off",                                //不允许使用console        
        "quotes": ["error", "single"],                      //使用单引号        
        "linebreak-style": "off",                           //换行符限制
        "func-style": "off",                                //使用函数表达式
        "eol-last": "off",                                  //文件末尾是否需要空行
        "padded-blocks": "error",                           //函数语句块之间的填充
        "indent": "error",                                  //默认4个空格缩进
        "quote-props": "off",                               //要求对象字面量属性名称用引号括起来
        "padded-blocks": "off",                             //函数体与语句之间上下必须存在空行
        "sort-keys": "off",                                  //要求对象属性按序排列
        "vue/html-indent": ["warn", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": false,
            "ignores": []
        }],
        "vue/order-in-components": 0,        
    }
}