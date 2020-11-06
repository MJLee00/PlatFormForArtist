import Vue from 'vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App';
import router from './router'
import Antd from 'ant-design-vue';
import VueWechatTitle from 'vue-wechat-title'
import yuns from './assets/js/yun';
import VideoPlayer from 'vue-video-player';
import axios from 'axios'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer);
Vue.use(yuns);

Vue.use(VueWechatTitle)
Vue.component(Button.name, Button);
Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
new Vue({
  router,
  data:function(){
    return {
      //0未登录,1老师，2学生，3管理员
      isShowUser:0,
    }
  },
 
  render: h => h(App),
}).$mount('#app')