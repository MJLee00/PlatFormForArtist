<template>
    <div>
        <div style="width:950px;height:1000px;background:#fff">
         <a-form :form="form" @submit="handleSubmit" style="background:#fff" >
            <a-form-item v-bind="formItemLayout" label="联系人姓名" >
            <a-input disabled
                v-decorator="[
                'name',
                ]"
            />
            </a-form-item>
        <a-form-item v-bind="formItemLayout" label="联系邮箱" >
            <a-input disabled
                v-decorator="[ 'email',  ]"
            />
            </a-form-item>
        
        <a-form-item v-bind="formItemLayout" label="经营名" >
            <a-input disabled
                v-decorator="[          'productName'  ]"
            />
            </a-form-item>

        <a-form-item v-bind="formItemLayout" label="一句话介绍" >
            <a-textarea disabled
                v-decorator="[
                'intro',
                ]"
            />
            </a-form-item>

            <a-form-item v-bind="formItemLayout" label="Logo" >
            
                <img :src="src" />
        </a-form-item>

        <a-form-item v-bind="formItemLayout" label="主营项目" extra="选择您所开设的网校账号未来最主要的课程内容方向">
            <a-select default-value="书画" style="width: 120px" disabled
            v-decorator="[ 'proType' ]"
            >
            <a-select-option value="one">
                书画
            </a-select-option>
            <a-select-option value="two">
                玉石鉴定
            </a-select-option>
        
            <a-select-option value="three">
                唢呐
            </a-select-option>
            </a-select>
        
            </a-form-item>

        <a-form-item v-bind="formItemLayout" label="简介">
            <a-textarea disabled
                v-decorator="[
                'introCircumstantial',
                ]"
            />
            </a-form-item>

        <a-form-item v-bind="formItemLayout" label="承诺书签名" >

            <a-button> <a-icon type="upload" /> 点击查看 </a-button>

        </a-form-item>
         <a-form-item v-bind="formItemLayout" label="认证人姓名">
      <a-input disabled
        v-decorator="[ 
          'name',
        ]"
      />
    </a-form-item>
    
 <a-form-item v-bind="formItemLayout" label="身份证号码" >
      <a-input disabled
        v-decorator="[
          'number',
        ]"
      />
    </a-form-item>


    <a-form-item v-bind="formItemLayout" label="手持身份证人像面">
      
        <img :src="src" />


   </a-form-item>


    <a-form-item v-bind="formItemLayout" label="手持身份证国徽面" >
      
     <img :src="src"/>
   </a-form-item>

   <a-form-item v-bind="formItemLayout" label="课程计划" >
      
    <a-button> <a-icon type="upload" /> 点击查看 </a-button>
    
   </a-form-item>
   
<a-form-item v-bind="formItemLayout" label="排序号" extra="请填写数字，数字越大越靠前">
      <a-input
        v-decorator="[
          'sequence',
          {
            rules: [
  
              {
                required: true,
                message: '请输入排序号!',
              },
            ],
          },
        ]"
      />
    </a-form-item>
 <a-form-item v-bind="tailFormItemLayout">
    <a-button style="float:right;margin-right:30px" @click="back" type="primary">返回</a-button>
    <a-button  style="float:right;margin-right:30px" @click="back" type="primary" html-type="submit">保存</a-button>
    </a-form-item>
        </a-form>
        </div>

          
    </div>
</template>
<script>
export default {
    data() {
    return {
        src:"./../../assets/1.jpg",
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
      },
      
        tailFormItemLayout: {
                wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
                },
            },
    

    };
  },
  methods: {
      back(){
          this.$router.go(-1)
      },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
         else{this.$emit('child-event',1)}
      });
    },
     onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    handleChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            this.$message.success(`${info.file.name} 文件上传成功`);
        } else if (info.file.status === 'error') {
            this.$message.error(`${info.file.name} 文件上传失败`);
        }
    },
  },
}
</script>
<style scoped>

</style>