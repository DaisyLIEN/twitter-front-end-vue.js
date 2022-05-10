<template>
  <div class="container">
    <div class="logo">
      <img
        class="logo-img"
        src="https://upload.cc/i1/2022/05/10/LycK2A.png
"
        alt="AC-logo"
      />
    </div>
    <h1>建立你的帳號</h1>
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="form-label-group">
        <label for="name">帳號</label>
        <input
          id="name"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          autocomplete="account"
          required
          autofocus
        />
      </div>
      <div class="form-label-group">
        <label for="name">Name</label>
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
        <label for="password">Password</label>
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
        <label for="password-check">Password Check</label>
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

      <div class="text-center mb-3">
        <p class="cancel">
          <router-link to="/signin"> 取消 </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  font-family: "Noto Sans TC", sans-serif;
}

.container {
  width: 37.5%;
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
</style>