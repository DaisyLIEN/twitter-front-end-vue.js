<template>
  <div class="nav-container">
    <div class="logo">
      <img :src="acLogo" alt="logo-img" class="logo-img" />
    </div>
    <div class="navigation">
      <router-link
        to="/admin/tweets"
        :class="[
          'nav-item',
          { 'current-page': currentPage === 'admin-tweets' },
        ]"
      >
        <span class="nav-item-font icon-home-img"></span>
        <span class="nav-item-title">推文清單</span>
      </router-link>

      <router-link
        to="/admin/users"
        :class="['nav-item', { 'current-page': currentPage === 'admin-users' }]"
      >
        <span class="nav-item-font icon-self-img"></span>
        <span class="nav-item-title">使用者列表</span>
      </router-link>

      <div class="nav-item logo-out">
        <img :src="logoutImg" alt="setting-img" class="nav-item-img" />
        <span @click="logout" class="nav-item-title">登出</span>
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
      acLogo,
      logoutImg,
    };
  },
  created() {
    this.currentPage = this.$route.name;
  },
  methods: {
    logout() {
      // 待串接API後取消token
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userAvatar");
      this.$router.push("/signin");
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
  color: #1c1c1c;
}

.nav-item:hover {
  background: rgb(234, 232, 232);
  cursor: pointer;
  text-decoration: none;
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
  left: 0;
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