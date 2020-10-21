<template>
    <div>
        <h1 style="font-size:30px;text-align: center;">老师入驻申请</h1>
        <h3 style="text-align: center;">注意：入驻信息需在5日之内提交，超过时间所有信息将不做草稿保留，需全部重新填写</h3>
        <Step :status="status"></Step>
         <StepOne v-show="status==0" style="margin-top:10px" @child-event="parentEvent"></StepOne>
          <StepTwo v-show="status==1" style="margin-top:10px" @child-event="parentEvent1"></StepTwo>
          <Result v-show="status==2" link="/Login" title="提交成功！"></Result>
    </div>
</template>
<script>
import Step from "../../components/TeacherRegister/Step"
import StepOne from "../../components/TeacherRegister/StepOne"
import StepTwo from "../../components/TeacherRegister/StepTwo"
import Result from "../../components/Result"
export default {
    data:()=>({
        status:0,
        
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
            this.status=data;
            console.log(this.status)
        },
         parentEvent1(data){
            console.log(data)
            this.status=data;
            console.log(this.status)
        }
    }
}
</script>
<style >

</style>