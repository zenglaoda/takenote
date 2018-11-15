/*
    描述:
        1.本模块的功能是扫描root/controller/直接子级目录，将直接子级目录中对应的中间件进行挂载。
        2.每个接口前都会添加项目间隔片段表示符，如blog/getBlogList

    问题:
        1.能够多次执行router.routes()这个方法，比如添加多个控制器模块???????

    参考网址:
        https://blog.csdn.net/ErErFei/article/details/68060551?utm_source=blogxgwz1


*/

const fs = require('fs');
const router = require('koa-router')();
const config = require('../config/config');

router.all('*', (ctx, next) => {  
    // 允许来自所有域名请求  
    ctx.set('Access-Control-Allow-Origin', '*');  
    
    // 是否允许发送Cookie，ture为运行  
    ctx.set('Access-Control-Allow-Credentials', true);  
    
    // 设置所允许的HTTP请求方法  
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');  
    
    // 服务器支持的所有头信息字段，多个字段用逗号分隔  
    ctx.set('Access-Control-Allow-Headers', 'x-requested-with, x-ui-request, lang');  
    next();  
}); 




//添加中间件
function addRouterMap(router,mapping,project){
    for(const ele of mapping){
        let method = ele.method.toLowerCase();
        router[method]('/'+project+'/'+ele.url,ele.middleware);
    }
}

//扫描文件
function addControllers(router,dir){
    //控制器目录
    let ctrlUrl = __dirname+'./../../controller/';        
    let files = fs.readdirSync(ctrlUrl+dir);
    files = files.filter((ele)=>{
        return ele.endsWith('controller.js');
    });
    files.forEach((ele)=>{
        let ctrl = require(ctrlUrl+dir+'/'+ele);
        addRouterMap(router,ctrl,dir);
    });
}

//定义扫描范围
function addModule(dir){
    const controllersDir = dir || 'blog';
    addControllers(router, controllersDir);
}

for(let c of config.controllers){
    addModule(c);
}
 
//能够多次执行router.routes()这个方法，比如添加多个控制器模块???????
module.exports = router;