import Vue from 'vue'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
// import { Message } from "element-ui";
import App from './App.vue'
// import env from './env'
// 根据前端跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function (response){
 let res = response.data
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    if (path != '#/index'){
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  }else{
    alert(res.msg);
    // this.$message.warning(res.msg);
    // return Promise.reject(res);
  }
});

Vue.use(VueAxios,axios);
// 阻止启动生产消息
Vue.config.productionTip = false
// $mount手动挂载
new Vue({
  /*
  演化步骤
  ES5写法
  render: function (createElement){
    return createElement(App);
  }
  ES6写法
  render(createElement){
    return createElement(App);
  }
  缩写
  render(h){
    rerurn h(App);
  }
  箭头函数写法
  render:h=> h(App);
  */
  router,
  render: h => h(App),
}).$mount('#app')
