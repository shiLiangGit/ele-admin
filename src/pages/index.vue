<template>
    <div class="el-index fullScreen">
        <el-row class="fullScreen">
            <el-col :span="4" class="index-left fullScreen">
                <el-menu class="nav-menu" :default-active="$route.path.replace('/', '')" text-color="#bfcbd9" theme="dark" active-text-color="#20a0ff" router>
                    <el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="shopList">商家列表</el-menu-item>
                        <el-menu-item index="foodList">食品列表</el-menu-item>
                        <el-menu-item index="orderList">订单列表</el-menu-item>
                        <el-menu-item index="adminList">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
                        <el-menu-item index="addShop">添加商铺</el-menu-item>
                        <el-menu-item index="addGood">添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-star-on"></i>图表</template>
                        <el-menu-item index="visitor">用户分布</el-menu-item>
                        <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-edit"></i>编辑</template>
                        <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
                        <el-menu-item index="vueEdit">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-setting"></i>设置</template>
                        <el-menu-item index="adminSet">管理员设置</el-menu-item>
                        <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title"><i class="el-icon-warning"></i>说明</template>
                        <el-menu-item index="explain">说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" class="index-right">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg:'这是后台管理首页',
                activeIndex:"2",
            }
        }
    }
</script>
<style scoped lang="scss">
    .el-index{
        .el-row{
            .index-left{
                .nav-menu{
                    background-color:#324057;
                }
                .el-submenu [class^=el-icon-]{
                    color:#bfcbd9;
                }
                background-color:rgb(50,64,87);
            }
        }

    }
</style>

