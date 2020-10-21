<template>
    <div class="ProductInsert">
         <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
    style="width:300px"
  >
    <a-form-item>

     <a-form-item label="作品主题">
      <a-input
        v-decorator="[
          'title',
          { rules: [{ required: true, message: '请输入作品主题!' }] },
        ]"
      
      >
      </a-input>
    </a-form-item>

           <a-form-item label="内容">
    <a-textarea
    v-decorator="['content', { rules: [{ required: true, message: '请输入你的内容!' }] }]"
      placeholder="请输入内容"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>

        <a-form-item label="视频" >
      
       <a-upload
        v-decorator="[
          'video',
          {
            rules: [
  
              {
                required: true,
                message: '请上传视频!',
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


        <a-form-item label="图片" >
      
       <a-upload
        v-decorator="[
          'photo',
          {
            rules: [
  
              {
                required: true,
                message: '请上传图片!',
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

      <a-button type="primary" html-type="submit" class="login-form-button">
        提 交
      </a-button>
    </a-form-item>
  </a-form>
    </div>
</template>

<script>

export default {
     beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'productInsert' });
  },
    methods:{
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                
                }
                this.$router.go(-1)
            

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
    }
      
}
</script>

<style >
.ProductInsert{
    position:absolute;
    left:50px;
}
</style>