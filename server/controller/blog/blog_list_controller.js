
const Blog = require("../../service/blog/blog_list_service");
let blog = new Blog();

//获取博客列表
async function getBlogList(ctx,next){
    // let res = await blog.getBlogList();
    let res = [
        {age:'212',name:'zeng'},
        {age:'12',name:'liu'},
        {age:'14',name:'黄'},
        {age:'16',name:'口'},
    ];
    ctx.body = res;
}

module.exports = [
    {
        method:'get',
        url:'getBlogList',
        middleware:getBlogList
    }
];