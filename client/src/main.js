import Vue from 'vue';
import Router from "vue-router";
import routes from '@/router';
import App from '@/app.vue';

//安装路由插件
Vue.use(Router);

//生成路由实例
const router = new Router({
    routes,
    // mode: 'history',
    // base: __dirname, 
});

/* router.beforeEach((to,from,next)=>{
    console.log(to);
    next();
}); */

new Vue({ 
    el:'#app',
    router:router,
    render:h=>h(App)
});