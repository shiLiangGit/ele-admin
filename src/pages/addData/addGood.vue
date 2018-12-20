<template>
    <div class="goods-box">
        <header-top></header-top>
        <div class="add-goods min-width">
            <el-form :roles="rules" :model="form">
                <el-row class="category-select">
                    <el-form-item label="食品种类">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in form.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-row>
                <el-row class="category-info">
                    <div class="goods-info">
                        <el-form-item label="分类名称" prop="name">
                            <el-input v-model="form.categoryName"></el-input>
                        </el-form-item>
                        <el-form-item label="分类描述" prop="description">
                            <el-input v-model="form.categoryDesc"></el-input>
                        </el-form-item>
                        <el-button type="primary">提交</el-button>
                    </div>
                </el-row>
                <el-row class="category-add">
                    <div class="cate-btn">
                        <i class="el-icon-caret-bottom"></i><span>添加食品分类</span>
                    </div>
                </el-row>
            </el-form>
            <el-form class="food-data" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="食品名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="食品活动" prop="address">
                    <el-input v-model="form.activity"></el-input>
                </el-form-item>
                <el-form-item label="食品详情" prop="phone">
                    <el-input v-model="form.detail"></el-input>
                </el-form-item>

                <el-form-item label="食品特点">
                    <el-cascader :options="form.foodPoints" v-model="form.selectedFood"></el-cascader>
                </el-form-item>
                <el-form-item label="包装费" prop="float_delivery_fee">
                    <el-input-number v-model="form.box_fee" :min="0" :max="20"></el-input-number>
                </el-form-item>
                <el-form-item label="价格" prop="float_minimum_order_amount">
                    <el-input-number v-model="form.price" :min="0" :max="100"></el-input-number>
                </el-form-item>
                <el-form-item label="食品规格">
                    <el-radio v-model="form.format" label="1">单规格</el-radio>
                    <el-radio v-model="form.format" label="2">多规格</el-radio>
                </el-form-item>
                <el-form-item label="上传食品图片">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="form.image_path" :src="form.image_path" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确认添加食品</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import HeaderTop from '../../components/headerTop';
    export default {
        components:{
            HeaderTop
        },
        data(){
            return {
                form:{
                    categoryName:'',
                    categoryDesc:'',
                    name:'',
                    activity:'',
                    detail:'',
                    foodPoints:[],
                    selectedFood:'',
                    box_fee:'',
                    price:'',
                    format:'',
                    image_path:'',
                    options: [{
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }],
                },
                rules: {
                    name: [
                        {required: true, message: '请输入店铺名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入详细地址', trigger: 'blur'},
                    ],
                }

            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../assets/css/main";
    .add-goods{
        .el-form{
            @include radius();
            .category-select{
                padding: 20px 0 20px 50px;
                border:1px solid #ccc;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                .el-select{
                    width:600px;
                }
            }
            .category-info{
                border-left:1px solid #ccc;
                border-right:1px solid #ccc;
                background: #fbfbfb;
                padding-bottom: 10px;
                .goods-info{
                    .el-form-item{
                        margin:20px 50px;
                    }
                    .el-input{
                        width:600px;
                    }
                    .el-button{
                        margin-left: 130px;
                    }
                }
            }
            .category-add{
                padding: 20px;
                border:1px solid #ccc;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                border-top:none;
                .cate-btn{
                    margin: auto;
                    width: 150px;
                }
            }
        }
        .food-data{
            margin-top: 30px;
            @include radius(5px);
            border:1px solid #ccc;
            padding: 20px;
            .el-form-item{
                margin: 25px;
            }
        }
    }
</style>