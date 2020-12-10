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
        placeholder="手机号/会员名/邮箱"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
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
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        记住我
      </a-checkbox>
      <a style="float:right" @click="navi('ChangePwd')">
         忘记密码
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        登 陆
      </a-button>
      或
      <a @click="navi('Register')">
        现在注册!
      </a>
    </a-form-item>
  </a-form>
</template>

<script>
import {getUser} from './../api/api'
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
          console.log(this.$utils.format(new Date(),"yyyy/MM/dd"))
         getUser(values["userName"],values["password"]).then(Response=>{
           console.log(Response)
          if(Response.data.status==200)
          this.$root.isShowUser=Response.data.data.type;
           if(this.$root.isShowUser==1||this.$root.isShowUser==2)
              {
                this.$router.push('/');
                this.$root.id=Response.data.data.id
              }
           else if(this.$root.isShowUser==3)
              this.$router.push('/AdminHomePage');
               
          console.log(this.$root.isShowUser)
        })
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