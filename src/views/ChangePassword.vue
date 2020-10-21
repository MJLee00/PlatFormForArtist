<template>
    <div>
       <h1 style="text-align:center">找回密码</h1>
        <div v-show="status==0">
          <h2 style="text-align:center">请输入要重置密码的手机账号</h2>
           <a-input class="button" v-model="userName" placeholder="请输入11位手机号">
            </a-input>
        </div>
        <div v-show="status==1">
          <h2 style="text-align:center">点击获取验证码</h2>
           <a-input class="button" v-model="userName" placeholder="请输入验证码">
            </a-input>
            <a-button class="button" @click="getValiCode">获取验证码</a-button>
        </div>

        <div v-show="status==2">
          <h2 style="text-align:center">请输入新的密码</h2>
           <a-input class="button" v-model="userName" placeholder="请输入密码">
            </a-input>
            
        </div>

       <Result v-show="status==3"  title="修改成功!"></Result>
        <a-button v-show="status!=3" class="button" type="primary" @click="changeStatus" block>
             下一步
        </a-button>
            
          
    </div>
</template>

<script>
import Result from "../components/Result.vue"
export default {
    data:()=>({
        status:0,
        phone:'',
        pwd:''
    }),
    components:{
        Result
    },
    methods:{
        changeStatus(){
            
            this.status++;
        },
        getValicode(){

        }
    }
}
</script>

<style scoped>
.button{
    display:block;margin:0 auto;width:400px;
    margin-top:10px;
    }
</style>