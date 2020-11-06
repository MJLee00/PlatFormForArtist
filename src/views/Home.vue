<template>
    <div> 
    <LoopImage></LoopImage>
    <!-- 老师 -->
    <span style="position:absolute;top:550px;margin:20px 0 30px 30px;font-size:30px;">名师推荐</span>
    <div style="position:absolute;top:550px;width:100%">
    
    <TeacherAndClassCard v-for="(list,index) in teacherList" :key="index" :source="list.src"
     :alter="list.alt"
     :link="list.link"
     :description="list.description"
     :title="list.title"
     :style="{
         float:'left',
         margin:'80px 60px 30px 25px'

    }"></TeacherAndClassCard>
    </div>
<!-- 课程 -->
    <div style="position:absolute;top:1050px;left:30px;margin:20px 0px 30px 30px;font-size:30px;">课程推荐</div>
   <div style="position:absolute;top:1050px;width:100%">
  
    <TeacherAndClassCard v-for="(list,index) in classList" :key="index" :source="list.src"
     :alter="list.alt"
     :link="list.link"
     :description="list.description"
     :style="{
         float:'left',
         margin:'80px 60px 0px 25px'

    }"></TeacherAndClassCard>
   </div>
    <!-- 招募 -->
     <span style="position:absolute;top:1500px;left:30px;margin:20px 0px 30px 30px;font-size:30px;">招募推荐</span>
    <div style="position:absolute;top:1500px;width:100%">
  
    <TeacherAndClassCard v-for="(list,index) in classList" :key="index" :source="list.src"
     :alter="list.alt"
     :link="list.link"
     :description="list.description"
     :style="{
         float:'left',
         margin:'80px 60px 0px 25px'

    }"></TeacherAndClassCard>
    </div>
 
    
    </div>
</template>


<script>
import LoopImage from "../components/LoopIamge"
import TeacherAndClassCard from "../components/TeacherAndClassCard"
import {getBooks} from "../api/api.js"
export default {
     mounted () {
           
            
             // load books list when visit the page
        
          
                getBooks().then(response => {
                   alert(response.status+ "find ok")
                })
         
             // add a book to backend when click the button
      
  },
    data:()=>({
        teacherList:[

            {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"CourseIntro",
                "title":"xiaoming"
            },
             {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                "title":"xiaoming"
            },
             {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            },
             {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            },
        ],
          classList:[

            {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                "title":"xiaoming"
            },
             {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                "title":"xiaoming"
            },
             {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            },
             {
                "src":require("./../assets/aviater1.jpg"),
                "alt":"test",
                "description":"名师推荐_唐诗宋词_幼儿教育_教育专区。名师推荐 袀 推荐 xxx 女,xxx教育科学研究院小学部主任,",
                "link":"",
                 "title":"xiaoming"
            },
        ],
    }),
    components:{
        LoopImage,
        TeacherAndClassCard
    }
}
</script>
<style>

</style>