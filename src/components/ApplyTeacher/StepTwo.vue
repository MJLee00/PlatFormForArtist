<template>
  <a-form :form="form" @submit="handleSubmit">
   
    <a-form-item v-bind="formItemLayout" label="姓名" >
      <a-input
        v-decorator="[
          'name',
          {
            rules: [
              {
                required: true,
                message: '请输入您的姓名',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    
 <a-form-item v-bind="formItemLayout" label="手机号码"  >
      <a-input
        v-decorator="[
          'phone',
          {
            rules: [
              {
                required: true,
                message: '请输入您的姓名',
              },
            ],
          },
        ]"
        placeholder="手机号"
      />
    </a-form-item>


<a-form-item v-bind="formItemLayout" label="联系邮箱" extra="务必填写联系人常用邮箱，以免遗漏官方活动、公告、通知等重要信息">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '输入邮箱类型错误!',
              },
              {
                required: true,
                message: '请输入邮箱!',
              },
            ],
          },
        ]"
      />
    </a-form-item>

     <a-form-item v-bind="formItemLayout" label="密码" >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码！' }] },
        ]"
        type="password"
        placeholder="8-16位密码区分大小写"
      
      >

       <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
       </a-input>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        确认提交
      </a-button>
       <a-button @click="returnPage">
        上一步
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import {postApplyTeacher} from "./../../api/api.js"
export default {
  
  props:["datafromStepOne","recruitid"],
    components:{

    },
  data() {
    return {
   
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
      },
      
        tailFormItemLayout: {
                wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
                },
            },
    

    };
  },
 
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
     returnPage(){
          this.$emit('child-event',0)
     },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
         
       
          
              //拿到上一步的data进行合并
              const record=Object.assign(this.datafromStepOne,values);
              record["applyid"]=this.$root.id;
              record["recruitid"]=this.recruitid;
              console.log(record)
              postApplyTeacher(record).then(Response=>{
                console.log(Response.data);
              });
              this.$emit('child-event',{status:2,values:values})
          
      });
    },
 
    handleChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            this.$message.success(`${info.file.name} 文件上传成功`);
        } else if (info.file.status === 'error') {
            this.$message.error(`${info.file.name} 文件上传失败`);
        }
    },
  },
};
</script>