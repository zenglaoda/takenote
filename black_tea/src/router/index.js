const login = () => import(/* webpackChunkName: "loginCom" */'@/module/login');
const register = () => import('@/module/register');
import main from '@/module/main'
export default [
    {
        path: '/login',
        component: login,
    },
    {
        path: '/register',
        component: register,
    },
    {
        path: '/main',
        component: main,
    },
];