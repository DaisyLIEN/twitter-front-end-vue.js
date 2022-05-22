<template>
  <div class="setting-container">
    <div class="left-content">
      <Navbar />
    </div>
    <div class="right-content">
      <h4>帳戶設定</h4>
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
            placeholder="請設定密碼"
            required
          />
        </div>

        <div class="form-label-group">
          <label for="password-check">密碼確認</label>
          <input
            id="password-check"
            v-model="checkPassword"
            name="checkPassword"
            type="password"
            class="form-control"
            autocomplete="new-password"
            placeholder="請再次輸入密碼"
            required
          />
        </div>
        <div class="button-container">
          <button
            class="btn btn-lg btn-primary btn-block mb-3"
            type="submit"
            :disabled="isProcessing"
          >
            儲存
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import usersAPI from "../apis/users";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
    };
  },
  components: {
    Navbar,
  },
  created() {
    this.fetchAccount();
  },
  methods: {
    //從API取得user資訊
    async fetchAccount() {
      try {
        const response = await usersAPI.getUserInfo();
        console.log(response.data);
        const { account, name, email } = response.data;
        this.account = account;
        this.name = name;
        this.email = email;
      } catch (error) {
        console.log(error);
      }
    },
    //將user設定的資料傳到後台
    async handleSubmit() {
      try {
        this.isProcessing = true;
        const response = await usersAPI.accountSetting({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });

        console.log("你有按了");
        console.log("update", response);

        Toast.fire({
          icon: "success",
          title: "修改成功",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("catch-error", error);
        console.log("error.response", error.response);

        if (error.response.data.message === "Error:此帳戶已經有人使用") {
          Toast.fire({
            icon: "error",
            title: "account 已重複註冊！",
          });
        } else if (
          error.response.data.message ===
          "Error:此信箱已經有人使用，請更換其他信箱"
        ) {
          Toast.fire({
            icon: "error",
            title: "email 已重複註冊！",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "密碼與確認密碼不一致，請重新輸入",
          });
        }
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style scoped>
.setting-container {
  display: grid;
  grid-template-columns: 178px 639px 273px;
  grid-column-gap: 24px;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
}

.right-content {
  grid-column: 2 / 3;
  width: 639px;
  padding: 0;
  border: 1px solid #e6ecf0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

form {
  padding: 24px 23px 0;
  border-top: 1px solid #e6ecf0;
}

.logo-img {
  width: 40px;
}

h4 {
  font-size: 23px;
  font-weight: 700;
  margin: 24px 0 24px 24px;
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

::placeholder {
  opacity: 0.5;
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

.button-container {
  display: flex;
  justify-content: flex-end;
}
.btn-primary {
  width: 88px;
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
