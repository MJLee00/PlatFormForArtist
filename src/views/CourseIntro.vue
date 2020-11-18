<template>
    <div>
        <img :src="obj.src" style="width:285px;height:230px;margin-left:30px"/>
        <a-button class="button" @click="loginCourseDetail">进入学习</a-button>
        <a-button class="button" style="top:500px" @click="showCourse">课程详情</a-button>
        <a-button class="button" style="top:600px" @click="showComments">课程评价</a-button>

        <CourseIntro style="position:absolute;left:450px;top:100px"
        v-show="status==0" :title="obj.title" :author="obj.teachername" :src="obj.src" :intro="obj.intro"
        :abstract="obj.abstract" :summurize="obj.summurize" :goal="obj.goal" :outline="obj.outline"
        :reference="obj.reference"  :people="obj.people"
        ></CourseIntro>
        <h1 style="position:absolute;left:450px;top:100px" v-show="status==1">精彩评论</h1>
        <Comment style="left:450px;top:-200px" v-show="status==1"
         :listData="comments" 
         ></Comment>
    </div>
</template>

<script>

import Comment from "../components/Comments"
import CourseIntro from "../components/CourseIntro"
import {getCourseById} from "../api/api.js"
export default {
    mounted(){
            //箭头函数里的this指向的是全局this不是函数体的this
      getCourseById(this.$route.params.id).then(Response=>{
                 this.obj=Response.data
                console.log(Response.data)
                this.obj.src=this.$utils.getImage(this.obj.src);
            })
    },
     components:{
        Comment,
        CourseIntro
    },
    methods:{
      
        showCourse(){
            this.status=0;
        },
        showComments(){
            this.status=1;
        },
        loginCourseDetail(){
            this.$router.push({name:"CoursesDetail",params:{id:this.$route.params.id}})
        }

    },
    data:()=>({
        status:0,
      
        obj:
            {
            },
        comments:[{
            "name":"qasdfk",
            "time":"2020/10/1",
            "src":require("./../assets/aviater1.jpg"),
            "content":"内容丰富，形式新颖",
            "likes":12,
            "dislikes":1
        },
        {
            "name":"qasdfk",
            "time":"2020/10/1",
            "src":require("./../assets/aviater1.jpg"),
            "content":"内容丰富，形式新颖",
             "likes":12,
            "dislikes":1
        }]
    
    })
     
}
</script>

<style scoped>
.button{
    position:absolute;
    top:400px;
    left:80px;
    width:220px;
    height:70px;
    background-color: coral;
    color:#fff;
    font-weight:30px;
    font-size:30px;
}

</style>