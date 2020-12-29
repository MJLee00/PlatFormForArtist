<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <img  src="./../assets/logo.jpg" class="logo" :style="{margin:'5px 10px 0 -20px'}" @click="navi('/')"/>
      <a-menu
        theme="dark"
        mode="horizontal" 
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" @click="navi('/Courses')">
          课 程
        </a-menu-item>
        <a-menu-item key="2" @click="navi('/Teachers')">
          名 师
        </a-menu-item>
        <a-menu-item key="3" @click="navi('/Recruits')">
          招 募
        </a-menu-item>
        
        <a-input-search placeholder="输入课程名称" style="width: 300px;margin:0px 0px 0px 100px" @search="onSearch" />
     
          
          <!-- 登陆后显示头像 -->
         <a-button v-if="this.$root.isShowUser==0" type="link" :size="size" :style="{float:'right',margin:'15px'}" @click="navi('/Login')">
            登陆 | 注册
          </a-button>
          <a-dropdown v-if="this.$root.isShowUser!=0"  :trigger="['hover']">
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style="float:right;margin:10px"      @click="LoginHomePage()">
        
            </a-avatar>
   
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1" @click="logout"> 退出登录</a-menu-item>
              <a-menu-item key="2" @click="navi('/Setting')"> 设置 </a-menu-item>
            
            </a-menu>
          </a-dropdown>
      </a-menu>
    </a-layout-header>


    <a-layout-content :style="{ marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '1900px' }">
        <slot  ></slot>
      </div>
    </a-layout-content>


    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import {getjwt,postlogout} from './../api/api'
export default {
  mounted(){
    this.refresh_user();
  },
  data:()=>({
     isShowUser:true
  }),
  methods:{
    LoginHomePage(){
      if(this.$root.isShowUser==1)
        this.$router.push('/TeacherHomePage/CourseList')
      else  if(this.$root.isShowUser==2)
        this.$router.push('/StuHomePage/CourseList')
      else  if(this.$root.isShowUser==3)
        this.$router.push('/AdminHomePage')
    },
    //导航
    navi(s){
      console.log(s)
      this.$router.push(s)
    },
    logout(){
      postlogout().then(Response=>{
        console.log(Response)
        if(Response.status==200){
         this.$root.isShowUser=0;
         this.$root.activeUser=null;
         sessionStorage.removeItem("activeUser");
         this.$router.push('/');
        }
      
      })
     

    },

    refresh_user:function(){
    //从sessionStorage中取出当前用户
    let activeUser= sessionStorage.getItem("activeUser");
    //取出cookie中的令牌
    let uid = this.$utils.getCookie("uid")
    if(activeUser && uid && uid == activeUser.uid){
      this.$root.isShowUser = activeUser.type;
      this.$root.activeUser = activeUser;
    }else{
      if(!uid){
      return ;
    }
    //请求查询jwt
    getjwt().then((res) => {
      console.log(res)
    if(res.data.message=="success"){
      let jwt = res.data.data;
     
      let activeUser = this.$utils.getUserInfoFromJwt(jwt)
      if(activeUser){
        this.$root.isShowUser = activeUser.type;
      this.$root.activeUser = activeUser;
        sessionStorage.setItem("activeUser",JSON.stringify(activeUser))
      }
    }
    })
    }
    }
  }
   
}
</script>
<style>
#components-layout-demo-fixed .logo {
  width: 300px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  margin: 5px 20px 0px -20px;
  float: left;
}
</style>
