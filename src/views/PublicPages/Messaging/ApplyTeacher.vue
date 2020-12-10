<template>
    <div>
        <h1>{{author}}刚刚对您发起的招募信息进行了拜师申请,以下是学生申请信息。</h1>
          <a-form-item  :label-col="{ span: 2 }" :wrapper-col="{ span: 22}"  label="自我介绍">
          <p style="line-height:15px">{{intro}}</p>
        </a-form-item>

  <a-form-item  :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }"  label="申请原因">
          <p style="line-height:15px">{{reason}}</p>
        </a-form-item>

  <a-form-item  :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }"  label="自身优势">
          <p style="line-height:15px">{{advantage}}</p>
        </a-form-item>
        <a-form layout="inline" >
         <a-form-item   :label-col="{ span: 10}" :wrapper-col="{ span: 15 }"  label="奖项">
          <img :src="imgs" style="width:300px;height:100px" />
        </a-form-item>
        <a-form-item  :label-col="{ span: 10 }" :wrapper-col="{ span:15 }"  label="姓名">
          <p style="line-height:15px">{{author}}</p>
        </a-form-item>
        <a-form-item  :label-col="{ span: 10}" :wrapper-col="{ span:15 }"  label="手机号码">
          <p style="line-height:15px">{{phone}}</p>
        </a-form-item>
         <a-form-item   :label-col="{ span: 10}" :wrapper-col="{ span: 15 }"  label="联系邮箱">
          <p style="line-height:15px">{{email}}</p>
        </a-form-item>
       
        </a-form>
        <div style="float:right">
         <a-button type="primary">同意</a-button>   <a-button type="primary">拒绝</a-button>
        </div>
    </div>
</template>

<script>
import {getApplyteacher} from "./../../../api/api"
export default {
  mounted(){
    getApplyteacher(this.$route.params.id).then(Response=>{
      console.log(Response.data.data);
      const data=Response.data.data;
       this.author=data.name;
       this.advantage=data.advangtage;
       this.intro=data.selfintro;
       this.reason=data.reason;
       this.phone=data.phone;
       this.email=data.email;
       this.imgs=data.prize;
    })
  },
    data(){
      return {
        author:'小张',
          intro:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Aenean euismod bibendum laoreet. Proin gravida dolor sit amet 
           lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
           sic tempor. Sociis natoque penatibus et magnis dis parturient montes, n
           ascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.`,
           reason:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Aenean euismod bibendum laoreet. Proin gravida dolor sit amet 
           lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
           sic tempor. Sociis natoque penatibus et magnis dis parturient montes, n
           ascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.`,
           advantage:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Aenean euismod bibendum laoreet. Proin gravida dolor sit amet 
           lacus accumsan et viverra justo commodo. Proin sodales pulvinar 
           sic tempor. Sociis natoque penatibus et magnis dis parturient montes, n
           ascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.`,
           phone:'123123123',
           email:'123918203912',
           imgs:require('./../../../assets/1.jpg')
    }}
}
</script>
<style scoped>

</style>