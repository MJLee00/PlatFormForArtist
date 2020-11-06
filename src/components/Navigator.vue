<template>
    <div>
        <img :src="src" style="width:300px;height:100px;margin-bottom:10px;margin-left:10px"/>
        <div class="btn-group">
        <a-button @click="navi({name:'Bulletin'})">公 告</a-button>
        <a-button @click="navi({name:'Grading'})">评分标准</a-button>
        <a-button @click="navi({name:'Accessory'})">课 件</a-button>
        <a-button @click="navi({name:'Testing'})">测试与作业</a-button>
        <a-button @click="navi({name:'Disccussion'})">讨论区</a-button>
        </div>
    </div>
</template>

<script>
export default {
    props:["src"],
    methods:{
        navi(s)
        {
            this.$router.push(s)
        }
    }
}
</script>

<style scoped>
.btn-group button {
    margin-left:10px;
    background-color: #fff; /* Green background */
    border-style:solid;
    border-width: 1px;
    border-color: rgb(242, 242, 242);
    color:black; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    width: 300px; /* Set a width if needed */
    height:70px;
    text-align: left;
    display: block; /* Make the buttons appear below each other */
    font-size:28px;
}
.btn-group button:hover{
    color:white;
    background-color: green;
}
.btn-group button:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
}
</style>