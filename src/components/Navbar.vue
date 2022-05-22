<template>
  <div class="nav-container">
    <div class="logo">
      <img :src="acLogo" alt="logo-img" class="logo-img" />
    </div>
    <div class="navigation">
      <router-link
        to="/main"
        :class="['nav-item', { 'current-page': currentPage === 'main' }]"
      >
        <span class="nav-item-font icon-home-img"></span>
        <span class="nav-item-title">首頁</span>
      </router-link>
      <router-link
        :to="{ name: 'user', params: { id: currentUserId } }"
        :class="['nav-item', { 'current-page': currentPage === 'user' }]"
      >
        <span class="nav-item-font icon-self-img"></span>
        <span class="nav-item-title">個人資料</span>
      </router-link>
      <router-link
        to="/setting"
        :class="['nav-item', { 'current-page': currentPage === 'setting' }]"
      >
        <span class="nav-item-font icon-setting-img"></span>
        <span class="nav-item-title">設定</span>
      </router-link>
      <div class="nav-item-tweet">
        <button
          class="btn-submit btn btn-lg btn-primary btn-block"
          data-toggle="modal"
          data-target="#tweetModal"
          @click="toMain"
        >
          推文
        </button>
      </div>
      <div class="nav-item logo-out">
        <img :src="logoutImg" alt="setting-img" class="nav-item-img" />
        <span @click="logout()" class="nav-item-title">登出</span>
      </div>
    </div>
  </div>
</template>

<script>
import acLogo from "../assets/AC-logo.png";
import logoutImg from "../assets/icon_logout.png";

export default {
  data() {
    return {
      currentPage: "",
      currentUserId: -1,
      acLogo,
      logoutImg,
    };
  },
  created() {
    this.currentPage = this.$route.name;
    this.currentUserId = localStorage.getItem("userId");
  },
  methods: {
    logout() {
      // 待串接API後取消token
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userAvatar");
      this.$router.push("/signin");
    },
    toMain() {
      if (this.$route.path !== "/main") {
        this.$router.push("/main");
      }
    },
  },
};
</script>

<style scoped>
.nav-container {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 178px;
}
.logo-img {
  width: 50px;
  height: 50px;
  margin: 8px 0 0 8px;
}
.nav-item {
  display: block;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 20px;
  padding: 16px 0 16px 16px;
  color: #1c1c1c;
}
.nav-item:hover {
  background: rgb(234, 232, 232);
  cursor: pointer;
  text-decoration: none;
}

.nav-item:not(:nth-child(4)):hover {
  background: rgb(234, 232, 232);
}
.tweet:hover {
  opacity: 0.9;
}
.nav-item-font {
  position: relative;
  top: 2px;
  font-size: 20px;
  margin-right: 16px;
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
  width: 178px;
  height: 46px;
  background-color: #ff6600;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
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