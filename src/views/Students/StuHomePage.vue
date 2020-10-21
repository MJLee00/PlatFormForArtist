<template>
    <div>
   
            <div>
                <img style="width:100%;height:200px" src="./../../assets/background.jpg"/>  
                <a-avatar :src=src style="position:absolute;width:100px;height:100px;left:100px;top:130px"  >
                </a-avatar>
                <h1 style="position:absolute;width:100px;height:100px;left:230px;top:160px;">{{author}}</h1>
                 <h2 style="position:absolute;width:100px;height:100px;left:230px;top:190px;">{{intro}}</h2>
            </div>

            <div class="btn-group">
                <a-button @click="navi('/StuHomePage/CourseList',1)">已选课程</a-button>
                <a-button @click="navi('/StuHomePage/ProductList',2)">我的作品</a-button>
                <a-button @click="navi({name:'Recruits'})">拜师学艺</a-button>
                <a-button @click="navi('/StuHomePage/PassingList')">我的传承</a-button>
                <a-button @click="navi({name:'MessagingStu',params:{index:'/StuHomePage'}},5)">我的消息</a-button>
        
            </div>

            <div class="content">
                <a-button  v-if="status==1||status==2" type="primary" class="addbtn"  @click="Insert">{{btnText}}</a-button>
                <router-view   ></router-view>
            </div>
              
   
   
    </div>    
</template>

<script>

export default {
    methods:{
        navi(p,s){
            this.status=s;
            this.$router.push(p);
        },
        Insert(){
             if(this.status==1){this.$router.push('/Courses')}
            else if (this.status==2){this.$router.push('ProductInsert')}
        }
    },
    components:{
       
    },
    watch:{
        status(){
            if(this.status==1){this.btnText="选课"}
            else if (this.status==2){this.btnText="添加作品"}
        }
    },
    data:()=>({
        src:require("./../../assets/aviater1.jpg"),
        author:'小明',
        intro:`个人简介`,
        status:1,
        btnText:'添加课程'
         
    })
}
</script>

<style scoped>
.addbtn{
    
    position:absolute;
    top:300px;
    left:1200px;
    font-size:15px;
  
    width:100px;
    height:50px;
}
.content{
    margin-top:70px;
    width:100%;
    height:1300px;
    background-color:  gainsboro;
    border:none;
    background-image: none;
}
.btn-group button {
   margin-left:5px;
    background-color: #fff; /* Green background */
    border-style:solid;
    border-width: 1px;
    border-color: #fff;
    color:black; /* White text */
    
    cursor: pointer; /* Pointer/hand icon */
    width: 100px; /* Set a width if needed */
    height:70px;
    text-align: center;
    float:left; /* Make the buttons appear below each other */
    font-size:15px;
}
.btn-group button:hover{
    color:blue;
}
.btn-group button:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
}
</style>

