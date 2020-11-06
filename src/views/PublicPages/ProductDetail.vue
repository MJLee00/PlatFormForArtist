<template>
    <div>
        <h1>作品主题</h1><h2>{{title}}</h2>
         <h1>作品内容</h1><h2>{{content}}</h2>
        <h1>图 片</h1> <img :src="imgSrcs"/>
           <h1>视 频</h1> <Video></Video>
           <a-button class="btn" type="primary" @click="navi">返 回</a-button>
    </div>
</template>

<script>
import Video from './../../components/Video'
export default {
    methods:{
        navi(){
            this.$router.go(-1)
        }
    },
    data:()=>({
        title:"唢呐",
        content:`唢呐是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
        videoSrc:'./../../assets/test.mp4',
        imgSrcs:require('./../../assets/1.jpg')
    }),
     components:{
      Video
    },
}
</script>

<style >
.btn{
     position:absolute;
    top:300px;
    left:1080px;
    font-size:15px;
  
    width:100px;
    height:50px;
}
</style>