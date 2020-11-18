<template>
    <div  class="group">
        <h1>课 件</h1>
        <div class="btn-group">
         <a-list item-layout="vertical" size="large" class="listbtn" :pagination="pagination" :data-source="listData">
          <a-list-item slot="renderItem" key="item.title" slot-scope="item">
             <a-button @click="navi({name:'AccessoryDetail',params:{id:item.id}})">{{item.title}} </a-button>
         </a-list-item>
         </a-list>
            <a-button @click="navi({name:'InsertAccessory'})" style="background:blue;color:white" v-if="this.$root.isShowUser==1">新增课件 </a-button>
        </div>
    </div>
</template>
<script>
import {getCourseware} from '../../api/api.js'
export default {
    mounted(){
       this.getData()
    },
    methods:{
        navi(s){
            this.$router.push(s)
        },
        getData(){
            getCourseware(this.pagination.current-1,this.pagination.pageSize,this.$route.params.id).then(Response=>{
                this.listData=Response.data.data;
                  this.pagination.total=Response.data.total
                console.log(this.listData)
             })
        }
    },
    data(){
        return {
            listData:[],
            pagination: {
            total:0,
            pageSize: 6,
            current:1,
            onChange:current=> {
            console.log(current)
            this.pagination.current=current;
            this.getData()
          },
         },
        }
    }
}
</script>

<style scoped>
.btn-group button {
    margin-left:10px;
    background-color: #fff; /* Green background */
    border-style:solid;
    border-width: 1px;
    border-color:grey;
    color:black; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    width: 900px; /* Set a width if needed */
    height:70px;
    text-align: left;
    display: block; /* Make the buttons appear below each other */
    font-size:28px;
}
.btn-group button:hover{
    color:white;
    background-color: green;
}

</style>