<template>
  <div class="setting-container">
    <Navbar />
    <div class="right-content">
      <h1>帳戶設定</h1>
      <form class="w-100" @submit.prevent.stop="handleSubmit">
        <div class="form-label-group">
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
        </div>
        <div class="form-label-group">
          <label for="name">名稱</label>
          <input
            id="name"
            v-model="name"
            name="name"
            type="text"
            class="form-control"
            autocomplete="username"
            required
            autofocus
          />
        </div>

        <div class="form-label-group">
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

        <div class="form-label-group">
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

        <div class="form-label-group">
          <label for="password-check">密碼確認</label>
          <input
            id="password-check"
            v-model="passwordCheck"
            name="passwordCheck"
            type="password"
            class="form-control"
            autocomplete="new-password"
            required
          />
        </div>

        <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
          註冊
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.setting-container {
  display: flex;
}
.right-content {
  display: grid;
  grid-template-columns: minmax(auto, 642px) 1fr;
}

form {
  grid-column: 1/2;
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
