<template>
    <div>
     <div>
        <TeacherAndClassCard v-for="(list,index) in teacherList" :key="index" :source="list.src"
        :alter="list.alt"
        :link="list.link"
        :description="list.description"
        :title="list.title"
        :style="{
            float:'left',
            margin:'20px 60px 0px 25px'

        }"></TeacherAndClassCard>
    
        <a-pagination v-model="current2" :total="total2" @change="onChange2"
        
        :pageSize="pagesize2" style="position: absolute;bottom: -50px; margin-bottom:-100px;left: 40%;">
        </a-pagination>
     </div>
        <div style="position:absolute;width:100%;height:100%;top:800px">
        <TeacherAndClassCard v-for="(list,index) in classList" :key="index" :source="list.src"
        :alter="list.alt"
        :link="list.link"
        :description="list.description"
        :title="list.title"
        :style="{
            float:'left',
            margin:'20px 60px 0px 25px'

        }"></TeacherAndClassCard>
    
        <a-pagination v-model="current1" :total="total1" @change="onChange1"
        
        :pageSize="pagesize1" style="position: absolute;bottom: 200px;left: 40%;">
        </a-pagination>
        </div>
    </div>
</template>

<script>

import TeacherAndClassCard from "./../../components/TeacherAndClassCard"
import {getInheritsTokenByTeacherid,getStudentsByTeacherid,getTeachersByStuid} from "./../../api/api.js"
export default {
       mounted () {
              this.getInheritsToken();
              this.getUser();
  },
     components:{
        TeacherAndClassCard,
    },
     methods:{
           getInheritsToken(){
           
            getInheritsTokenByTeacherid(this.$root.id,this.current1-1,this.pageSize1).then(Response=>{
                 this.total1=Response.data.data.total;
               
                 this.classList=[];
                Response.data.data.data.forEach(element => {
                    const {inherittokenimg:src,inherittokenname:alt,inherittokencontent:description,link='',inherittokenname:title,inherittokenid:id}=element;
                    const t={src,alt,description,link,title,id};
                   t.description=t.description.substring(0,30)+"...";
                    
                    this.classList.push(t)
                });     
                })
         },
         getUser(){
             if(this.$root.isShowUser==1){
                getStudentsByTeacherid(this.$root.id,this.current2-1,this.pageSize2).then(Response=>{
                 this.total2=Response.data.data.total;
               
                 this.teacherList=[];
                Response.data.data.data[0].studentsList.forEach(element => {
                    const {profileimage:src,nickname:alt,intro:description,link='StuHomePage',nickname:title,id:id}=element;
                    const t={src,alt,description,link,title,id};
                   t.description=t.description.substring(0,30)+"...";
                       t.link={name:'StuHomePage',params:{id:t.id}}
                    this.teacherList.push(t)
                });     
                })
             }
            else  if(this.$root.isShowUser==2){
                getTeachersByStuid(this.$root.id,this.current2-1,this.pageSize2).then(Response=>{
                 this.total2=Response.data.data.total;
               
                 this.teacherList=[];
                Response.data.data.data[0].teacherList.forEach(element => {
                    const {profileimage:src,nickname:alt,intro:description,link='TeacherHomePage',nickname:title,id:id,teacher:teacher}=element;
                    const t={src,alt,description,link,title,id,teacher};
                   t.description=t.description.substring(0,30)+"...";
                       t.link={name:'TeacherHomePage',params:{id:t.id}}
                       t.description=t.teacher.businessname;
                    this.teacherList.push(t)
                });     
                })
             }
         },
          onChange1(current) {
         this.current1 = current;
         this.getInheritsToken();
      },
       onChange2(current) {
         this.current2 = current;
         this.getUser();
      },
    },
    data:()=>({
         current1: 1,
         pagesize1:4,
         current2:1,
         pagesize2:4,
         total1:0,
         total2:0,
            classList:[

        ],
        teacherList:[]
    }),
   
}
</script>

<style>

</style>
          



