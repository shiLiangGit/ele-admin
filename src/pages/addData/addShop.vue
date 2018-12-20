<template>
    <div class="add-shop">
        <header-top></header-top>
        <div class="shop-form min-width">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="店铺名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="详细地址" prop="address">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="店铺简介">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="店铺标语">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="店铺分类">
                    <el-cascader :options="form.categoryOptions" v-model="form.selectedCategory"></el-cascader>
                </el-form-item>
                <el-form-item label="营业时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="起始时间" v-model="form.date1" :picker-options="{
							start: '05:30',
							step: '00:15',
							end: '23:30'
							}"></el-date-picker>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="结束时间" v-model="form.date2" :picker-options="{
							start: '05:30',
							step: '00:15',
							end: '23:30'
							}"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="配送费" prop="float_delivery_fee">
                    <el-input-number v-model="form.float_delivery_fee" :min="0" :max="20"></el-input-number>
                </el-form-item>
                <el-form-item label="起送价" prop="float_minimum_order_amount">
                    <el-input-number v-model="form.float_minimum_order_amount" :min="0" :max="100"></el-input-number>
                </el-form-item>
                <el-form-item label="店铺特点">
                    <span>品牌保证</span>
                    <el-switch on-text="" off-text="" v-model="form.is_premium"></el-switch>
                    <span>蜂鸟专送</span>
                    <el-switch on-text="" off-text="" v-model="form.delivery_mode"></el-switch>
                    <span>新开店铺</span>
                    <el-switch on-text="" off-text="" v-model="form.new"></el-switch>
                </el-form-item>
                <el-form-item style="white-space: nowrap;">
                    <span>外卖保</span>
                    <el-switch on-text="" off-text="" v-model="form.bao"></el-switch>
                    <span>准时达</span>
                    <el-switch on-text="" off-text="" v-model="form.zhun"></el-switch>
                    <span>开发票</span>
                    <el-switch on-text="" off-text="" v-model="form.piao"></el-switch>
                </el-form-item>
                <el-form-item label="上传店铺头像">
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
                <el-form-item label="上传餐饮服务许可证">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="form.business_license_image" :src="form.business_license_image" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="上传营业执照">
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="form.catering_service_license_image" :src="form.catering_service_license_image" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="优惠活动">
                    <el-select v-model="form.activityValue" @change="selectActivity" :placeholder="form.activityValue">
                        <el-option
                                v-for="item in form.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-table
                        :data="form.activities"
                        style="min-width: 600px;margin-bottom: 20px;"
                        align="cneter"
                        :row-class-name="tableRowClassName" border>
                    <el-table-column
                            prop="icon_name"
                            label="活动标题"
                            align="cneter"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="活动名称"
                            align="cneter"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="description"
                            align="cneter"
                            label="活动详情">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="120">
                        <template slot-scope="scope">
                            <el-button
                                    size="small"
                                    type="danger"
                                    @click="handleDelete(scope.$index)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
        data() {
            return {
                form: {
                    name: '',
                    address:'',
                    phone:'',
                    description:'',
                    tag:'',
                    category:'',
                    categoryOptions: [],
                    selectedCategory: ['快餐便当', '简餐'],
                    is_premium: true,
                    delivery_mode: true,
                    new: true,
                    bao: true,
                    zhun: true,
                    piao: true,
                    startTime: '',
                    endTime: '',
                    float_delivery_fee: 5, // 运费
                    float_minimum_order_amount: 20, // 起价
                    delivery: false,
                    options: [{
                        value: '满减优惠',
                        label: '满减优惠'
                    }, {
                        value: '优惠大酬宾',
                        label: '优惠大酬宾'
                    }, {
                        value: '新用户立减',
                        label: '新用户立减'
                    }, {
                        value: '进店领券',
                        label: '进店领券'
                    }],
                    activityValue: '满减优惠',
                    activities: [{
                        icon_name: '减',
                        name: '满减优惠',
                        description: '满30减5，满60减8',
                    }],
                },
                rules: {
                    name: [
                        { required: true, message: '请输入店铺名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' },
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>