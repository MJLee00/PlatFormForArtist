<template>
    <div>
    
   <!-- 单选 -->
   <h1>单选题（4分）</h1>
             <div class="groups">
            <div  style=" margin-right: 50px;" v-for="(data,index) in singleList" :key="index" >
               
                <h3>标题：{{data.title}}</h3>
                <a-checkbox-group @change="singleonChange($event,index)" v-model="data.choice" >
                 <a-row>
                   
                    <div class="option"> 
                      
                        <a-checkbox value="A"/>    
                        <h3 >A</h3>  
                        <h3> {{data.A}}</h3>
                     </div>
                         
                      
                    <div class="option"> 
                      
                        <a-checkbox value="B"/>   
                         <h3 >B</h3>  
                        <h3> {{data.B}}</h3>
                     </div>
                       
                    <div class="option"> 
                       
                        <a-checkbox  value="C"/>  
                         <h3 >C</h3>  
                        <h3> {{data.C}}</h3>
                     </div>
                       
                    <div class="option"> 
                      
                        <a-checkbox  value="D"/>   
                         <h3 >D</h3>  
                        <h3> {{data.D}}</h3>
                     </div>
                       
                 </a-row>
                </a-checkbox-group>
            </div>
            </div>

                <h1>多选题（4分）</h1>
              <!--多选 -->
                <div class="groups">
            <div style=" margin-right: 50px;" v-for="(data,index) in multipleList" :key="index" >
               
                <h3>标题：{{data.title}}</h3>
                <a-checkbox-group @change="multipleonChange($event,index)" v-model="data.choice" >
                 <a-row>
                   
                    <div class="option"> 
                      
                        <a-checkbox value="A"/>    
                        <h3 >A</h3>  
                        <h3> {{data.A}}</h3>
                     </div>
                         
                      
                    <div class="option"> 
                      
                        <a-checkbox value="B"/>   
                         <h3 >B</h3>  
                        <h3> {{data.B}}</h3>
                     </div>
                       
                    <div class="option"> 
                       
                        <a-checkbox  value="C"/>  
                         <h3 >C</h3>  
                        <h3> {{data.C}}</h3>
                     </div>
                       
                    <div class="option"> 
                      
                        <a-checkbox  value="D"/>   
                         <h3 >D</h3>  
                        <h3> {{data.D}}</h3>
                     </div>
                       
                 </a-row>
                </a-checkbox-group>
            </div>
                </div>

                <h1>判断题（2分）</h1>
             <!--判断题-->
               <div class="groups">
            <div style=" margin-right: 50px;"  v-for="(data,index) in judgeList" :key="index" >
                <h3>标题：{{data.title}}</h3>
                <a-checkbox-group @change="judgeonChange($event,index)" v-model="data.choice" >
                 <a-row>
                   
                    <div class="option"> 
                      
                        <a-checkbox value="A"/>    
                        <h3 >√</h3>  
         
                     </div>
                         
                      
                    <div class="option"> 
                      
                        <a-checkbox value="B"/>   
                         <h3 >B</h3>  
                   
                     </div>
                
                       
                 </a-row>
                </a-checkbox-group>
            </div>
               </div>
             <!--问答题-->
             <h1>问答题（4分）</h1>
               <div class="groups">
            <div style=" margin-right: 50px;" v-for="(data,index) in gapFillingList" :key="index" >
                <h3>标题：{{data.title}}</h3>
               <h3>答案<a-input v-model="data.answer" placeholder="请输入答案" style="width: 30%; margin-right: 8px"/></h3> 
            </div>
               </div>
            <a-button type="primary" style="display:block;margin-top:20px" @click="validate">提交</a-button>
    </div>
</template>

<script>
export default {
    mounted:{
        //获取单选题/多选题/填空题/判断题
    },
    data(){
        return {
      
            singleList:[{title:'第一题：12312',A:'啊手动阀手动阀',B:'XXXssssssssssssssssss',C:'XXX',D:'XXX',answer:0,choice:'A'},{title:'第一题：12312',A:'XXX',B:'XXX',C:'XXX',D:'XXX',answer:0,choice:'A'}],
            multipleList:[{title:'第一题：12312',A:'XXX',B:'XXX',C:'XXX',D:'XXX',answer:[0,1],choice:['A']},{title:'第一题：12312',A:'XXX',B:'XXX',C:'XXX',D:'XXX',answer:[0,1],choice:['A']}],
            gapFillingList:[{title:'第一题：12312',answer:'123'},{title:'第一题：12312',answer:'123'}],
            judgeList:[{title:'第一题：12312',answer:true,choice:'A'},{title:'第一题：12312',answer:true,choice:'B'}]
        }
    } ,
    methods: {
    singleonChange(event,index) {
 
       this.singleList[index].choice=event[event.length-1];
    },
    multipleonChange(event,index) {

       this.multipleList[index].choice=event;
    },
     judgeonChange(event,index) {

       this.judgeList[index].choice=event[event.length-1];
    },
    validate(){
        this.$router.go(-1)
    }
  },
}
</script>

<style scoped>
h1{
    margin-top:30px;
}
.groups{
    display:inline-flex
}

.option > *{
    display: inline-flex;
    margin-right: 10px;
}
</style>