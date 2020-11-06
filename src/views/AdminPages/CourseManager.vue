<template>
    <div>
    <!-- 筛选 -->
          <div style="width:1100px;height:100px;background:#fff">
                <p style="margin-left:10px;margin-top:10px">筛选</p>
                    <a-form layout="inline" style="margin-left:30px">
                    <a-form-item   :label-col="{ span: 10}" :wrapper-col="{ span: 13 }"  label="课程状态">
                    <a-select default-value="正在进行" style="width: 120px" @change="handleChange">
                            <a-select-option value="0">
                                正在进行
                            </a-select-option>
                            <a-select-option value="1">
                                已结束
                            </a-select-option>
                            </a-select>
                            </a-form-item>
                <a-form-item   :label-col="{ span: 10}" :wrapper-col="{ span: 13 }"  label="输入搜索">
                    <a-input style="width: 100%" />
            </a-form-item>
                <a-form-item   :label-col="{ span: 10}" :wrapper-col="{ span: 13 }"  label="开始日期">
                        <a-date-picker style="width: 100%" />
                </a-form-item>
            <a-form-item   :label-col="{ span: 10}" :wrapper-col="{ span: 13 }"  label="结束日期">
                        <a-date-picker style="width: 100%" />
                </a-form-item>
                <a-form-item   :wrapper-col="{ span: 13 }"  >
                    <a-button type="primary" html-type="submit" class="login-form-button">
                筛 选
            </a-button>
                </a-form-item>
                </a-form>
       </div>
       <!-- 列表 -->
           <a-button type="primary" style="position:absolute;top:220px;left:1250px;z-index:1"  @click="navi('/RecycleBin')">回收站</a-button>
       <div style="width:1100px;height:400px;margin-top:20px;background:#fff">
            <p style="margin-left:10px;margin-top:10px">课程列表</p>
            <Table :dataSource="dataSource" :columns="columns" :link="link" actionName2="详情" actionName1="删除"></Table>
       </div>
    </div>
</template>

<script>
import Table from '../../components/Table'
export default {
    components:{
        Table
    },
    data:()=>({
        link:'/CourseManagerDetail',
        dataSource: [
                {
                key: '0',
                name: 'Edward King 0',
                number: '323',
                address: 'London, Park Lane no. 0',
                },
                {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
                },
                {
                key: '2',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
                },
                {
                key: '3',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
                },
                {
                key: '4',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
                },
            ],
                    columns: [
                {
                title: '编号',
                dataIndex: 'number',
                width: '20%'
                },
                {
                'title': '课程名称',
                dataIndex: 'name',
                },
                {
                title: '课程图',
                dataIndex: 'imgsrc',
                },
                {
                title: '课程状态',
                dataIndex: 'status'
                },
                {
                title: '报名人数',
                dataIndex: 'people'
                },
                {
                title: '上传人',
                dataIndex: 'uploader'
                },
                 {
                title: '上传时间',
                dataIndex: 'uploadTime'
                },
                {
                title: '操作',
                dataIndex: 'operation',
                scopedSlots: { customRender: 'operation' },
                },
            ],
    }),
    methods:{
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                console.log(this.$yuns.format(new Date(),"yyyy/MM/dd"))
                this.$router.push('/Login')
                }
                
            

            });
            },
    }
      
}
</script>

<style >

</style>