import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login';
import Index from '@/pages/index';
import Home from '@/pages/home';
// 数据管理
import UserList from '@/pages/dataManage/userList';
import ShopList from '@/pages/dataManage/shopList';
import OrderList from '@/pages/dataManage/orderList';
import FoodList from '@/pages/dataManage/foodList';
import AdminList from '@/pages/dataManage/adminList';
// 添加数据
import AddGood from '@/pages/addData/addGood';
import AddShop from '@/pages/addData/addShop';
Vue.use(Router);

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
                },
                {
                    path:'addShop',
                    name:'addShop',
                    component:AddShop,
                    meta:['添加数据','添加商铺']
                },
                {
                    path:'addGood',
                    name:'addGood',
                    component:AddGood,
                    meta:['添加数据','添加商品']
                },
            ]
        },

        {
            path: '*',
            redirect:'/index/home'
        }
    ]
})
