import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login';
import Index from '@/pages/index';
import Home from '@/pages/home';
import UserList from '@/pages/userList';
import ShopList from '@/pages/shopList';
import OrderList from '@/pages/orderList';
import FoodList from '@/pages/foodList';
import AdminList from '@/pages/adminList';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            redirect:'home',
            children:[
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path:'userList',
                    name:'userList',
                    component:UserList,
                    meta: ['数据管理', '用户列表'],
                },
                {
                    path:'shopList',
                    name:'shopList',
                    component:ShopList,
                    meta:['数据管理','商家列表']
                },
                {
                    path:'orderList',
                    name:'orderList',
                    component:OrderList,
                    meta:['数据管理','商家列表']
                },
                {
                    path:'foodList',
                    name:'foodList',
                    component:FoodList,
                    meta:['数据管理','食品列表']
                },
                {
                    path:'adminList',
                    name:'adminList',
                    component:AdminList,
                    meta:['数据管理','管理员列表']
                }
            ]
        },

        {
            path: '*',
            redirect:'/index/home'
        }
    ]
})
