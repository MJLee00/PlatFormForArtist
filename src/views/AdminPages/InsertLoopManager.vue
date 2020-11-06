<template>

  <a-form :form="form" @submit="handleSubmit" style="background:#fff" >
   
    <a-form-item v-bind="formItemLayout" label="轮播图名称" >
      <a-input
        v-decorator="[
          'name',
          {
            rules: [
              {
                required: true,
                message: '请输入轮播图名称',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    


    <a-form-item v-bind="formItemLayout" label="轮播图" extra="图片尺寸：200*200像素，文件小于5M， 支持jpg、gif、png或bmp格式的图片">
      
       <a-upload
        v-decorator="[
          'logo',
          {
            rules: [
  
              {
                required: true,
                message: '请上传轮播图!',
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

<a-form-item v-bind="formItemLayout" label="轮播图状态" >

    <a-switch default-checked  v-decorator="[
          'status',
          {
            rules: [
  
              {
                required: true,
                message: '请选择状态!',
              },
            ],
          },
        ]"
        @change="onChange" />


    </a-form-item>

<a-form-item v-bind="formItemLayout" label="链接" >
      <a-input
        v-decorator="[
          'link',
          {
            rules: [
  
              {
                required: true,
                message: '请输入链接!',
              },
            ],
          },
        ]"
      />
    </a-form-item>

<a-form-item v-bind="formItemLayout" label="排序号" extra="请填写数字，数字越大越靠前">
      <a-input
        v-decorator="[
          'sequence',
          {
            rules: [
  
              {
                required: true,
                message: '请输入排序号!',
              },
            ],
          },
        ]"
      />
    </a-form-item>


    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit" style="margin-right:10px">
        保存
      </a-button>
       <a-button type="primary" @click="back">
        返回
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
      back(){
          this.$router.go(-1)
      },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
         else{this.$emit('child-event',1)}
      });
    },
     onChange(checked) {
      console.log(`a-switch to ${checked}`);
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