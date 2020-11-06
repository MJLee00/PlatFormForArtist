<template>
    <div>
       <div style="width:900px;height:200px;background:#fff">
       <div style="display:flex;position:absolute;left:300px;top:150px;">
        <img  src="./../../assets/talk.jpg"/>  <a-statistic title="代办事项" :value="process" style="margin-right: 50px" >   </a-statistic>
       </div>
      
       
       </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        process:20
    }),
    methods:{
        navi(s){
            this.$router.push(s)
        }
    }
}
</script>

<style >

</style>