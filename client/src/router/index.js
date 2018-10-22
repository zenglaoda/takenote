
    //登录
const logIn = () => import(/*webpack chunkName 'login'*/'@/login');




//-----------------------项目选择--------------------------------
    //项目列表
const projectList = () => import(/*webpack chunkName 'project_list'*/'@/project/project_list');




//---------------------博客--------------------------------------

                        //整体布局
    //侧边栏
const sidebar = () => import(/*webpack chunkName 'sidebar'*/'@/project/blog/layout/sidebar');
    //顶部头
const head = () => import(/*webpack chunkName 'head'*/'@/project/blog/layout/head');
    //主题内容
const content = () => import(/*webpack chunkName 'content'*/'@/project/blog/layout/content');
    //整体架构
const framework = () => import(/*webpack chunkName 'framework'*/'@/project/blog/layout/framework');


                        //module模块
    //博客总列表
const blogList = () => import(/*webpack chunkName 'blogList'*/'@/project/blog/module/blog_list');
                        


//路由插座
const outlet = {
    template:'<router-view></router-view>'
};
//临时页面
const tempVue = {
    template:'<h1>正在开发中</h1>'
};


let routes = [
    {
        //登录页面
        path:'/',
        component:logIn,
    },
    {
        //项目列表
        path:'/project',
        component:outlet,
        children:[
            {
                //项目选择页
                path:'',
                component:tempVue
            }
        ]
    },
    {
        path:'/blog',
        component:framework,
        children:[
            {
                path:'',
                components:{
                    sidebar:sidebar,
                    head:head,
                    content:blogList
                }
            },
        ]
    }
];

export default routes;