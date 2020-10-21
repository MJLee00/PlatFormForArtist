<template>
    <div>
        <h1>{{author}}对您发起的{{course}}做出了评论</h1>
        <h2>内容：{{content}}</h2>

         <a-form-item>
          <a-textarea :rows="4" :value="reply" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit"  type="primary" @click="handleSubmit">
            添加评论
          </a-button>
        </a-form-item>
    </div>
</template>

<script>

export default {
    data:()=>({
        author:'小红',
        course:'《艺术鉴赏》',
        content:'讲得真好',
        link:'',
        reply:''
    }),
    methods:{
        handleSubmit() {
      if (!this.value) {
        return;
      }
        console.log(this.reply);
        
    },
    handleChange(e) {
      this.value = e.target.value;
    }
    }
}
</script>
<style scoped>

</style>