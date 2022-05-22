<template>
  <div class="container">
    <div class="logo">
      <img
        class="logo-img"
        :src="acLogo"
        alt="AC-logo"
      />
    </div>
    <h1>登入 Alphitter</h1>
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div :class="['form-label-group', { 'wrong-form': isWronging }]">
        <label for="name">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          required
          autofocus
        />
        <p v-show="isWronging" class="wrong-message">帳號不存在</p>
      </div>

      <div :class="['form-label-group', { 'wrong-form': isWronging }]">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="new-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        登入
      </button>

      <div class="text-link text-center">
        <p>
          <router-link class="regist" to="/regist">
            註冊 Alphitter
          </router-link>
        </p>
        <p>‧</p>
        <p>
          <router-link class="admin-login" to="/admin"> 後台登入 </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "../utils/helpers";
import acLogo from "../assets/AC-logo.png"

export default {
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
      isWronging: false,
      acLogo,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 account 和 password",
          });
          return;
        }

        this.isProcessing = true;

        const response = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        });
        const { data, statusText } = response;

        console.log(data.data);

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }

        localStorage.setItem("token", data.data.token);
        localStorage.setItem("userId", data.data.user.id);
        localStorage.setItem("userAvatar", data.data.user.avatar);

        // 將資料傳到Vuex中
        this.$store.commit("setCurrentUser", data.data.user);

        this.$router.push("/main");
      } catch (error) {
        this.password = "";
        console.log(error);
        this.isProcessing = false;

        Toast.fire({
          icon: "error",
          title: "帳號不存在或密碼錯誤，請重新輸入",
        });
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
}

.container {
  width: 540px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-img {
  width: 40px;
}

h1 {
  font-size: 23px;
  font-weight: 700;
  margin-top: 25px;
  margin-bottom: 40px;
}

.form-label-group {
  height: 54px;
  margin-bottom: 30px;
  background: #f5f8fa;
  border-radius: 4px 4px 0 0;
  border-bottom: 2px solid #657786;
}

.form-label-group:hover,
.form-label-group:focus-within {
  border-color: #50b5ff;
}

/* 錯誤訊息提示 */
.wrong-form:focus-within {
  border-color: #fc5a5a;
}

.wrong-message {
  margin-top: 12px;
  color: #fc5a5a;
  font-size: 12px;
}

.form-control {
  height: 26px;
  margin-top: 5px;
  border-color: #f5f8fa;
  background: #f5f8fa;
  font-size: 16px;
}

.form-control:focus {
  box-shadow: none;
}

label {
  position: relative;
  top: 5px;
  left: 12px;
  font-weight: 500;
  color: #657786;
}

.btn-primary {
  background: #ff6600;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  font-weight: 700;
}

.text-link {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  color: #50b5ff;
  font-size: 18px;
  font-weight: 700;
}
.regist,
.admin-login {
  border-bottom: 1px solid;
}
.regist:hover,
.admin-login:hover {
  text-decoration: none;
}
</style>