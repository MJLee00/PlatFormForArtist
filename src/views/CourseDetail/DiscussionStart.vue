<template>
<div>
<h1>讨论区 > 发起新主题</h1>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="标签">
      <a-input
        v-decorator="['title', { rules: [{ required: true, message: '请输入你的主题!' }] }]"
      />
    </a-form-item>
    <a-form-item label="内容">
    <a-textarea
    v-decorator="['content', { rules: [{ required: true, message: '请输入你的内容!' }] }]"
      placeholder="请输入内容"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        发起主题
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
            this.$router.go(-1)
          //更新后台主题数据 updateTheme
        }
      });
    },
  },
};
</script>