<template>
    <div>
        <h1 class="t1" style="margin-top:50px">招募主题:   {{title}}</h1>
         <h1 class="t1">招募内容:   {{content}}</h1>
          <h1 class="t1">招募人数:   {{people}}</h1>
          <a-button class="button" v-show="isStu" @click="navi('ApplyTeacherDetail')" >拜师申请</a-button>
          <a-button class="button"  @click="navi('Recruits')">返    回</a-button>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params.id)
    },
     components:{
      
    },
    data:()=>({
      title:"唢呐招募",
      content:"唢呐传承人，要求20岁以下男性有志青年愿意为唢呐非物质文化遗产奉献，将提供xx课程。。。。",
      people:"1/5",
    }),
    computed:{
        isStu(){
            return this.$root.isShowUser==2
        }
    },
    methods:{
        navi(s){
            this.$router.push({name:s,params:{id:this.$route.params.id}})
        }
    }
}
</script>
<style scoped>
.t1{

    margin-left:100px;
    width:500px;
}
.button{
    width:200px;
    height:80px;
    background-color:green;
    color:#fff;
  
    font-size:28px;
    left:100px;
    margin-top:10px
}
</style>