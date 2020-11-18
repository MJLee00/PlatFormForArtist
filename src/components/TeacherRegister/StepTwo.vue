<template>
  <a-form :form="form" @submit="handleSubmit">
   
    <a-form-item v-bind="formItemLayout" label="认证人姓名" extra="填写要进行内容服务的姓名，并且与身份证信息一致">
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
    
 <a-form-item v-bind="formItemLayout" label="身份证号码" extra="请填写中华人民共和国身份证号码（需在有效期内）" >
      <a-input
        v-decorator="[
          'number',
          {
            rules: [
              {
                required: true,
                message: '请输入您的身份证号码',
              },
            ],
          },
        ]"
        placeholder="身份证号码"
      />
    </a-form-item>


    <a-form-item v-bind="formItemLayout" label="手持身份证人像面" extra="请保证身份证姓名、身份证号码清晰可见文件小于20M，支持jpg、gif、png或bmp格式的图片">
      
       <a-upload
        v-decorator="[
          'photo1',
          {
            rules: [
  
              {
                required: true,
                message: '请上传手持身份证人像面!',
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


    <a-form-item v-bind="formItemLayout" label="手持身份证国徽面" extra="请保证签发机关、有效期限清晰可见文件小于20M，支持jpg、gif、png或bmp格式的图片">
      
       <a-upload
        v-decorator="[
          'photo2',
          {
            rules: [
  
              {
                required: true,
                message: '请上传手持身份证人像面!',
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

   <a-form-item v-bind="formItemLayout" label="课程计划" extra="上传计划开展的课程教学计划 说明单附件大小不超过20M，可上传多个附件，最多5个，支持docx、pdf格式">
      
       <a-upload
        v-decorator="[
          'files',
          {
            rules: [
  
              {
                required: true,
                message: '请上传课程计划!',
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
        确认提交
      </a-button>
       <a-button @click="returnPage">
        上一步
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
     returnPage(){
          this.$emit('child-event',{status:0,values:undefined})
     },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
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