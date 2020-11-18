<template>
    <div>
     <a-list item-layout="vertical" size="large" class="listbtn" :pagination="pagination" :data-source="listData">
       <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <h1>{{item.title}}</h1>
        <button class="btn" @click="openTest(item.id)">{{item.testtitle}} <p style="font-size:10px"> {{item.endtime}}</p></button>
        <h3>{{item.content}}</h3>
         </a-list-item>
     </a-list>
        <a-button type="primary" v-if="this.$root.isShowUser==1" @click="navi('InsertTesting')">新增测试</a-button>
    </div>
</template>

<script>
import {getTesting} from "../../api/api.js"
export default {
     mounted(){
        this.getTests()
    },
    //使用函数返回data只在当前组件中生效不会污染其他组件
    //若使用data:()=>则会使pageination中的this指针失效
    data() {
  
  return {
      listData:  [],
      pagination: {
        

      
        total:0,
        pageSize: 4,
        current:1,
        onChange:current=> {
         
          console.log(current)
          this.pagination.current=current;
          this.getTests()
          
        },
      },
  }
  },
    methods:{
        getTests(){
        
        //箭头函数里的this指向的是全局this不是函数体的this
          getTesting(this.pagination.current-1,this.pagination.pageSize,this.$route.params.id).then(Response=>{
                  console.log(Response.data.data)
                    this.listData=Response.data.data
                    this.pagination.total=Response.data.total
                })
        },
        openTest(id){
          console.log(id)
            this.$router.push({name:'TestingDetail',params:{id:id}})
        },
   
        navi(s){
            this.$router.push({name:s})
        }
   
    }
}
</script>

<style scoped>
.btn{
    text-align:left;
    font-size:20px;
    background-color:grey;
    width: 900px;
    border:0;
    height:70px;
}
.listbtn button:hover{
  background:green;
}
</style>