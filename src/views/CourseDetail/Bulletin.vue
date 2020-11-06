<template>
    <div class="group">
        <h1>{{notification}}</h1>
        <h2 style="font-size:20px">{{title}}</h2>
        <span style="font-size:20px">{{content}}</span>
        <a-button type="primary" v-if="this.$root.isShowUser==1" @click="navi('InsertBulletin')">新增公告</a-button>
    </div>
</template>

<script>
export default {
    mounted:{
       //根据课程id获取是否属于当前教师的课程，若是则显示新增公告
    },
    data:()=>({
        notification:"公 告",
        title:"第8讲材料发布",
        content:`大家好，今天8:00发布第8讲的学习材料。
        在第7讲中我们分析了自上而下分析的基本问题，介绍了消除文法的左递归和消除回溯的方法，
        给出了文法可以进行自上而下分析的LL(1)条件。针对满足LL(1)条件的文法，我们可以设计自上而下分析方法了。
        今天发布的第8讲介绍了一种设计自上而下分析的方法——递归下降分析器。祝大家学习进步！
        《编译原理》课程组`
    }),
    methods:{
        navi(s){
            this.$router.push({name:s})
        }
    }
  
}
</script>

<style scoped>
.group > *{
    display:block;
}
</style>