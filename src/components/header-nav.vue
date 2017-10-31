<template>
  <div id="header">
    <div class="nav-global">
      <div class="container">
        <div class="logo">
          <router-link to="/home"><img src="../assets/img/nubia-logo.png"/></router-link>
        </div>
        <ul class="nav-aside">
          <li class="nav-user">
            <a href="javascript:;">个人中心</a>
            <!--active-->
            <div class="nav-user-wrapper">
              <div class="nav-user-list">
                <dl class="nav-user-avatar">
                  <dd><span class="ng-scope"></span></dd>
                  <dt class="ng-binding">+86 138****9453</dt>
                </dl>
                <ul>
                  <router-link class="order" :to="{name: 'Account'}" exact tag="li"><a href="javascript:;">我的订单</a></router-link>
                  <router-link class="address" tag="li" to="address"><a href="javascript:;">收货地址</a></router-link>
                  <li class="logout"><a href="javascript:;">退出</a></li>
                </ul>
              </div>
            </div>
          </li>
          <!--active-->
          <car-panel></car-panel>
        </ul>
        <ul class="nav-list">
          <li class="active"><router-link to="/home">首页</router-link></li>
          <li class="active"><router-link to="/">手机</router-link></li>
          <li><router-link :to="{name:'Item',query: {itemId:100027101}}">配件</router-link></li>
          <li><a href="javascript:;">摄影</a></li>
          <li><a href="javascript:;">服务</a></li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
  import carPanel from '@/components/car-panel'
  export default {
    components: {
      carPanel
    }
  }
</script>

<style>
.logo{
    width:190px;
    height:60px;
    float:left;
    overflow: hidden;
    margin-top:22px;
}
.logo img{
    margin-bottom:-50px;
}
</style>
