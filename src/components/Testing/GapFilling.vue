<template>
    <div >
        <h3>填空题（4分）</h3>
        <div class="inpt">
            <p style="margin-right:20px">标题</p>  
            <a-textarea placeholder="请输入内容" style="width: 46%; margin-right: 8px;margin-bottom:10px"/>
         </div>
         <div class="inpt" >
          <p style="margin-right:20px">答案</p>  
             <a-input v-model="answer" placeholder="请输入内容" style="width: 30%; margin-right: 8px"/>
          
         </div>

    </div>
</template>
<script>
export default {
   props:["parentIndex"],
    data:()=>({
        answer:""
       
    }),
    methods:{

        setAnswer(){
               
             this.$emit('getAnswer',this.answer,this.parentIndex)
            
        },
       
    }
}
</script>
<style scoped>

.inpt{
    display: flex;
}
.inpt button{
    margin-right:10px;
}
.inpt button:hover{
   background-color: green;
}
</style>