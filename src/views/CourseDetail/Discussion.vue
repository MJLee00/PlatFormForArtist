<template>
    <div>
        <h1>讨论区</h1>
        <h3>欢迎大家来到讨论区！本讨论区供各位同学就课程问题进行交流学习。请同学们认真阅读下面的【讨论区使用规则】，然后再进行相关发表，谢谢！</h3>
<a-button type="primary" @click="navi({name:'DisccussionStart'})" style="width:140px;height:40px;font-size:15px;margin-top:10px">
      发起主题
    </a-button>
    <h1 style="margin-top:50px"> 全部主题</h1>
      <ThemeList :listData="listData" ></ThemeList>
    </div>
</template>

<script>
import ThemeList from './ThemeList'
const listData = [];
for (let i = 0; i < 2; i++) {
  listData.push({
    title: `艺术大师 ${i}`,
    id:`${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      '艺术xxxxxxx',
  });
}

export default {
    components:{
        ThemeList
    },
    props:[""],
    data:()=>({
        listData
    }),
    methods:{
       navi(s){
         this.$router.push(s)
       }
    }
}
</script>

<style scoped>

</style>