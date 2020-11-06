<template>
    <div>
        <div style="width:950px;height:1000px;background:#fff">
         <a-form :form="form" @submit="handleSubmit" style="background:#fff" >
            <a-form-item v-bind="formItemLayout" label="用户姓名" >
            <a-input disabled
                v-decorator="[
                'name',
                ]"
            />
            </a-form-item>
        <a-form-item v-bind="formItemLayout" label="联系邮箱" >
            <a-input disabled
                v-decorator="[ 'email',  ]"
            />
            </a-form-item>
        
        <a-form-item v-bind="formItemLayout" label="手机号码" >
            <a-input disabled
                v-decorator="[          'productName'  ]"
            />
            </a-form-item>

        <a-form-item v-bind="formItemLayout" label="注册时间" >
            <a-input disabled
                v-decorator="[
                'registerTime',
                ]"
            />
            </a-form-item>

      
               <a-form-item v-bind="formItemLayout" label="是否禁用" >

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

 <a-form-item v-bind="tailFormItemLayout">
    <a-button style="float:right;margin-right:30px" @click="back" type="primary">返回</a-button>
    <a-button  style="float:right;margin-right:30px" @click="back" type="primary" html-type="submit">保存</a-button>
    </a-form-item>
        </a-form>
        </div>

          
    </div>
</template>
<script>
export default {
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
  methods: {
      back(){
          this.$router.go(-1)
      },
      navi(s){
this.$router.push(s)
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
   
  },
}
</script>
<style scoped>

</style>