<template>
    <div class="group">
        <h1>{{notification}}</h1>
        <h2 style="font-size:20px">{{title}}</h2>
        <span style="font-size:20px">{{content}}</span>
           <a-button type="primary" v-if="this.$root.isShowUser==1" @click="navi('InsertGrading')">新增评分标准</a-button>
    </div>
</template>

<script>
export default {
      mounted:{
       //根据课程id获取是否属于当前教师的课程，若是则显示新增公告
    },
    data:()=>({
        notification:"评分标准",
        title:"",
        content:`本课程满分100分，由单元测验、期末考试、课程讨论情况三部分组成：
1.单元测验占50%：课程安排单元测验5次，每次占总分的10%。测验题均为客观题(单选题、多选2.题、判断题、填空题)。
3.期末考试占40%：期末考试成绩占总分的40%，试题均为客观题。
4.课程讨论占10%：“课堂交流区”中的讨论情况占总成绩的10%，学习者在活跃度(需要在“课堂交流区”中回复的数量达到10次以上)达到标准即可获得10分，否则不得分。`
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