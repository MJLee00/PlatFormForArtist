<template>
    <div>
      <a-list item-layout="horizontal" size="large" :pagination="pagination" :data-source="listData">
       <a-list-item slot="renderItem" key="item.title" slot-scope="item">
             <TeacherAndClassCard   :source="item.src"
     :alter="item.alt"
     :link="item.link"
     :description="item.description"
     :style="{
         float:'left',
         margin:'0px 60px 0px 25px'

    }"></TeacherAndClassCard>
       </a-list-item>
     </a-list>
    </div>
</template>

<script>
import TeacherAndClassCard from "../components/TeacherAndClassCard"
export default {
    components:{
TeacherAndClassCard
    },
     props:["listData"],
    data() {
    return {
      pagination: {
        style:"text-align:center",
        onChange: page => {
          console.log(page);
        },
        pageSize: 1,
      },
       
    };
  },
    methods:{
        openTest(){

        }
    }
}
</script>
<style  >

</style>