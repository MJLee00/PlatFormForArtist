<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
        <img  src="./../assets/logo.jpg" class="logo" style="width:150px" @click="naviHome('/')"/>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item key="1" @click="navi('/AdminHomePage')">
          <a-icon type="pie-chart" />
          <span>首页</span>
        </a-menu-item>
         <a-menu-item key="11">
           <a-icon type="pie-chart" />
            代办列表
          </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>轮播图管理</span></span>
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
          <span slot="title"><a-icon type="team" /><span>课程管理</span></span>
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
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
     
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
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
      collapsed: false,
    };
  },
  methods:{
      //导航
    navi(s){
      console.log(s)
     
      this.$router.push(s)
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
