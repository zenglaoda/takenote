
//获取博客列表
function getBlogList(ctx,next){
    ctx.body = {
        name:'zeng',
        age:22,
        id:0
    };
}

module.exports = [
    {
        method:'get',
        url:'/getBlogList',
        middleware:getBlogList
    }
];