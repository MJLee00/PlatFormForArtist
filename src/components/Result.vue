<template>
  <a-result
    status="success"
    :title="title"
  
  >
    <template #extra>
      <a-button key="console" type="primary" @click="navi(link)">
        登 陆
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  props:["title","link"],
  data() {
    return {};
  },
  methods:{
       navi(s){
          this.$router.push(s)
      },
  }
};
</script>
