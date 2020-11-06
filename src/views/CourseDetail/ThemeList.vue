<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <a-list-item slot="renderItem" key="item.title" slot-scope="item">
      <a-list-item-meta >
        <a slot="title" @click="navi({name:'DisccussionDetail'})">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="item.avatar" />
      </a-list-item-meta>
      {{ item.content }}
    </a-list-item>
  </a-list>
</template>
<script>

export default {
  props:["listData"],
  methods:{
    navi(s){
      this.$router.push(s)
    }
  },
  data() {
    return {
   
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
    };
  },

};
</script>
<style></style>
