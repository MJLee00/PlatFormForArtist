<template>
    <div>
     <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
       <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <h1>{{item.title}}</h1>
        <button class="btn" @click="openTest">{{item.testTitle}} <p style="font-size:10px"> {{item.endtime}}</p></button>
        <h3>{{item.content}}</h3>
         </a-list-item>
     </a-list>
    </div>
</template>

<script>
export default {
    props:["listData"],
    data() {
    return {
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 2,
      },
    };
  },
    methods:{
        openTest(){

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
</style>