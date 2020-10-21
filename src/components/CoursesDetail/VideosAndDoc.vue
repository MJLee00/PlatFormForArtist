<template>
    <div>
        <h1 >{{title}}</h1>
        <div class="btn-group">
            <button @click="changeStatus(0)">视 频</button> <button  @click="changeStatus(1)">文 档</button>
            <Video v-show="status==0"></Video>
            <h3 v-show="status==1">saetaset</h3>
        </div>
    </div>
</template>

<script>
import Video from "./Video"
export default {
    props:["title"],
    components:{
        Video
    },
    data:()=>({
        status:0
    }),
    methods:{
        changeStatus(s){
            this.status=s;
        }
    }
}
</script>

<style scoped>
.btn-group button {
    
    background-color: #fff; /* Green background */
    border-style:solid;
    border-width: 1px;
    border-color: grey;
    color:black; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    width: 440px; /* Set a width if needed */
    height:60px;
   line-height:20px; text-align:center; vertical-align:middle ;
   /* Make the buttons appear below each other */
    font-size:28px;
    display:inline-block
}
.btn-group button:hover{
    color:white;
    background-color: green;
}


</style>