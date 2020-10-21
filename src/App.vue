<template>
  <div id="app">
<Layout>
     <router-view v-if="this.$root.isShowUser!=3" v-wechat-title='$route.meta.title'></router-view>
    
</Layout>

  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  name: 'App',
  components:{
    Layout
  },
  data:()=>({

  })
}
</script>

<style>
#app {
 
}
</style>
