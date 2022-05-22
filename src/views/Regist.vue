<template>
  <div class="container">
    <div class="logo">
      <img class="logo-img" :src="acLogo" alt="AC-logo" />
    </div>
    <h1>建立你的帳號</h1>
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div
        :class="['form-label-group', { 'wrong-form': account.length === 16 }]"
      >
        <label for="name">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          maxlength="16"
          required
          autofocus
        />
        <span v-show="account.length === 16" class="words-limit-alert"
          >字數超出上限！</span
        >
        <span class="words-length">{{ account.length }}/15</span>
      </div>

      <div :class="['form-label-group', { 'wrong-form': name.length === 51 }]">
        <label for="name">名稱</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          maxlength="51"
          autocomplete="username"
          required
          autofocus
        />
        <span v-show="name.length === 51" class="words-limit-alert"
          >字數超出上限！</span
        >
        <span class="words-length">{{ name.length }}/50</span>
      </div>

      <div :class="['form-label-group', { 'wrong-form': isWronging.email }]">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          autocomplete="email"
          required
        />
      </div>

      <div :class="['form-label-group', { 'wrong-form': isWronging.password }]">
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

      <div
        :class="[
          'form-label-group',
          { 'wrong-form': isWronging.checkPassword },
        ]"
      >
        <label for="password-check">密碼確認</label>
        <input
          id="password-check"
          v-model="checkPassword"
          name="checkPassword"
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
        註冊
      </button>

      <div class="text-center">
        <p class="cancel">
          <router-link class="cancel-text" to="/signin"> 取消 </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
import authorizationAPI from "../apis/authorization";
import acLogo from "../assets/AC-logo.png";

export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      acLogo,

      isWronging: {
        account: false,
        name: false,
        email: false,
        password: false,
        checkPassword: false,
      },
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password !== this.checkPassword) {
        this.password = "";
        this.checkPassword = "";
        Toast.fire({
          icon: "warning",
          title: "密碼與密碼確認不符，請重新輸入",
        });
        return;
      }
      if (this.name.length > 50 || this.account.length > 15) {
        Toast.fire({
          icon: "warning",
          title: "帳號或名稱超過字數上限，請重新輸入",
        });
        return;
      }
      try {
        this.isProcessing = true;
        const response = await authorizationAPI.regist({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });
        console.log(response);
        if (response.statusText === "OK") {
          Toast.fire({
            icon: "success",
            title: "註冊成功！",
          });
          this.$router.push("/");
        }
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法註冊，請稍後再試",
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
  position: relative;
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

/* 字數上限提示 */
.words-length {
  position: absolute;
  right: 0;
  top: 58px;
  font-size: 12px;
  font-weight: 500px;
  color: #696974;
}

.words-limit-alert {
  position: absolute;
  left: 0;
  top: 58px;
  font-size: 12px;
  font-weight: 500;
  color: #fc5a5a;
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

.btn-primary {
  background: #ff6600;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  font-weight: 700;
}

.cancel {
  color: #0099ff;
  font-size: 18px;
  font-weight: 700;
}
.cancel-text {
  border-bottom: 1px solid;
}
.cancel-text:hover {
  text-decoration: none;
}
</style>