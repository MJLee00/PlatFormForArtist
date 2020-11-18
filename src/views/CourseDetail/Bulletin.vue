<template>
    <div class="group">
        <h1>{{notification}}</h1>
        <h2 style="font-size:20px">{{title}}</h2>
        <span style="font-size:20px">{{content}}</span>
        <a-button type="primary" v-if="this.$root.isShowUser==1" @click="navi('InsertBulletin')">新增公告</a-button>
    </div>
</template>

<script>
import {getCourseDetailById} from "../../api/api.js"
export default {
    mounted(){
       //根据课程id获取是否属于当前教师的课程，若是则显示新增公告
          //箭头函数里的this指向的是全局this不是函数体的this
      getCourseDetailById(this.$route.params.id).then(Response=>{
                 
                console.log(Response.data)
                this.title=Response.data.bulletin;
                this.content=Response.data.bulletintitle
            })
    },
    data:()=>({
        notification:"公 告",
        title:"",
        content:``
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