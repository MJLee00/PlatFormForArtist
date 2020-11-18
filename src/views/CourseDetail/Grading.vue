<template>
    <div class="group">
        <h1>{{title}}</h1>
  
        <span style="font-size:20px">{{content}}</span>
           <a-button type="primary" v-if="this.$root.isShowUser==1" @click="navi('InsertGrading')">新增评分标准</a-button>
    </div>
</template>

<script>
import {getCourseDetailById} from "../../api/api.js"
export default {
     mounted(){
            //箭头函数里的this指向的是全局this不是函数体的this
        getCourseDetailById(this.$route.params.id).then(Response=>{
                 
                console.log(Response.data)
                this.title=Response.data.scoretitle;
                this.content=Response.data.score
            })
    },
    data:()=>({
      
        title:"",
        content:''
    }),

      methods:{
        navi(s){
            this.$router.push({name:s})
        }
    }
}
</script>

<style scoped>
.group > *{
    display:block;
}
</style>