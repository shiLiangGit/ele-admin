<template>
    <div>
        <header-top></header-top>
        <div class="user-table tb-margin">
            <el-table :data="tableData" border>
                <el-table-column prop="date" label="日期" width="240"></el-table-column>
                <el-table-column prop="name" label="姓名" width="240"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
            <el-pagination background align="right" class="mt-30" layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
</template>
<script>
    import HeaderTop from '../components/headerTop';
    export default {
        data(){
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        components:{
            HeaderTop
        }
    }
</script>

<style scoped lang="scss">
    .user-table{

    }
</style>