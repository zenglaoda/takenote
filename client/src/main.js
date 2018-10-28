import Vue from 'vue';
import Router from "vue-router";
import Vuex from "vuex";
import Element from 'element-ui';

import routes from '@/router';
import App from '@/app.vue';
import store from '@/manage/store';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/layout.css'

Vue.use(Element, { size: 'middle', zIndex: 3000 });
Vue.use(Router);
Vue.use(Vuex);

//生成路由实例
const router = new Router({
    routes,
    // mode: 'history',
    // base: __dirname, 
});


new Vue({ 
    el:'#app',
    router:router,
    store:new Vuex.Store(store),
    render:h=>h(App)
});