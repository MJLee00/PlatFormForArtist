<template>
    <div>
    <!-- 课程 -->
   <span style="position:absolute;top:80px;left:30px;margin:20px 0px 30px 30px;font-size:30px;">全部招募</span>
    <div style="position:absolute;width:100%">
    <TeacherAndClassCard v-for="(list,index) in RecruitsList" :key="index" :source="list.src"
     :alter="list.alt"
     :link="list.link"
     :description="list.description"
     :style="{
         float:'left',
         margin:'80px 60px 0px 25px'

    }"></TeacherAndClassCard>
       <a-pagination v-model="current" :total="50" show-less-items style="position: absolute;bottom: 0; margin-bottom:-100px;left: 40%;"/>
    </div>
  
   
    </div>    
</template>

<script>
import TeacherAndClassCard from "../../components/TeacherAndClassCard"
export default {
    components:{
        TeacherAndClassCard
    },
    data:()=>({
         current: 1,
            RecruitsList:[

            {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"RecruitsDetail",
                "title":"xiaoming"
            },
             {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                "title":"xiaoming"
            },
             {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            },
             {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            },
            {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            }
            ,
            {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            }
        ],
    })
}
</script>

<style scoped>
</style>

