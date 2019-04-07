import App from '@/app';
import routes from '@/router'
import Vue from 'vue';
import 'element-theme-chalk';
import Element from 'element-ui'
import VueRouter from 'vue-router';

Vue.use(Element);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    render: (h) => h(App),
    router: new VueRouter({
        routes,
        base: '/',
        mode: 'hash',
    }),
});



/**
    vue-router
        API参考网址:
            https://router.vuejs.org/zh/api/#base
            new VueRouter({
                routes,
                base: '/',
                // hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
                // history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
                //abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式
                mode: '',
            }),

 */