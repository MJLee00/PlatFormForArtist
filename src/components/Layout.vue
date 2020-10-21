<template>
    <div>
        <Header v-if="this.$root.isShowUser!=3"><slot ></slot></Header>
        <AdminHeader v-if="this.$root.isShowUser==3"><slot ></slot></AdminHeader>
    </div>
</template>

<script>
import Header from "./Header"
import AdminHeader from "./AdminHead"
export default {
    components:{
        Header,
        AdminHeader
    }
}
</script>

<style scoped>

</style>