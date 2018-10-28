const fs = require('fs');
const router = require('koa-router')();

function addRouterMap(router,mapping){
    for(const ele of mapping){
        let method = ele.method.toLowerCase();
        router[method](ele.url,ele.middleware);
    }
}
function addControllers(router,dir){
    let files = fs.readdirSync(__dirname+'/'+dir);
    files = files.filter((ele)=>{
        return ele.endsWith('.js');
    });
    files.forEach((ele)=>{
        let ctrl = require(__dirname+'/'+dir+'/'+ele);
        addRouterMap(router,ctrl);
    });
}

module.exports = function (dir) {
    const controllersDir = dir || 'blog';
    addControllers(router, controllersDir);
    return router.routes();
};