<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
// 1、引入组件
// import axios from 'axios'
// import jsonp from 'jsonp'
// import storage from './storage'
export default {
  name: 'App',
// 2、注册组件
  components: {

  },
  data(){
    return{

    }

  },
  mounted () {
      // storage.setItem('a','1');
  }
}
</script>

<style>
@import "./assets/scss/reset.scss";
</style>
