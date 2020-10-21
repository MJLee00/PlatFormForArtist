<template>
  <div>
    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            添加评论
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>
<script>
import moment from 'moment';
export default {
    props:["comments"],
  data() {
    return {
      submitting: false,
      value: '',
      moment,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;
        console.log(this.value);
        this.comments.push(
            {
                "name":"qasdfk",
            "time":moment().fromNow(),
            "src":require("./../assets/aviater1.jpg"),
            "content":this.value,
            "likes":0,
            "dislikes":0
            }
        )

        this.value = '';
        this.$emit('getComment',this.comments);
        this.submitting=false;
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
