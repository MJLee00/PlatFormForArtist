<template>
    <div >
        <h3>判断题（2分）</h3>
        <div class="inpt">
            <p style="margin-right:20px">标题</p>  
            <a-textarea placeholder="请输入内容" style="width: 46%; margin-right: 8px;margin-bottom:10px"/>
         </div>
         <div class="inpt" >
            <a-button type="primary"   @click="setAnswer(index)" >{{isTrue!=true?'设为正确答案':'√'}}</a-button>
            <a-button type="primary"   @click="setAnswer(index)" >{{isTrue==true?'设为错误答案':'X'}}</a-button>
         </div>

    </div>
</template>
<script>
export default {
   props:["parentIndex"],
    data:()=>({
        isTrue:true
       
    }),
    methods:{

        setAnswer(){
                   this.isTrue=!this.isTrue;
             this.$emit('getAnswer',this.isTrue,this.parentIndex)
            
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