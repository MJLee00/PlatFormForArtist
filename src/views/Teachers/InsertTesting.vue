<template>
  <a-form-model

    
    v-bind="formItemLayoutWithOutLabel"
  >
  <a-form-model-item
 
      v-bind="formItemLayout"
      :rules="{
        required: true,
        message: '内容不得为空',
        trigger: 'blur',
      }"
    >
    <h1    > 截止日期</h1>
   <a-input placeholder="请输入截止日期" style="width: 30%; margin-right: 8px"/>
  </a-form-model-item>
    <a-form-model-item
      v-for="(data, index) in dataList"
      :key="data"
      v-bind="formItemLayout"

      :rules="{
        required: true,
        message: '内容不得为空',
        trigger: 'blur',
      }"
    >
   
      <Single :parentIndex="index"
       @getAnswer="getAnswer"
      ></Single>

      <a-icon
        v-if="dataList.length > 1"
        class="dynamic-delete-button"
        type="minus-circle-o"
        :disabled="dataList.length === 1"
        @click="removeSingle(data)"
      />
    </a-form-model-item>

    <a-form-model-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="addSingle">
        <a-icon type="plus" /> 添加单选题
      </a-button>
    </a-form-model-item>


<a-form-model-item
      v-for="(data, index) in judgeList"
      :key="data"
      v-bind="formItemLayout"

      :rules="{
        required: true,
        message: '内容不得为空',
        trigger: 'blur',
      }"
    >
   
      <Judge :parentIndex="index"
       @getAnswer="getAnswer"
      ></Judge>

      <a-icon
        v-if="dataList.length > 1"
        class="dynamic-delete-button"
        type="minus-circle-o"
        :disabled="dataList.length === 1"
        @click="removeJudge(data)"
      />
    </a-form-model-item>

    <a-form-model-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="addJudge">
        <a-icon type="plus" /> 添加判断题
      </a-button>
    </a-form-model-item>




<a-form-model-item
      v-for="(data, index) in gpfillingList"
      :key="data"
      v-bind="formItemLayout"

      :rules="{
        required: true,
        message: '内容不得为空',
        trigger: 'blur',
      }"
    >
   
      <GapFilling :parentIndex="index"
       @getAnswer="getAnswer"
      ></GapFilling>

      <a-icon
        v-if="dataList.length > 1"
        class="dynamic-delete-button"
        type="minus-circle-o"
        :disabled="dataList.length === 1"
        @click="removeGapFilling(data)"
      />
    </a-form-model-item>

    <a-form-model-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="addGapFilling">
        <a-icon type="plus" /> 添加填空题
      </a-button>
    </a-form-model-item>





<a-form-model-item
      v-for="(data, index) in multipleChoice"
      :key="data"
      v-bind="formItemLayout"

      :rules="{
        required: true,
        message: '内容不得为空',
        trigger: 'blur',
      }"
    >
   
      <MultipleChoice :parentIndex="index"
       @getAnswer="getAnswer"
      ></MultipleChoice>

      <a-icon
        v-if="dataList.length > 1"
        class="dynamic-delete-button"
        type="minus-circle-o"
        :disabled="dataList.length === 1"
        @click="removeMultipleList(data)"
      />
    </a-form-model-item>

    <a-form-model-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="dashed" style="width: 60%" @click="addMultipleList">
        <a-icon type="plus" /> 添加多选题
      </a-button>
    </a-form-model-item>


    <!-- 提交 -->
    <a-form-model-item v-bind="formItemLayoutWithOutLabel">
      <a-button type="primary" html-type="submit" @click="validate()">
        提交
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import Single from "./../../components/Testing/SingleChoice"
import Judge from "./../../components/Testing/Judge"
import GapFilling from "./../../components/Testing/GapFilling"
import MultipleChoice from "./../../components/Testing/MultipleChoice"
export default {
    components:{
        Single,
        Judge,
        GapFilling,
        MultipleChoice
    },
  data() {
    return {
            
      formItemLayout: {
        labelCol: {
          xs: { span: 0 },
          sm: { span: 0 },
        },
        wrapperCol: {
          xs: { span: 24 ,offset:0},
          sm: { span: 20 ,offset:0},
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
     dataList:[

     ],
     judgeList:[],
     gpfillingList:[],
     multipleChoice:[]
    };
  },
  methods: {
      changes(value){
          console.log(value);
          console.log(this.dynamicValidateForm.domains)
          this.dynamicValidateForm.domains[0].value[0]["A"]=value;
      },
      getAnswer(index,parentIndex){
          console.log(index+' '+parentIndex)
      },
    
    removeSingle(item) {
      let index = this.dataList.indexOf(item);
      if (index !== -1) {
        this.dataList.splice(index, 1);
      }
    },
    addSingle() {
      this.dataList.push(
          {});
    },
    addJudge(){
        this.judgeList.push({});
    },
    removeJudge(item){
         let index = this.judgeList.indexOf(item);
      if (index !== -1) {
        this.judgeList.splice(index, 1);
      }
    },

       removeGapFilling(item) {
      let index = this.gpfillingList.indexOf(item);
      if (index !== -1) {
        this.gpfillingList.splice(index, 1);
      }
    },
    addGapFilling() {
      this.gpfillingList.push(
          {});
    },
    addMultipleList(){
        this.multipleChoice.push({});
    },
    removeMultipleList(item){
         let index = this.multipleChoice.indexOf(item);
      if (index !== -1) {
        this.multipleChoice.splice(index, 1);
      }
    }
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
