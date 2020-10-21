<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
    style="width:300px"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入账号!' }] },
        ]"
        placeholder="请输入11位电话号"
      >
        <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item >
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

     <a-form-item >
      <a-input
        v-decorator="[
          'validate',
          { rules: [{ required: true, message: '请输入验证码！' }] },
        ]"
        placeholder="验证码"
          style="width:160px;margin-right:37px"
      >
      </a-input>
         <a-button style="background-color:#40A9FF;color:#fff" >
          获取验证码
         </a-button>
    </a-form-item>


    <a-form-item>
     
      <a-button type="primary" html-type="submit" class="login-form-button">
        注 册
      </a-button>

      <a @click="navi('TeacherRegister')">
         老师注册->
      </a>
      <a @click="navi('Login')" style="float:right">
        去登陆->
      </a>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
      navi(s){
          this.$router.push(s)
      },
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
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>