<template>
    <div>
   
     <TeacherAndClassCard v-for="(list,index) in classList" :key="index" :source="list.src"
     :alter="list.alt"
     :link="list.link"
     :description="list.description"
     :title="list.title"
     :style="{
         float:'left',
         margin:'20px 60px 0px 25px'

    }"></TeacherAndClassCard>
  
      <a-pagination v-model="current" :total="total" @change="onChange"
      
       :pageSize="pagesize"  style="position: absolute;bottom: -300px;left: 45%;"/>
   
    </div>
</template>

<script>

import TeacherAndClassCard from "./../../components/TeacherAndClassCard"
import {getRecruitsByTeacherid} from "./../../api/api.js"
export default {
       mounted () {
              this.getData();
  },
     components:{
        TeacherAndClassCard,
    },
     methods:{
           getData(){
           
            getRecruitsByTeacherid(this.$root.id,this.current-1,this.pageSize).then(Response=>{
                 this.total=Response.data.data.total;
               
                 this.classList=[];
                Response.data.data.data.forEach(element => {
                    const {img:src,title:alt,content:description,link='RecruitsDetail',title:title,id:id}=element;
                    const t={src,alt,description,link,title,id};
                   t.description=t.description.substring(0,30)+"...";
                      t.link={name:'RecruitsDetail',params:{id:t.id}}
                      
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
          



