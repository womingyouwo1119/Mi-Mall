<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车(0)</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name=""keyword>
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHeader"
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/base";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #fff;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " ";
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
            transition: all .2s;
          }
          &:after {
            content: " ";
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: all .2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          line-height: 112px;
          font-size: 16px;
          margin-right: 20px;
          span {
            cursor: pointer;
            &:hover {
              color: #FF6600;
            }
          }
        }
      }
    }
  }
  .header-search {
    width: 319px;
    .wrapper {
      height: 50px;
      border: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      input {
        box-sizing: border-box;
        border-right: 1px solid #e0e0e0;
        width: 264px;
        height: 50px;
        padding-left: 14px;
      }
      a{
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("/imgs/icon-search.png") no-repeat center;
        background-size: contain;
      }
    }
  }
}
</style>
