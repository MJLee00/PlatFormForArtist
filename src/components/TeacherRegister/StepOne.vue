<template>
  <a-form :form="form" @submit="handleSubmit">
   
    <a-form-item v-bind="formItemLayout" label="联系人姓名" extra="请填写贵团队在云课堂的业务联系人">
      <a-input
        v-decorator="[
          'name',
          {
            rules: [
              {
                required: true,
                message: '请输入您的姓名',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    
 <a-form-item v-bind="formItemLayout" label="手机号码" extra="非常重要，将接受管理类重要验证信息" >
      <a-input
        v-decorator="[
          'phone',
          {
            rules: [
              {
                required: true,
                message: '请输入您的姓名',
              },
            ],
          },
        ]"
        placeholder="手机号"
      />
    </a-form-item>

     <a-form-item v-bind="formItemLayout" label="密码" >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码！' }] },
        ]"
        type="password"
        placeholder="8-16位密码区分大小写"
      
      >

       <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
       </a-input>
    </a-form-item>

<a-form-item v-bind="formItemLayout" label="联系邮箱" extra="务必填写联系人常用邮箱，以免遗漏官方活动、公告、通知等重要信息">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: '输入邮箱类型错误!',
              },
              {
                required: true,
                message: '请输入邮箱!',
              },
            ],
          },
        ]"
      />
    </a-form-item>
  
<a-form-item v-bind="formItemLayout" label="经营名" extra="在课堂上用以展示和传播的名称（14个字以内）">
      <a-input
        v-decorator="[
          'productName',
          {
            rules: [
  
              {
                required: true,
                message: '请输入经营名!',
              },
            ],
          },
        ]"
      />
    </a-form-item>

<a-form-item v-bind="formItemLayout" label="一句话介绍" extra="精炼介绍个人或机构的专业背景信息、课堂特色，方便用户获得直观印象，40字以内 一句话介绍个人专业背景、姓名（可选）、网校优势。专业背景可以为工作单位、职位职称、或作品或项目。">
      <a-textarea
        v-decorator="[
          'intro',
          {
            rules: [
  
              {
                required: true,
                message: '请输入一句话简介!',
              },
            ],
          },
        ]"
      />
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="Logo" extra="在课堂上用以展示和传播的logo，建议上传有辨识度的头像信息。图片尺寸：200*200像素，文件小于5M， 支持jpg、gif、png或bmp格式的图片">
      
       <a-upload
        v-decorator="[
          'logo',
          {
            rules: [
  
              {
                required: true,
                message: '请上传Logo!',
              },
            ],
          },
        ]"
    name="file"
    :multiple="false"
    
    action=""
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> 点击上传 </a-button>
  </a-upload>
   </a-form-item>

<a-form-item v-bind="formItemLayout" label="主营项目" extra="选择您所开设的网校账号未来最主要的课程内容方向">
     <a-select default-value="书画" style="width: 120px" 
      v-decorator="[
          'proType',
          {
            rules: [
  
              {
                required: true,
                message: '请输入主营项目!',
              },
            ],
          },
        ]"
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

<a-form-item v-bind="formItemLayout" label="简介" extra="清晰、准确、真实地进行个人或企业网校的简介，可描述个人教学或网校主营的内容、教学理念、目标服务群体等，100字以内。">
      <a-textarea
        v-decorator="[
          'introCircumstantial',
          {
            rules: [
  
              {
                required: true,
                message: '请输入简介!',
              },
            ],
          },
        ]"
      />
    </a-form-item>

<a-form-item v-bind="formItemLayout" label="承诺书签名" extra="下载课堂承诺书进行“签名扫描”后上传。上传图片大小：小于5M上传图片格式：jpg、gif、png、bmp">
      
       <a-upload
        v-decorator="[
          'confirm',
          {
            rules: [
  
              {
                required: true,
                message: '上传承诺书!',
              },
            ],
          },
        ]"
    name="file"
    :multiple="false"
    
    action=""
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> 点击上传 </a-button>
  </a-upload>
   </a-form-item>

    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        保存并下一步
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>

export default {
    components:{

    },
  data() {
    return {
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
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
         else{this.$emit('child-event',1)}
      });
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
};
</script>