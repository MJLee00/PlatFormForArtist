<template>
    <div>
        <h1>{{author}}已达成课程要求，向您申请传承令牌。</h1>
        <a-button type="primary">同意</a-button>   <a-button type="primary">拒绝</a-button>
    </div>
</template>

<script>
export default {
    data:()=>({
        author:'小张'
    })
}
</script>
<style scoped>

</style>