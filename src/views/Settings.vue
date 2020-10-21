<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="昵称">
      <a-input
        v-decorator="[
          'nickname',
          {
            rules: [
              {
                required: true,
                message: '请输入昵称',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    
    <a-form-item v-bind="formItemLayout" label="头像" extra="支持jpg、gif、png或bmp格式的图片，建议文件小于20M">
      
       <a-upload
        v-decorator="[
          'profile',
          {
            rules: [
  
              {
                required: true,
                message: '请上传头像!',
              },
            ],
          },
        ]"
    name="file"
    :multiple="false"
    
    action=""
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> 点击上传 </a-button>
  </a-upload>
   </a-form-item>

 <a-form-item v-bind="formItemLayout" label="性别">
       <a-select default-value="男" style="width: 120px" 
      v-decorator="[
          'sex',
        ]"
     >
      <a-select-option value="one">
        男
      </a-select-option>
      <a-select-option value="two">
        女
      </a-select-option>
       </a-select >
    </a-form-item>
<a-form-item v-bind="formItemLayout" label="个人介绍" >
      <a-textarea
        v-decorator="[
          'intro',
        ]"
      />
    </a-form-item>
    
    <a-form-item v-bind="formItemLayout" label="真实姓名" extra="用于高等教育课程证书登记与发放，不会以任何形式向第三方透露">
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
    
 <a-form-item v-bind="formItemLayout" label="手机号码" extra="用于优质课程的学习提醒等服务，手机号不会对外公开，请放心" >
      <a-input
        v-decorator="[
          'phone',
        ]"
        placeholder="手机号"
      />
    </a-form-item>

   

<a-form-item v-bind="formItemLayout" label="联系邮箱" extra="用于接收来自平台和课程的邮件通知，非常重要">
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
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        保存
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>

export default {
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
    this.form = this.$form.createForm(this, { name: 'settings' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
         else{this.$router.push('/')}
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