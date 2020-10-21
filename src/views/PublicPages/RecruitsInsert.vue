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

     <a-form-item label="招募主题">
      <a-input
        v-decorator="[
          'title',
          { rules: [{ required: true, message: '请输入招募主题!' }] },
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

    <a-form-item label="招募人数">
      <a-input
        v-decorator="[
          'people',
          { rules: [{ required: true, message: '请输入招募人数!' }] },
        ]"
      
      >
      </a-input>
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
         
    }
      
}
</script>

<style >
.ProductInsert{
    position:absolute;
    left:50px;
}
</style>