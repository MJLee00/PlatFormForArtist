<template>
    <div>
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
            style="width:300px"
        >

          <a-form-item v-bind="formItemLayout" label="视频" >
                <Upload
                    v-decorator="[
                    'video',
                    {
                        rules: [
            
                        {
                            required: true,
                            message: '请上传视频!',
                        },
                        ],
                    },
                    ]"
                    name="video"
                ></Upload>
          </a-form-item>

        <a-form-item v-bind="formItemLayout" label="文件" >
                <Upload
                    v-decorator="[
                    'doc',
                    {
                        rules: [
            
                        {
                            required: true,
                            message: '请上传文件!',
                        },
                        ],
                    },
                    ]"
                    name="file"
                ></Upload>
          </a-form-item>
  <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit">
        提交
      </a-button>
    </a-form-item>
   </a-form>
    </div>
</template>

<script>
import Upload from '../../components/Upload'
export default {
  components:{
    Upload
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
    this.form = this.$form.createForm(this, { name: 'uploadAccessory' });
  },
  methods: {
      navi(s){
          this.$router.push(s)
      },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          console.log(this.$yuns.format(new Date(),"yyyy/MM/dd"))
          this.$router.go(-1)
        }
           this.$router.go(-1)
       

      });
    },
  },
}
</script>

<style scoped>

</style>