<template>
    <div >
        <h3>单选题（4分）</h3>
        <div class="inpt">
            <p style="margin-right:20px">标题</p>  
            <a-textarea placeholder="请输入内容" style="width: 46%; margin-right: 8px;margin-bottom:10px"/>
         </div>
         <div class="inpt" v-for="(data , index) in items" :key="index">
            <p style="margin-right:40px">{{data.title}}</p>  
            <a-input placeholder="请输入内容" style="width: 30%; margin-right: 8px"/>
            <a-button type="primary"   @click="setAnswer(index)" >{{data.content}}</a-button>
         </div>

    </div>
</template>
<script>
export default {
   props:["parentIndex"],
    data:()=>({
    items:[
            {
            title:"A",content:"√"
        },  {
            title:"B",content:"设为正确选项"
        },  {
            title:"C",content:"设为正确选项"
        },  {
            title:"D",content:"设为正确选项"
        }
            
            ],
        
       
    }),
    methods:{

        setAnswer(index){
              
               
                for( var i=0 ;i<this.items.length;i++){
              
                    if(i===index) this.items[index].content="√";
                    else this.items[i].content="设为正确选项";}
            
             this.$emit('getAnswer',index,this.parentIndex)
            
        },
       
    }
}
</script>
<style scoped>

.inpt{
    display: flex;
}
.inpt button:hover{
   background-color: green;
}
</style>