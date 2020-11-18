<template>
    <div>
     
    <!-- 课程 -->
   <span style="position:absolute;top:80px;left:30px;margin:20px 0px 30px 30px;font-size:30px;">全部课程</span>
    <div style="position:absolute;width:100%">
    <TeacherAndClassCard v-for="(list,index) in classList" :key="index" :source="list.src"
     :alter="list.alt"
     :link="list.link"
     :description="list.description"
     :title="list.title"
     :style="{
         float:'left',
         margin:'80px 60px 0px 25px'

    }"></TeacherAndClassCard>
       <a-pagination v-model="current" :total="total" @change="onChange"
      
       :pageSize="pagesize"  style="position: absolute;bottom: 0; margin-bottom:-100px;left: 40%;"/>
    </div>
  
   
    </div>    
</template>

<script>
import TeacherAndClassCard from "../components/TeacherAndClassCard"
import {getCourseIntro} from "../api/api.js"
export default {
     mounted () {
         this.getCourse()
  },
    components:{
        TeacherAndClassCard
    },
    data:()=>({
         current: 1,
         pagesize:4,
         total:0,
            classList:[

        ],
    }),
    methods:{
         getCourse(){
//箭头函数中的this指向外部作用对象
            //若使用匿名函数则会报错，查不到teacherlist
            //解构赋值  teachername(在element中):alt(为自定义属性)  
         
            getCourseIntro(this.current-1,this.pagesize).then(Response=>{
                this.total=Response.data.total;
            
                 this.classList=[];
                Response.data.data.forEach(element => {
                    const {src:src,teachername:alt,intro:description,link='CourseIntro',title:title,id:id}=element;
                    const t={src,alt,description,link,title,id};
                   t.description=t.description.substring(0,30)+"...";
                      t.link={name:'CourseIntro',params:{id:t.id}}
                      
                    this.classList.push(t)
                });     
                })
         },
        onChange(current) {
         this.current = current;
         this.getCourse();
      },
    }
}
</script>

<style scoped>
</style>

