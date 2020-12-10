<template>
    <div>
     <h1 style="font-size:30px;text-align: center;">拜师申请</h1>
        <Step :status="status" ></Step>
         <StepOne v-show="status==0" style="margin-top:10px" @child-event="parentEvent"></StepOne>
          <StepTwo v-show="status==1" style="margin-top:10px" :recruitid="recruitid" :datafromStepOne="datafromStepOne" @child-event="parentEvent1"></StepTwo>
          <Result v-show="status==2" link="/"  title="提交成功！" btext="回到首页"></Result>
    </div>
</template>

<script>
import Step from './../../components/TeacherRegister/Step'
import StepOne from "../../components/ApplyTeacher/StepOne"
import StepTwo from "../../components/ApplyTeacher/StepTwo"
import Result from "../../components/Result"
export default {
    created(){
        console.log(this.$route.params.id)
    },  
      data:()=>({
        status:0,
        datafromStepOne:null,
        recruitid:2,
    }),
    components:{
         Step,
        StepOne,
        StepTwo,
        Result
    },
     methods:{
        parentEvent(data){
            console.log(data)
            this.status=data.status;
            this.datafromStepOne=data.values;
            this.recruitid=this.$route.params.id;
            console.log(this.status)
        },
         parentEvent1(data){
            console.log(data)
            this.status=data.status;
            console.log(this.status)
        }
    }
}
</script>
<style scoped>

</style>