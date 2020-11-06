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
            <router-view></router-view>

        </div>
    </div>
</template>

<script>

import Navigator from "./../components/Navigator"
export default {

    components:{
        Navigator,

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
     
        }
        

    })
}
</script>

<style scoped>
    
</style>