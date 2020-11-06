<template >
  <div id="app">
<component :is="componentName">

     <router-view  v-wechat-title='$route.meta.title'></router-view>
     
</component>

  </div>
</template>

<script>
import Header from './components/Header'
import AdminHead from './components/AdminHead'
export default {
  name: 'App',
  components:{
    Header,
    AdminHead
  },
  computed:{
    componentName(){
      if(this.$root.isShowUser!=3)return 'Header';
      else return 'AdminHead'
    }
  }
}
</script>

<style>
#app {
 
}
</style>
