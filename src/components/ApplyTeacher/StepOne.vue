<template>
  <a-form :form="form" @submit="handleSubmit">
   
    <a-form-item v-bind="formItemLayout" label="自我介绍" >
      <a-textarea
        v-decorator="[
          'intro',
          {
            rules: [
              {
                required: true,
                message: '请输入您的自我介绍',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    
<a-form-item v-bind="formItemLayout" label="申请原因" >
      <a-textarea
        v-decorator="[
          'reason',
          {
            rules: [
              {
                required: true,
                message: '请输入您的申请原因',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="自身优势" >
      <a-textarea
        v-decorator="[
          'advantage',
          {
            rules: [
              {
                required: true,
                message: '请输入您的自身优势',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    

  
    <a-form-item v-bind="formItemLayout" label="奖项或作品" >
      
       <a-upload
        v-decorator="[
          'prize',
          {
            rules: [
  
              {
                required: true,
                message: '请上传奖项或作品！',
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

    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        保存并下一步
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
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
         else{this.$emit('child-event',{status:1,values:values})}
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