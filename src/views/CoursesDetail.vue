<template>
    <div>
        <Navigator @getStatus="getStatus" :src="data.src"></Navigator>
        <div style="position:absolute;left:400px;top:80px;width:900px">
            <!-- 标题内容 -->
            <div style="display:flex"> 
                <h1 style="font-size:28px">{{data.name}}</h1> 
                <div style="margin-left:20px;margin-top:10px;border:1px solid rgb(121, 121, 121);background-color:rgb(184, 116, 26);height:28px;color:#fff">
                <span style="margin:5px 5px 5px 5px">
                {{data.tag}}
                </span>
                </div>
            </div>
            <h1 style="color:green">{{data.author}}</h1>

            <Bulletin v-if="status==1" style="margin-top:50px" notification="公 告" :title="data.bulletin.title" :content="data.bulletin.content"></Bulletin>
            <Bulletin v-if="status==2" style="margin-top:50px" notification="评分标准" :title="data.grades.title" :content="data.grades.content"></Bulletin>
            <Accessory v-if="status==3" style="margin-top:50px" @getStatus="getStatus"></Accessory>
            <VideosAndDoc v-if="status==31" style="margin-top:50px" title="课件 >第一章：现代艺术导论>1.1走进现代艺术"></VideosAndDoc>
            <Testing v-if="status==4"   style="margin-top:50px"
             :listData="data.testing" 
            ></Testing>

            <Discussion  v-if="status==5" style="margin-top:50px"  @getStatus="getStatus"></Discussion>
            <DiscussionDetail  v-if="status==51" @getStatus="getStatus" ></DiscussionDetail>
            <DiscussionStart v-if="status==52" @getStatus="getStatus"></DiscussionStart>
        </div>
    </div>
</template>

<script>
import Bulletin from "./../components/CoursesDetail/Bulletin"
import Testing from "./../components/CoursesDetail/Testing"
import DiscussionStart from "./../components/CoursesDetail/DiscussionStart"
import DiscussionDetail from "./../components/CoursesDetail/DiscussionDetail"
import Discussion from "./../components/CoursesDetail/Discussion"
import VideosAndDoc from "./../components/CoursesDetail/VideosAndDoc"
import Accessory from "./../components/CoursesDetail/Accessory"
import Navigator from "./../components/CoursesDetail/Navigator"
export default {
    components:{
        Navigator,
        Bulletin,
        Accessory,
        VideosAndDoc,
        Testing,
        Discussion,
        DiscussionDetail,
        DiscussionStart
    },
    methods:{
        getStatus(data){
            this.status=data;
            console.log(this.status)
        }
    },
    data:()=>({
        status:1,
        data:{
        "id":"1",
        "src":require("./../assets/aviater1.jpg"),
        "name":"西方现代艺术欣赏",
        "tag":"国家精品",
        "author":"小明",
        "bulletin":{"title":"第8讲材料发布","content":`大家好，今天8:00发布第8讲的学习材料。
        在第7讲中我们分析了自上而下分析的基本问题，介绍了消除文法的左递归和消除回溯的方法，
        给出了文法可以进行自上而下分析的LL(1)条件。针对满足LL(1)条件的文法，我们可以设计自上而下分析方法了。
        今天发布的第8讲介绍了一种设计自上而下分析的方法——递归下降分析器。祝大家学习进步！
        《编译原理》课程组`},
        "grades":{"title":"","content":`本课程满分100分，由单元测验、期末考试、课程讨论情况三部分组成：
1.单元测验占50%：课程安排单元测验5次，每次占总分的10%。测验题均为客观题(单选题、多选2.题、判断题、填空题)。
3.期末考试占40%：期末考试成绩占总分的40%，试题均为客观题。
4.课程讨论占10%：“课堂交流区”中的讨论情况占总成绩的10%，学习者在活跃度(需要在“课堂交流区”中回复的数量达到10次以上)达到标准即可获得10分，否则不得分。`},
        "testing":[{"id":"1","title":"第一章：现代艺术导论","testTitle":"第一章测验","endtime":"截止日期:2020/12/02 10:00","content":`
        本章测验均为客观题型，其中判断题每题1分，单选题每题2分，多选题每题4分。多次提交后以最高值为最终得分。
截止时间           2020/12/02 10:00
                         请务必在截止时间之前提交，截止时间后的提交不再计分
有效分数           0.00/20.00
                         你的每一次测验系统都将为你计分，并提取最高得分作为你的有效分数
有效提交次数    0/3
        `},{"id":"1","title":"第二章：现代艺术导论","testTitle":"第二章测验","endtime":"截止日期:2020/12/02 10:00","content":`
        本章测验均为客观题型，其中判断题每题1分，单选题每题2分，多选题每题4分。多次提交后以最高值为最终得分。
截止时间           2020/12/02 10:00
                         请务必在截止时间之前提交，截止时间后的提交不再计分
有效分数           0.00/20.00
                         你的每一次测验系统都将为你计分，并提取最高得分作为你的有效分数
有效提交次数    0/3
        `},{"id":"1","title":"第二章：现代艺术导论","testTitle":"第二章测验","endtime":"截止日期:2020/12/02 10:00","content":`
        本章测验均为客观题型，其中判断题每题1分，单选题每题2分，多选题每题4分。多次提交后以最高值为最终得分。
截止时间           2020/12/02 10:00
                         请务必在截止时间之前提交，截止时间后的提交不再计分
有效分数           0.00/20.00
                         你的每一次测验系统都将为你计分，并提取最高得分作为你的有效分数
有效提交次数    0/3
        `}]
        }
        

    })
}
</script>

<style scoped>
    
</style>