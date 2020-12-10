<template>
 <div style="display:flex;">
   <!-- 消息列表 -->
  <div
    v-infinite-scroll="handleInfiniteOnLoad"
    class="demo-infinite-container"
    :infinite-scroll-disabled="busy"
    :infinite-scroll-distance="10"
  >
    <a-list :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item , index">
        <a-list-item-meta :description="item.description">
          <a slot="title" @click="navi(item.route)">{{ item.name}}</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
         
        </a-list-item-meta>
         <a @click="del(index)">删除</a>
      </a-list-item>
      <div v-if="loading && !busy" class="demo-loading-container">
        <a-spin />
      </div>
    </a-list>
  </div>

  <!-- 消息内容 -->
    <div class="messageContainer">
      <router-view :key="$route.fullPath"></router-view>
    </div>
 </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll';
import {getMessage} from "./../../api/api.js"
export default {
  directives: { infiniteScroll },
 
  data() {
    return {
      data: [
         
      ],
      loading: false,
      busy: false,
    };
  },
   beforeMount(){
       this.getData(res=>{
           this.data=res;
           if(res.length!=0){
             
             this.$router.push(res[0].route)
             }
       })
      
  },
  
  methods: {
      del(t){
          console.log(t);
      },
      getData(callback){
         const data=[  //{"src":"","route":"ApplyTeacher","name":"小明","description":"拜师消息"},
           //{"src":"","route":"ApplyTockenMes","name":"小红","description":"申请令牌消息"},
          //  {"src":"","route":"CommentMes","name":"小张","description":"评论消息"},
          ]
           getMessage(this.$root.id).then(Response=>{
             console.log(Response.data);
             Response.data.data.forEach(element => {
                 let el={};
                 if(element["type"]==0)
                 el["route"]={path:"ApplyTeacher:id",name:"ApplyTeacher",params:{id:element["typeid"]}}
                 el["description"]=element["content"]
                 el["name"]="小明";
                 el["src"]="";
                 
                 data.push(el);
             });
          })
          callback(data);
      },
      navi(s){
          this.$router.push(s)
      },
    handleInfiniteOnLoad() {

      if (this.data.length > 14) {
        this.$message.warning('Infinite List loaded all');
        this.busy = true;
        this.loading = false;
        return;
      }
    
    },
  },
};
</script>
<style>
.messageContainer{
      border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 8px 24px;
    height: 550px;
    width:900px;
    background-color:#fff;
   
   margin-top:50px;
}
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 550px;
  width:300px;
  background-color:grey;

 margin-left:30px;
 margin-top:50px;
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>
