<template>
    <div >
        <h3>多选题（4分）</h3>
        <div class="inpt">
            <p style="margin-right:20px">标题</p>  
            <a-textarea placeholder="请输入内容" style="width: 46%; margin-right: 8px;margin-bottom:10px"/>
         </div>
         <div class="inpt" v-for="(data , index) in items" :key="index">
            <p style="margin-right:40px">{{data.title}}</p>  
            <a-input placeholder="请输入内容" style="width: 30%; margin-right: 8px"/>
            <a-button type="primary"   @click="setAnswer(index)" >{{data.istrue==true?'√':'X'}}</a-button>
         </div>

    </div>
</template>
<script>
export default {
   props:["parentIndex"],
    data:()=>({
    items:[
            {
            title:"A",istrue:true
        },  {
            title:"B",istrue:false
        },  {
            title:"C",istrue:false
        },  {
            title:"D",istrue:false
        }
            
            ],
   answer:[]
       
    }),
    methods:{

        setAnswer(index){
                this.items[index].istrue=! this.items[index].istrue;
              while(this.answer.length!=0) this.answer.pop();
                for( var i=0 ;i<this.items.length;i++){

                   if(this.items[i].istrue)this.answer.push(i);
                   }
            
             this.$emit('getAnswer',this.answer,this.parentIndex)
            
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