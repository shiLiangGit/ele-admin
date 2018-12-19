<template>
    <div class="home-admin">
        <header-top></header-top>
        <section class="data-count">
            <h1>数据统计</h1>
            <div class="count-btns">
                <el-row :gutter="20">
                    <el-col :span="3" :offset="6">
                        <div class="col-content btn-orange">
                            当日数据：
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="col-content">
                            1个订单
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="col-content">
                            1个订单
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="col-content">
                            1个订单
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="3" :offset="6">
                        <div class="col-content btn-blue">
                            总数据：
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="col-content">
                            1个订单
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="col-content">
                            1个订单
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="col-content">
                            1个订单
                        </div>
                    </el-col>
                </el-row>
            </div>
        </section>
        <tendency></tendency>
    </div>
</template>

<script>
    import HeaderTop from '../components/headerTop';
    import Tendency from '../components/tendency';
    export default {
        name: "home",
        components:{
            HeaderTop,
            Tendency
        }
    }
</script>

<style scoped lang="scss">
    .home-admin{
        overflow: hidden;
    }
    .data-count{
        h1{
            margin: 30px;
            text-align: center;
        }
    }
    .count-btns{
        .el-row{
            margin-bottom: 20px;
            .el-col{
                height: 35px;
                line-height: 35px;
                text-align: center;
                .col-content{
                    border-radius: 5px;
                    background: #e5e9f2;
                    &.btn-orange{
                        background: #ff9800;
                        color:#fff;
                    }
                    &.btn-blue{
                        background: #20a0ff;
                        color:#fff;
                    }
                }

            }
        }
    }
</style>