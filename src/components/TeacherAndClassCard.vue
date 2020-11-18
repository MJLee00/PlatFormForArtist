<template>
  <a-card hoverable style="width: 17%">
    <img
      slot="cover"
      :alt="alter"
      :src="getImage(source)"
      @click="navi(link)"
      />
   
    <a-card-meta :title="title">
      <template slot="description">
       {{description}}
      </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
   props:["source","alter","description","link","title"],
   methods:{
     navi(s){
       console.log(s);
       this.$router.push(s)
     },
     getImage(src){
  
       return require('./../assets/'+src);
     }
   }
}
</script>