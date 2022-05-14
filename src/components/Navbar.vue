<template>
  <div class="nav-container">
    <div class="logo">
      <img
        src="https://upload.cc/i1/2022/05/10/LycK2A.png"
        alt="logo-img"
        class="logo-img"
      />
    </div>
    <div class="navigation">
      <div
        @click.stop.prevent="mainPage"
        :class="['nav-item', { 'current-page': currentPage === 'main' }]"
      >
        <span class="nav-item-font icon-home-img"></span>
        <span class="nav-item-title">首頁</span>
      </div>
      <div
        @click="selfPage"
        :class="['nav-item', { 'current-page': currentPage === 'self' }]"
      >
        <span class="nav-item-font icon-self-img"></span>
        <span class="nav-item-title">個人資料</span>
      </div>
      <div
        @click="settingPage"
        :class="['nav-item', { 'current-page': $route.name === 'setting' }]"
      >
        <span class="nav-item-font icon-setting-img"></span>
        <span class="nav-item-title">設定</span>
      </div>
      <div class="nav-item tweet">
        <button class="btn-submit btn btn-lg btn-primary btn-block">
          推文
        </button>
      </div>
      <div class="nav-item logo-out">
        <img
          src="https://upload.cc/i1/2022/05/12/NqlER9.png"
          alt="setting-img"
          class="nav-item-img"
        />
        <span class="nav-item-title">登出</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "",
    };
  },
  methods: {
    // 測試效果，待main和self頁面完成時刪除
    mainPage() {
      this.currentPage = "main";
    },
    selfPage() {
      this.currentPage = "self";
    },
    settingPage() {
      this.currentPage = "setting";
    },
  },
};
</script>

<style scoped>
/* .left-content {
  width: 378px;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
} */
.nav-container {
  width: 235px;
  margin-left: 113px;
}
.logo-img {
  width: 30px;
  margin-top: 4px;
  margin-left: 10px;
}
.navigation {
  margin-top: 45px;
}
.nav-item {
  display: inline-block;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 10px;
  padding-right: 30px;
}

.nav-item:not(:nth-child(4)):hover {
  background: rgb(234, 232, 232);
  cursor: pointer;
}
.tweet:hover {
  opacity: 0.9;
}
.nav-item-font {
  position: relative;
  top: 2px;
  font-size: 20px;
  margin-right: 20px;
}
.nav-item-img {
  position: relative;
  top: 5px;
  width: 24px;
  margin-right: 20px;
}
.nav-item-title {
  font-size: 18px;
  font-weight: 700;
}

.logo-out {
  position: absolute;
  bottom: 0;
}

.btn-submit {
  width: 210px; 
  height: 38px;
  background-color: #ff6600;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/* 當前頁面顏色變化 */
.current-page {
  color: #ff6600;
}

/* 使用icoMoon */
@font-face {
  font-family: "icomoon";
  src: url("./fonts/icomoon.eot?jt8wo2");
  src: url("./fonts/icomoon.eot?jt8wo2#iefix") format("embedded-opentype"),
    url("./fonts/icomoon.ttf?jt8wo2") format("truetype"),
    url("./fonts/icomoon.woff?jt8wo2") format("woff"),
    url("./fonts/icomoon.svg?jt8wo2#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-logout-img:before {
  content: "\e903";
}
.icon-home-img:before {
  content: "\e900";
}
.icon-self-img:before {
  content: "\e901";
}
.icon-setting-img:before {
  content: "\e902";
}
</style>