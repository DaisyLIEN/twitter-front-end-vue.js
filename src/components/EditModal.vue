<template>
  <div class="wrapper-edit-modal">
    <header>
      <a href="#">
        <img
          class="vector-cancel"
          src="https://i.imgur.com/l2QyIgw.png"
          alt=""
        />
      </a>
      <h5>編輯個人資料</h5>
    </header>
    <form action="" method="post">
      <div class="form-group form-group-image">
        <label for="cover"></label>
        <img :src="user.cover" width="634" height="200" />
        <img
          class="upload-icon upload-icon-cover"
          src="https://i.imgur.com/Y4hTUuO.png"
          alt=""
        />
        <input
          id="cover"
          type="file"
          name="cover"
          accept="image/*"
          class="form-control-file-cover"
          @change="handleCoverChange"
        />
      </div>

      <div class="form-group form-group-image">
        <label for="avatar"></label>
        <img :src="user.avatar" width="140" height="140" />
        <img
          class="upload-icon upload-icon-avatar"
          src="https://i.imgur.com/Y4hTUuO.png"
          alt=""
        />
        <input
          id="avatar"
          type="file"
          name="avatar"
          accept="image/*"
          class="form-control-file-avatar"
          @change="handleAvatarChange"
        />
      </div>

      <div class="form-group form-group-text form-group-name">
        <label for="name">名稱</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          class="form-control-text form-control-name"
          name="name"
          required
        />
      </div>

      <div class="form-group form-group-text form-group-description">
        <label for="description">自我介紹</label>
        <textarea
          id="description"
          v-model="user.description"
          class="form-control-text form-control-description"
          rows="5"
          name="description"
          required
        />
      </div>

      <button type="submit" class="btn-submit">儲存</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "John Doe",
        cover: "https://i.imgur.com/H3ADasp.png",
        avatar: "https://i.imgur.com/sFuDF3M.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    };
  },
  method: {
    handleCoverChange() {},
    handleAvatarChange() {},
  },
};
</script>

<style scoped>
.wrapper-edit-modal {
  position: relative;
  width: 634px;
  height: 610px;
}
/* header */
header {
  height: 57px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.vector-cancel {
  width: 15px;
  height: 15px;
  margin: auto 36.5px auto 19.5px;
}
.btn-submit {
  position: absolute;
  top: 8px;
  right: 16px;
  width: 64px;
  height: 40px;
  background: #ff6600;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ffffff;
}
/* form */
form {
  display: flex;
  flex-flow: column nowrap;
}
/* form-group-image */


/* form-group-text */
.form-group-name {
  height: 54px;
  margin-top: 80px;
  margin-bottom: 32px;
}
.form-group-description {
  height: 147px;
}
.form-group-text {  
  background: #f5f8fa;
  border-radius: 4px 4px 0 0;
  border-bottom: 2px solid #657786;
  display: flex;
  flex-flow: column nowrap;
  padding-top: 5px;
  padding-left: 12px;
  margin-left: 16px;
  margin-right: 16px;
}
.form-group-text:hover,
.form-group-text:focus {
  border-color: #50b5ff;
}
.form-control-text {
  height: 26px;
  margin-top: 5px;
  border-color: #f5f8fa;
  background: #f5f8fa;
  font-size: 16px;
  border: 0 none;
}
.form-control-text:focus {  
  outline: none;
}
.form-control-description {
  resize: none;
  height: 147px;
}
.form-group-text > label {
  font-weight: 500;
  color: #657786;
}
</style>