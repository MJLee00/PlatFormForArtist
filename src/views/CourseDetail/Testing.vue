<template>
    <div>
     <a-list item-layout="vertical" size="large" class="listbtn" :pagination="pagination" :data-source="listData">
       <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <h1>{{item.title}}</h1>
        <button class="btn" @click="openTest(item.id)">{{item.testTitle}} <p style="font-size:10px"> {{item.endtime}}</p></button>
        <h3>{{item.content}}</h3>
         </a-list-item>
     </a-list>
        <a-button type="primary" v-if="this.$root.isShowUser==1" @click="navi('InsertTesting')">新增测试</a-button>
    </div>
</template>

<script>
export default {
    
    data() {
    return {
      listData:  [{"id":"1","title":"第一章：现代艺术导论","testTitle":"第一章测验","endtime":"截止日期:2020/12/02 10:00","content":`
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
        `}],
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 2,
      },
    };
  },
    methods:{
        openTest(id){
          console.log(id)
            this.$router.push({name:'TestingDetail'})
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