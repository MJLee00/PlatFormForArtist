<template>
  <a-steps :current="status" style="width:800px;margin-left: auto;margin-right: auto;">
    <a-step title="1.填写基本信息">
    </a-step>
    <a-step title="2.填写身份资质"  />
     <a-step title="3.提交成功"  />
  </a-steps>
  
</template>

<script>
export default {
    props:["status"]
}
</script>
<style scoped>

</style>