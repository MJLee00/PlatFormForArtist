<template>
    <div style="display:block">
        <h1>{{notification}}</h1>
        <h2 style="font-size:20px">{{title}}</h2>
        <span style="font-size:20px">{{content}}</span>
    </div>
</template>

<script>
export default {
    props:["notification","title","content"]
}
</script>

<style scoped>

</style>