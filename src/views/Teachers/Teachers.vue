<template>
    <div>

     
    <!-- 课程 -->
   <span style="position:absolute;top:80px;left:30px;margin:20px 0px 30px 30px;font-size:30px;">全部教师</span>
    <div style="position:absolute;top:150px; width:100%">
  <TeacherAndClassCard v-for="(list,index) in classList" :key="index" :source="list.src"
     :alter="list.alt"
     :link="list.link"
     :description="list.description"
     :title="list.title"
     :style="{
         float:'left',
         margin:'20px 60px 0px 25px'

    }"></TeacherAndClassCard>
  
       <a-pagination v-model="current" :total="total" 
        @change="onChange"
      
       :pageSize="pagesize"
       show-less-items style="position: absolute;bottom: 0; margin-bottom:-100px;left: 40%;"/>
    </div>
  
   
    </div>    
</template>

<script>
import TeacherAndClassCard from "../../components/TeacherAndClassCard"
import {getTeachers} from "./../../api/api.js"
export default {
       mounted () {
              this.getData();
  },
     components:{
        TeacherAndClassCard,
    },
     methods:{
           getData(){
           
            getTeachers(this.current-1,this.pageSize).then(Response=>{
                 this.total=Response.data.data.total;
               
                 this.classList=[];
                Response.data.data.data.forEach(element => {
                    const {profileimage:src,intro:alt,intro:description,link='TeacherHomePage',title:title,id:id,teacher:teacher}=element;
                    const t={src,alt,description,link,title,id,teacher};
                    t.title=t.teacher.businessname;
                   t.description=t.description.substring(0,30)+"...";
                      t.link={name:'TeacherHomePage',params:{id:t.id}}
                    this.classList.push(t)
                });     
                })
         },
          onChange(current) {
         this.current = current;
         this.getData();
      },
    },
    data:()=>({
         current: 1,
         pagesize:4,
         total:0,
            classList:[

        ],
    }),
   
}
</script>

<style>

</style>
          