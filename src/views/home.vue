<template>
<div>
  <div class="homeHeader">
  <div class="up">
      <ul>
          <li>
             <router-link :to="{name:'Item',query: {itemId:100027101}}">
             <img src="../assets/img/nav-phone1.png"/>Z11 miniS <span class="point">新款</span>
             </router-link>
          </li>
          <li>
              <router-link :to="{name:'Item',query: {itemId:100029901}}">
              <img src="../assets/img/nav-phone2.png"/> Z11</router-link>
          </li>
          <li>
              <router-link :to="{name:'Item',query: {itemId:100027101}}"><img src="../assets/img/nav-phone3.png"/>
              Z11 Max</router-link>
          </li>
          <li>
              <router-link :to="{name:'Item',query: {itemId:100029901}}"><img src="../assets/img/nav-phone4.png"/>
              Z11 mini</router-link>
          </li>
          <li>
              <router-link :to="{name:'Item',query: {itemId:100027101}}"><img src="../assets/img/nav-phone5.png"/>
             N1</router-link>
          </li>
          <li>
              <router-link :to="{name:'Item',query: {itemId:100029901}}"><img src="../assets/img/nav-phone6.png"/>
              布拉格S</router-link>
          </li>
          <li>
              <router-link :to="{name:'Item',query: {itemId:100027101}}"><img src="../assets/img/nav-phone7.png"/>
              My 布拉格</router-link>
          </li>
      </ul>
  </div>
    <div class="center">
       <router-link to="/"><img ref="pic" :src="urlData" /></router-link>
        <ul>
            <li @click="one"></li>
            <li @click="two"></li>
            <li @click="three"></li>
            <li @click="four"></li>
        </ul>
    </div>
    <div class="last">
        <div>
        <ul>
            <li>
                <img src="../assets/img/video1.jpg"/>
            </li>
        </ul>
        <div>
            <router-link to="/"><img src="../assets/img/nb-pro-video-ico-s.png"/></router-link>
            <h3>Z11 黑金版</h3> <span></span>
        </div>
        </div>
        <div>
        <ul>
            <li>
                <img src="../assets/img/video2.jpg"/>
            </li>
        </ul>
        <div>
            <router-link to="/"><img src="../assets/img/nb-pro-video-ico-s.png"/></router-link>
            <h3>微距相机</h3>
        </div>
        </div>
        <div>
        <ul>
            <li>
                <img src="../assets/img/video3.jpg"/>
            </li>
        </ul>
            <div>
                <router-link to="/"><img src="../assets/img/nb-pro-video-ico-s.png"/></router-link>
                <h3>nubia Z11</h3> <span>突破边界</span>
            </div>
        </div>
    </div>
</div>
<div class="content">
    <dl class="one">
        <dt >最新产品
        <router-link to="/">查看全部手机></router-link>
        </dt>
        <dd>
               <router-link to="/"><span class="forClick"></span></router-link>
               <p class="a"> Z11极光蓝
               <span class="b">极光蓝</span>
               <router-link to="/"><span  class="c">一探究竟</span></router-link>
               </p>
        </dd>
        <dd>
            <router-link to="/"><img src="../assets/img/con-phone2.jpg"/></router-link>
            <p class="a"> nubia Z11 minis
                <span class="b">手机摄影专家</span>
                <router-link to="/"><span  class="c">一探究竟</span></router-link>
            </p>
        </dd>
        <dd>
            <router-link to="/"><span class="forAnotherClick"></span></router-link>
            <p class="a"> nubia Z11 咖啡金
                <span class="b">无边框旗舰手机</span>
                <router-link to="/"><span  class="c">一探究竟</span></router-link>
            </p>
        </dd>
        <dd>
            <router-link to="/"><img src="../assets/img/con-phone5.jpg"/></router-link>
            <p class="a"> nubia Z11 mini
                <span class="b">小世界.大精彩</span>
            </p>
        </dd>
        <dd>
            <router-link to="/"><img src="../assets/img/con-phone4.jpg"/></router-link>
            <p class="a"> nubia Z11 MAX
                <span class="b">大.不同</span>
            </p>
        </dd>
    </dl>
    <dl class="two">
        <dt >精选配件
            <router-link to="/">查看全部配件></router-link>
        </dt>
        <dd>
            <router-link to="/"><img src="../assets/img/accessories1.jpg"/></router-link>
            努比亚快充移动电源
        </dd>
        <dd>
            <router-link to="/"><img src="../assets/img/accessories2.jpg"/></router-link>
            努比亚圈铁耳机
        </dd>
        <dd>
            <router-link to="/"><img src="../assets/img/accessories3.jpg"/></router-link>
            努比亚快自拍杆
        </dd>
        <dd>
            <router-link to="/"><img src="../assets/img/accessories4.jpg"/></router-link>
            nubia摄影三脚架
        </dd>
    </dl>
</div>
<div class="footer">
    <div class="search">
        <div class="one">
    <img src="../assets/img/nb-pro-ft-logo-x2.jpg"/>
        </div>
        <div class="two">
        <span> <router-link to="/">>全部机型</router-link></span>
        </div>
    </div>
    <div class="footer-a">
    <dl class="dl-one">
        <dt>Z系列</dt>
        <dd>
            <router-link tag="a" to="/">nubia Z11</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">nubia Z11 Max</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">nubia Z11 mini</router-link>
        </dd>
    </dl>
    <dl>
        <dt>
            M系列
        </dt>
        <dd>
            <router-link tag="a" to="/">nubia 布拉格S</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">nubia My 布拉格</router-link>
        </dd>
    </dl>
    <dl>
        <dt>
            配件
        </dt>
        <dd>
            <router-link tag="a" to="/">保护壳</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">皮套</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">贴膜</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">耳机</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">数据线/充电器</router-link>
        </dd>
        <dd>
            <router-link tag="a" to="/">周边产品</router-link>
        </dd>
    </dl>
    </div>
    <div class="footer-center">
        <div class="footer-center-left">
            <a href="#">关于我们</a>
            |
            <a href="#">联系我们</a>
            |
            <a href="#">新闻中心</a>
            |
            <a href="#">加入我们</a>
            |
            <a href="#">合作注册</a>
            |
            <a href="#">公益</a>
            |
            <a href="#">以旧换新</a>
            |
            <a href="#">问题反馈</a>
            |
            <a href="#">简体中文</a>
        </div>
        <div class="footer-center-right">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <span class="footer-center-right-last">服务热线:400-700-6600</span>
     </div>
    </div>
        <div class="footer-last">
            <div>2012-2017 努比亚技术有限公司 版权所有</div>
            <div ><a href="#">粤ICP备10006213号-2</a></div>
            <div class="special"><img src="../assets/img/gs.jpg" ></div>
            <div>深圳市市场监督管理局企业主体身份公示 ICP经营许可证编号：粤B2-20120688</div>
            <div class="special"><img src="../assets/img/gh.png"></div>
            <div ><a href="#">粤公网安备 44030502000309号</a></div>
        </div>
  </div>
<shiPing></shiPing>
</div>
</template>

<script>
export default{
  data () {
    return {
      urlData: require('../assets/img/banner.jpg')
    }
  },
  methods: {
    one () {
      this.urlData = require('../assets/img/banner.jpg')
    },
    two () {
      this.urlData = require('../assets/img/banner2.jpg')
    },
    three () {
      this.urlData = require('../assets/img/banner3.jpg')
    },
    four () {
      this.urlData = require('../assets/img/banner4.jpg')
    }
  }
}
</script>

<style>
body,div,ol,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,p,form,fieldset,legend,input{ margin:0; padding:0;}
h1,h2,h3,h4,h5,h6{ font-size:100%;}
ol,ul{ list-style:none;}
img,fieldset{ border:0 none; display:block;}
a{text-decoration: none; color: grey;}
.footer-center-right a{
   background: url(../assets/img/nubia-syb-all.png) no-repeat;
}
.content .one dd:nth-child(2){
   background: url(../assets/img/con-phone1.jpg) -100px 30px no-repeat;
   background-size: 1100px 300px ;
}
.content .one dd:nth-child(4){
   background: url(../assets/img/con-phone3.jpg) 120px 0 no-repeat;
   background-size: 795px auto;
}
.top{
    width:100%;
    height:60px;
    background-color:black;
    text-align:center;
    position:fixed;
    z-index: 998;
}
.top div{
    width:1200px;
    height:60px;
    margin:0 auto;
}
.top div .logo{
    width:190px;
    height:60px;
    float:left;
    overflow: hidden;
}
.top div .logo img{
    margin-bottom:-50px;
}
.top div .nav{
    width:740px;
    height:60px;
    float:right;
    transition:color;
}
.top div .nav .nav-left li a:hover{
    color:#e82c07;
}
.top div .nav .nav-left{
    width:550px;
    height:60px;
    float:left;
}
.top div .nav .nav-left ul li a{
    float:left;
    line-height:60px;
    padding-left:40px;
    font-size:16px;
    color:#fff;
    font-weight: bold;
}
.top div .nav .nav-right{
    width:150px;
    height:60px;
    float:right;
}
.top div .nav .nav-right div{
    width:30px;
    height:30px;
    overflow: hidden;
    padding-top:15px;
    margin-left:15px;
    float:left;
}
.top div .nav .nav-right div img{
    left:0;
    top:0;
}
.top div .nav .nav-right ul{
    height:60px;
}
.top div .nav .nav-right ul li{
    float:left;
    line-height:60px;
    padding-left:15px;
    transition:color;
    font-size:15px;
}
.top div .nav .nav-right ul li a:hover{
    color:#e82c07;
}
.homeHeader{
    width:100%;
    height:860px;
}
.homeHeader .up{
    height:121px;
    width:1050px;
    margin:0 auto;
}
.homeHeader .up ul li{
    float:left;
    height:121px;
    width:150px;
    overflow: hidden;
    text-align: center;
    font-size:14px;
    color:gray;
    box-sizing: border-box;
    transition:border-bottom;
}
.homeHeader .up ul li:hover{
    border-bottom:2px solid red;
}
.homeHeader .up ul li img{
    height:80px;
    margin-top:15px;
    margin-left:12px;
}
.homeHeader .center{
    height: 650px;
    width:100%;
    overflow:hidden;
    text-align: center;
    position:relative;
}
.homeHeader .center img{
    width:100%;
    height:650px;
    margin-top:0px;
    float:left;
}
.homeHeader .center ul{
    width:150px;
    height:20px;
    margin-top: 620px;
    position:absolute;
    left:50%;
    margin-left:-75px;
}
.homeHeader .center ul li{
    width:8px;
    height:8px;
    background-color:lightgray;
    float:left;
    margin:8px;
    border:3px solid lightgray;
    border-radius: 6px;
    transition:border 1s;
    transition-timing-function:linear;
}
.homeHeader .center ul li:hover{
    border:3px solid red;
}
.homeHeader .last{
    height:250px;
    width:1200px;
    margin:10px auto;
}
.homeHeader .last div{
    width:396px;
    height:250px;
    float:left;
    margin-right:4px;
    display:block;
}
.homeHeader .last div ul{
    background-color:black;
    width:396px;
    height:250px;
    float:left;
}
.homeHeader .last div ul li{
    width:396px;
    height:250px;
    overflow: hidden;
    position:relative;
    transition:opacity;

}
.homeHeader .last div ul li:hover{
    opacity:0.8;
}
.homeHeader .last div ul li>img{
    height:250px;
    left:-70px;
    position:absolute;
}
.homeHeader .last div div{
    position:absolute;
    transition:opacity;
    color:white;
    text-align: center;
    opacity:0;
}
.homeHeader .last div div:hover{
    opacity:1;
}
h3{
    margin-top:10px;
}
.homeHeader .last div div span{
    font-size:10px;
    line-height:40px;
}
.homeHeader .last div div img{
    padding-top:95px;
    margin:0 auto;
    animation:move 1s ease 0s infinite alternate;
}
@keyframes move {
    0%{
        transform:scale(1.1);
    }
    50%{
        transform:scale(0.8);
    }
    100%{
        transform:scale(1);
    }
}
.content{
height:1843px;
    width:1200px;
    margin:0 auto;
    text-align: center;
}
.content .one{
    width:1200px;
    height:1305px;
}
.content dl dt{
    font-size:35px;
    color:#333;
    margin-top:40px;
    font-weight: bold;
}
.content dl dt a{
    font-size:8px;
    color:#e8340e;
    display:block;
    margin-top:20px;
    margin-bottom:30px;
    font-weight: normal;
}
.content .one dd:nth-child(2){
    width:1200px;
    height:395px;
        transition:background-position 1s;
}
.content .one dd:nth-child(2):hover{
    background-position:0 30px;
}
.content .one dd:nth-child(2) p{
    margin-left:750px;
    padding-top:150px;
}
.a{
    width:200px;
    font-size:20px;
    color:#000;
    font-family: 微软雅黑;
}
.b{
    display:block;
    font-size:15px;
    color:gray;
    margin-bottom:10px;
}
.c{
    display:block;
    color:black;
    font-size:12px;
    width:108px;
    line-height:32px;
    margin:0 auto;
    border:1px solid lightgrey;
    border-radius: 10px ;
}
.content .one dd:nth-child(3){
    width:395px;
    height:795px;
    float:left;
    margin-top:10px;
    overflow: hidden;
    position:relative;
}
.content .one dd:nth-child(3) img{
    width:390px;
    transition: transform 1s;
}
.content .one dd:nth-child(3):hover img{
   transform:scale(1.2);
}
.content .one dd:nth-child(3) .a{
    margin:95px auto;
}
.content .one dd:nth-child(4){
    width:795px;
    height:390px;
    float:right;
    margin-top:10px;
    overflow:hidden;
    transition:background-position 1s;
}
.content .one dd:nth-child(4):hover {
background-position:0 0;
}
.content .one dd:nth-child(4) p{
    margin:250px auto;
}
.content .one dd:nth-child(5){
    width:395px;
    height:395px;
    margin-top:10px;
    margin-left:10px;
    float:right;
    overflow: hidden;
}
.content .one dd:nth-child(5) img{
    width:390px;
    transition:transform 1s;
    margin-top:-14px;
}
.content .one dd:nth-child(5):hover img{
    transform:scale(1.2);
}
.content .one dd:nth-child(5) P{
    margin: 30px auto;
}
.content .one dd:nth-child(6){
    width:390px;
    height:395px;
    margin-top:10px;
    float:right;
    overflow: hidden;
}
.content .one dd:nth-child(6) img{
    width:390px;
    transition:transform 1s;
    margin-top:-14px;
}
.content .one dd:nth-child(6):hover img{
    transform:scale(1.2);
}
.content .one dd:nth-child(6) P{
    margin: 30px auto;
}
.content  .two{
    width:1200px;
    height:500px;
}
.content .two dd{
    width:295px;
    height:300px;
    float:left;
    margin:0 2px;
    font-size:11px;
    color:gray;
    overflow: hidden;
}
.content .two dd img{
    height:230px;
    width:290px;
    margin:0 auto;
    padding-bottom: 30px;
    transition:transform 1s;
}
.content .two dd img:hover{
    transform:scale(1.3);
}
.footer{
    width:1200px;
    height:356px;
    margin:40px auto;
    color:gray;
    font-size: 10px;
    border-top:1px solid lightgrey;
}
.footer .search img{
    height:15px;
}
.footer .search{
    margin-top: 20px;
    padding-top:20px;
    height: 15px;
    line-height: 15px;
    /*margin-left:100px;*/
}
.footer .search .one{
    float:left;
}
.footer .search .two{
    float:left;
}
.footer dl dt{
    font-size:15px;
    color:#000;
    line-height:30px;
    font-weight: bold;
}
.footer .footer-a dl dd a{
    line-height:20px;
    height:20px;
    font-weight: normal;
}
.footer dl{
    width:200px;
    margin-top:20px;
    float:left;
    transition:color 1s;
}
.footer dl dd a:hover{
    color:red;
}
.footer-a{
    width:100%;
    height:155px;
}
.footer-center{
    margin-top:30px;
    /*margin-left:100px;*/
    padding-right:10px;
    font-size:10px;
    height:30px;
    padding-left:0;
}
.footer-center a:hover{
    color:black;
}
.footer-center-left{
    float:left;
    line-height:30px;
    height:30px;
}
.footer-center-right a{
    background-size:30px 30px;
    height:30px;
    width:30px;
    line-height:30px;
    display:block;
}
.footer-center-right a:nth-child(1){
    float:left;
    margin-left:50px;
    background-position: -246px 0;

}
.footer-center-right a:nth-child(2){
    float:left;
    margin-left:10px;
    background-position: -186px 0;
}
.footer-center-right a:nth-child(3){
    float:left;
    margin-left:10px;
    background-position: -126px 0;
}
.footer-center-right a:nth-child(4){
    float:left;
    margin-left:10px;
    background-position: -156px 0;
}
.footer-center-right-last{
    height:30px;
    line-height:30px;
    font-size:20px;
    font-weight: bold;
    margin-left:10px;
}
.footer-last{
    font-size:10px;
    line-height:30px;
    width:100%;
    height:30px;
    /*margin-left:100px;*/
}
.footer-last div{
    float:left;
    line-height:30px;
    font-size: 10px;
}
.special img{
    height:10px;
    line-height:30px;
    float:left;
    padding-top:8px;
    padding-right:5px;
    padding-left:5px;
}
.forClick {
  width:700px;
  height:300px;
  display:block;
  float:left;
}
.forAnotherClick{
  width:680px;
  height:250px;
  display:block;
  float:right;
}
</style>
