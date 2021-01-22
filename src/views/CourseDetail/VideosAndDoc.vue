<template>
    <div>
        <h1 >{{title}}</h1>
        <div class="btn-group">
            <button @click="changeStatus(0)">视 频</button> <button  @click="changeStatus(1)">文 档</button>
            <Video :video="this.video" v-show="status==0" v-if="this.video"></Video>
           <iframe :src="src" frameborder="0" style="width: 100%; height: 500px" v-show="status==1"></iframe>
        </div>
    </div>
</template>

<script>
import Video from "./../../components/Video"
import {getCoursewareByid} from "../../api/api.js"
export default {
    mounted(){
        getCoursewareByid(this.$route.params.id).then(Response=>{   
                this.video=Response.data.video      

                this.src='http://www.atspssing.com/doc/'+Response.data.document
        })
    },

    components:{
        Video,
    },

    data:()=>({
        video:"",
        src:'',
        status:0,
        title:"课 件"
    }),
    methods:{
        changeStatus(s){
            this.status=s;
        },
      
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