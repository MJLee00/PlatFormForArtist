<template>
<a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
       <a-list-item slot="renderItem" key="item.title" slot-scope="item">
      
  <a-comment>
    <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like(item)" />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ item.likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike(item)"
          />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ item.dislikes }}
        </span>
      </span>
    
    </template>
    <a slot="author">Han Solo</a>
    <a-avatar
      slot="avatar"
      :src="item.src"
      :alt="item.name"
    />
    <p slot="content">
     {{item.content}}
    </p>
    <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
      <span>{{ item.time}}</span>
    </a-tooltip>
  </a-comment>
      </a-list-item>
     </a-list>

</template>
<script>
import moment from 'moment';
export default {
    props:["listData"],
  data() {
    return {
      action: null,
      moment,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 1,
      },
    };
  },
  methods: {
    like(s) {
      console.log(s);
      s.likes += 1;
      s.action = 'liked';
    },
    dislike(s) {
      s.dislikes += 1;
      s.action = 'disliked';
    },
  },
};
</script>
