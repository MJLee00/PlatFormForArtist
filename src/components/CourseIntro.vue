<template>
    <div>
        <h1 style="font-size:28px">{{title}}</h1>
        <h2>{{author}}</h2>
        <h3 style="position:absolute;top:100px;width:800px">课程简介:{{intro}}</h3>
        <h3 style="position:absolute;top:250px;width:800px">摘    要:{{abstract}}</h3>
        <h3 style="position:absolute;top:400px;width:800px">课程概述:{{summurize}}</h3>
        <h3 style="position:absolute;top:550px;width:800px">授课目标:{{goal}}</h3>
        <h3 style="position:absolute;top:700px;width:800px">课程大纲:{{outline}}</h3>
         <h3 style="position:absolute;top:900px;width:800px">参考资料:{{reference}}</h3>
         <h3 style="position:absolute;top:1100px;width:800px">课程人数:{{people}}</h3>
    </div>
</template>

<script>
export default {
    props:["src",
                "id",
                  "title",
                "author",
                "intro",
                "abstract",
                "summurize",
                "goal",
                "outline",
                "reference",
                "people"]
}
</script>

<style scoped>

</style>