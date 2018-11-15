const fs = require('fs');
const path = require('path');

//首页
function indexHtml(ctx,next){
    ctx.response.type = 'html';
    ctx.body = fs.createReadStream(path.resolve(__dirname,'../../view/index.html'));
}

module.exports = [
    {
        method:'get',
        url:'/',
        middleware:indexHtml
    },
];