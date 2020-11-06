<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider >
        <img  src="./../assets/logo.jpg" class="logo" style="width:150px" @click="naviHome('/')"/>
      <a-menu theme="dark" :selectedKeys="[selectkeys]" @click="changeItem" mode="inline">
        <a-menu-item key="1" >
         <a-icon type="home" />
          <span>首页</span>
        </a-menu-item>
         <a-menu-item key="11"  >
         <a-icon type="carry-out" />
            代办列表
          </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="folder-add"  /><span>轮播图管理</span></span>
          <a-menu-item key="2">
           轮播图列表
          </a-menu-item>
          <a-menu-item key="3">
            新增轮播图
          </a-menu-item>
          <a-menu-item key="4">
            回收站
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="book" /><span>课程管理</span></span>
          <a-menu-item key="5">
            课程列表
          </a-menu-item>
          <a-menu-item key="6">
            回收站
          </a-menu-item>
        </a-sub-menu>
       <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="team" /><span>教师管理</span></span>
          <a-menu-item key="7">
            教师列表
          </a-menu-item>
          <a-menu-item key="8">
            回收站
          </a-menu-item>
       </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title"><a-icon type="team" /><span>用户管理</span></span>
          <a-menu-item key="9">
            用户列表
          </a-menu-item>
          <a-menu-item key="10">
            回收站
          </a-menu-item>
       </a-sub-menu>
    
       
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: rgba(242, 242, 242, 1); padding: 0" >
       <div style="display:flex">
        <div style="width:5px;height:40px;margin:10px 10px 0 30px;background-color:purple"></div>
        <h1 style="font-size:28px">{{title}}</h1>
       </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
     
        <div :style="{ padding: '24px', background: ' rgba(242, 242, 242, 1)', minHeight: '360px' }">
        <slot></slot>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      selectkeys:'1'
    };
  },

  computed:{
    title(){
      return this.$route.meta.title
    }
  },
  methods:{
      //导航
    navi({key},s){
      console.log(key)
    
      this.$router.push(s)
    },
    changeItem({key }){
      console.log(key);
      this.selectkeys=key;
      if(key==1){ this.$router.push('/AdminHomePage')}
      else if(key==11){ this.$router.push({name:'Commission'})}
      else if(key==2){ this.$router.push({name:'LoopManager'})}
         else if(key==3){ this.$router.push({name:'InsertLoopManager'})}
      else if(key==4||key==6||key==10||key==8){ this.$router.push({name:'RecycleBin'})}
        else if(key==5){ this.$router.push({name:'CourseManager'})}
          else if(key==7){ this.$router.push({name:'TeacherManager'})}
            else if(key==9){ this.$router.push({name:'UserManager'})}
    },
     naviHome(s){
      console.log(s);
     this.$root.isShowUser=0;
      this.$router.push(s);
    },
  }
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
