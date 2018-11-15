const Koa = require('koa');
const app = new Koa();

const router = require(__dirname+'/framework/verdor/add_controller');
const config = require('./framework/config/config');


app.use(router.routes());
app.listen(config.port);

/*

ctx对象:
    获取请求地址: ctx.request.path
    返回响应数据: ctx.response.body
    返回响应类型: ctx.response.type
    路由重定向:   ctx.response.redirect
    错误处理:   ctx.throw(500);         等同于     ctx.response.status = 500

cookie的设置与读取:
    ctx.cookies.get
    ctx.cookies.set

错误监听:
    app.on('error', (err, ctx) =>
        console.error('server error', err);
    );
    如果错误被try...catch捕获，就不会触发error事件。这时，必须调用ctx.app.emit()，手动释放error事件，
    才能让监听函数生效

模块:
    一.koa-route:路由
        app.use(route.get('/', main));
        main是中间件，接受ctx作为参数

    二.koa-static:静态资源托管
        const path = require('path');
        const serve = require('koa-static');

        const main = serve(path.join(__dirname));
        app.use(main);

    三.koa-body请求体
        const koaBody = require('koa-body');

        const main = async function(ctx) {
        const body = ctx.request.body;
        if (!body.name) ctx.throw(400, '.name required');
        ctx.body = { name: body.name };
        };

        app.use(koaBody());

*/
