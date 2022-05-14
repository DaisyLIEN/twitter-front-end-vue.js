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
        <img class="image-cover" :src="user.cover" width="634" height="200" />
        <label class="label-cover" for="cover">
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
        </label>

        <label class="label-cancel" for="cancel">
          <img
            class="upload-icon upload-icon-cancel"
            src="https://i.imgur.com/KG3NVHl.png"
            alt=""
          />
          <input
            id="cancel"
            type="button"
            class="form-control-file-cancel"
            @change="handleCoverCancel"
          />
        </label>
      </div>

      <div class="form-group form-group-image form-group-avatar">
        <img class="image-avatar" :src="user.avatar" width="140" height="140" />
        <label class="label-avatar" for="avatar">
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
        </label>
      </div>

      <div class="form-group form-group-text form-group-name">
        <label class="text-name" for="name">名稱</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          class="form-control-text form-control-name"
          name="name"
          required
        />
        <div class="text-count text-count-name">
          <span>8</span><span>/50</span>
        </div>
      </div>

      <div class="form-group form-group-text form-group-description">
        <label class="text-description" for="description">自我介紹</label>
        <textarea
          id="description"
          v-model="user.description"
          class="form-control-text form-control-description"
          rows="4"
          name="description"
          required
        />
        <div class="text-count text-count-description">
          <span>20</span><span>/160</span>
        </div>
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
    handleCoverCancel() {},
  },
};
</script>

<style scoped>
.wrapper-edit-modal {
  outline: 1px solid blue;
  position: relative;
  width: 634px;
  height: 610px;
  background: #ffffff;
  border-radius: 14px;
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
.upload-icon-cover,
.upload-icon-avatar {
  width: 20px;
  height: 20px;
}
.upload-icon-cancel {
  width: 15px;
  height: 15px;
}
.form-group-image {
  position: relative;
  margin-bottom: 0;
}
.form-group-avatar {
  position: absolute;
  top: 181px;
  left: 16px;
}
.image-cover {
  display: block;
}
.label-cover,
.label-cancel,
.label-avatar {
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.label-cover,
.label-cancel {
  top: 75px;
  width: 50px;
  height: 50px;
}
.label-cover {
  right: 317px;
}
.label-cancel {
  right: 267px;
}
.label-avatar {
  top: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
}
.form-control-file-cover,
.form-control-file-cancel,
.form-control-file-avatar {
  display: none;
}
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
  padding-left: 18px;
  margin-left: 16px;
  margin-right: 16px;
}
.form-group-text:hover,
.form-group-text:focus {
  border-color: #50b5ff;
}
.form-control-text {
  border-color: #f5f8fa;
  background: #f5f8fa;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  border: 0 none;
}
.form-control-text:focus {
  outline: none;
}
.form-control-description {
  resize: none;
  flex-shrink: 0;
}
.text-count {
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #696974;
  text-align: right;
}
.text-count-name {
  margin-top: 8px;
}
.text-count-description {
  margin-top: 4px;
}
.text-name,
.text-description {
  color: #696974;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>