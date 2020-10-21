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

     <a-form-item label="课程名称">
      <a-input
        v-decorator="[
          'title',
          { rules: [{ required: true, message: '请输入课程名称!' }] },
        ]"
      
      >
      </a-input>
    </a-form-item>

        <a-form-item label="课程简介">
    <a-textarea
    v-decorator="['intro', { rules: [{ required: true, message: '请输入你的课程简介' }] }]"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>

           <a-form-item label="摘要">
    <a-textarea
    v-decorator="['abstract', { rules: [{ required: true, message: '请输入你的摘要!' }] }]"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>

          <a-form-item label="课程概述">
    <a-textarea
    v-decorator="['summurize', { rules: [{ required: true, message: '请输入你的课程概述!' }] }]"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>

          <a-form-item label="授课目标">
    <a-textarea
    v-decorator="['goal', { rules: [{ required: true, message: '请输入你的授课目标!' }] }]"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>

          <a-form-item label="课程大纲">
    <a-textarea
    v-decorator="['outline', { rules: [{ required: true, message: '请输入你的课程大纲!' }] }]"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>

          <a-form-item label="参考资料">
    <a-textarea
    v-decorator="['reference', { rules: [{ required: true, message: '请输入你的参考资料!' }] }]"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>

  <a-form-item label="课程人数">
      <a-input
        v-decorator="[
          'people',
          { rules: [{ required: true, message: '请输入课程人数!' }] },
        ]"
      
      >
      </a-input>
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