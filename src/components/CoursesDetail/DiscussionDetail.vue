<template>
    <div class="container">
        <h1>讨论区 > 主题详情</h1>
        <img src="./../../assets/u152.png"/>
          <Comment 
         :listData="comments" 
         ></Comment>
         <Reply :comments="comments" @getComment="getComment"></Reply>
           <a-button type="primary" @click="returnStatus" style="float:right;width:100px">
            返 回
           </a-button>
    </div>
</template>

<script>
import Comment from "./../Comments"
import Reply from "./../Reply"
export default {
    components:{
        Comment,
        Reply
    },
    methods:{
        getComment(data){
            this.comments=data
        },
        returnStatus(){
            this.$emit('getStatus',5)
        }
    },
      data:()=>({
        comments:[{
            "name":"qasdfk",
            "time":"2020/10/1",
            "src":require("./../../assets/aviater1.jpg"),
            "content":"内容丰富，形式新颖",
            "likes":12,
            "dislikes":1
        },{
            "name":"qasdfk",
            "time":"2020/10/1",
            "src":require("./../../assets/aviater1.jpg"),
            "content":"内容丰富，形式新颖",
            "likes":12,
            "dislikes":1
        }],
      })
}
</script>

<style scoped>
.container{
    display: block;
}
</style>