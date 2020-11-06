<template>
  <div>

    <a-table  :data-source="dataSource" :pagination="pagination" :columns="columns">
     
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="确定删除吗?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">{{actionName1}}  </a>|
        </a-popconfirm>
           <a href="javascript:;" @click="navi(link)">{{actionName2}}</a>
      </template>
    </a-table>
  </div>
</template>
<script>

export default {
  props:["dataSource","columns","link","actionName1","actionName2"],
  components: {
  
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
  methods: {
    navi(s){
      this.$router.push(s)
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
      console.log(this.dataSource)
    },
  },
};
</script>
<style>

</style>
