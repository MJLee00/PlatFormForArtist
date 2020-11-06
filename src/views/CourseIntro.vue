<template>
    <div>
        <img :src="obj.src" style="width:285px;height:230px;margin-left:30px"/>
        <a-button class="button" @click="loginCourseDetail">进入学习</a-button>
        <a-button class="button" style="top:500px" @click="showCourse">课程详情</a-button>
        <a-button class="button" style="top:600px" @click="showComments">课程评价</a-button>

        <CourseIntro style="position:absolute;left:450px;top:100px"
        v-show="status==0" :title="obj.title" :author="obj.author" :src="obj.src" :intro="obj.intro"
        :abstract="obj.abstract" :summurize="obj.summurize" :goal="obj.goal" :outline="obj.outline"
        :reference="obj.reference"  :people="obj.people"
        ></CourseIntro>
        <h1 style="position:absolute;left:450px;top:100px">精彩评论</h1>
        <Comment style="left:450px;top:-200px" v-show="status==1"
         :listData="comments" 
         ></Comment>
    </div>
</template>

<script>

import Comment from "../components/Comments"
import CourseIntro from "../components/CourseIntro"
export default {
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
            this.$router.push("CoursesDetail/Bulletin")
        }

    },
    data:()=>({
        status:0,
        obj:

            {
                "src":require("./../assets/aviater1.jpg"),
                "id":"1",
                  "title":"玉石雕琢与技艺",
                "author":"xiaoming",
                "intro":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxxxxxxxxxxxxxxx教育科学研究院小学部xxxxxxxxxxxxxxxxxxxxxxxxxxxx主任,",
                "abstract":"xxxxxxxxx",
                "summurize":"xxxxxxxx",
                "goal":"1.xxxxxxxxxx\n2.xxxxxxxxx",
                "outline":"1.xxxxxxx\n2.xxxxxx",
                "reference":"1.xxxxxxx\n2.xxxxxxx",
                "people":"1/40"
                
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