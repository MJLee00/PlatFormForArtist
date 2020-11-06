<template>
    <div  class="group">
        <h1>课 件</h1>
        <div class="btn-group">
         <a-button @click="navi({name:'AccessoryDetail'})">第1讲 引论 </a-button>
            <a-button @click="navi({name:'InsertAccessory'})" style="background:blue;color:white">新增课件 </a-button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        navi(s){
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
    border-color:grey;
    color:black; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    width: 900px; /* Set a width if needed */
    height:70px;
    text-align: left;
    display: block; /* Make the buttons appear below each other */
    font-size:28px;
}
.btn-group button:hover{
    color:white;
    background-color: green;
}

</style>