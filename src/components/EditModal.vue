<template>
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="vector-cancel" aria-hidden="true">×</span>
          </button>
          <h5>編輯個人資料</h5>
        </div>

        <form id="userProfileForm" action="" method="" ref="userForm">
          <div class="form-group form-group-image">
            <img
              class="image-cover"
              :src="profile.cover ? profile.cover : coverNone"
              width="634"
              height="200"
            />
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
                @click="handleCoverCancel"
              />
            </label>
          </div>

          <div class="form-group form-group-image form-group-avatar">
            <img
              class="image-avatar"
              :src="profile.avatar ? profile.avatar : avatarNone"
              width="140"
              height="140"
            />
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
              v-model="profile.name"
              type="text"
              class="form-control-text form-control-name"
              name="name"
              maxlength="51"
              required
            />
            <div
              class="text-hint text-hint-name"
              :class="{ error: textNameLength === 51 }"
            >
              <div v-show="textNameLength === 51" class="text-limit-error">
                字數超出上限！
              </div>
              <div class="text-count text-count-name">
                <span>{{ textNameLength }}</span
                ><span>/50</span>
              </div>
            </div>
          </div>

          <div class="form-group form-group-text form-group-introduction">
            <label class="text-introduction" for="introduction">自我介紹</label>
            <textarea
              id="introduction"
              v-model="profile.introduction"
              class="form-control-text form-control-introduction"
              rows="4"
              name="introduction"
              maxlength="161"
              required
            />
            <div
              class="text-hint text-hint-introduction"
              :class="{ error: textIntroductionLength === 161 }"
            >
              <div
                v-show="textIntroductionLength === 161"
                class="text-limit-error"
              >
                字數超出上限！
              </div>
              <div class="text-count text-count-introduction">
                <span>{{ textIntroductionLength }}</span
                ><span>/160</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-submit"
            data-dismiss="modal"
            @click="HandleModelHide"
          >
            儲存
          </button>
          <!-- <button type="submit" class="btn btn-submit" data-dismiss="modal">
              儲存
            </button> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import bootstrap from "bootstrap";
import avatarNone from "../assets/Avatar-none.png";
import coverNone from "../assets/Cover-none.jpg";

export default {
  props: {
    initialUserProfile: {
      type: Object,
      required: true,
    },
    initialUserCover: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editModal: "",
      profile: {
        id: -1,
        account: "",
        name: "",
        introduction: "",
        avatar: "",
        cover: "",
      },
      primaryCover: "",
      avatarNone,
      coverNone,
      // isProcessing: false,
    };
  },
  created() {
    this.primaryCover = this.initialUserCover;
  },
  methods: {
    handleCoverChange(e) {
      const { files } = e.target;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.profile.cover = imageURL;
    },
    handleAvatarChange(e) {
      const { files } = e.target;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.profile.avatar = imageURL;
    },
    handleCoverCancel() {
      this.profile.cover = this.primaryCover;
    },
    HandleModelHide() {
      if (
        this.profile.name.length > 50 ||
        this.profile.introduction.length > 160
      ) {
        console.log("input type error.");
      } else {
        const form = this.$refs.userForm;
        const formData = new FormData(form);
        // console.log("name", formData.get("name"));
        // console.log("introduction", formData.get("introduction"));
        this.$emit("after-submit", formData);
      }
    },
  },
  computed: {
    textNameLength() {
      return this.profile.name.length;
    },
    textIntroductionLength() {
      return this.profile.introduction.length;
    },
  },
  watch: {
    initialUserProfile(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
    initialUserCover(newValue) {
      this.primaryCover = newValue;
    },
  },
};
</script>

<style scoped>
.modal-content {
  position: relative;
  width: 634px;
  height: 610px;
  background: #ffffff;
  border-radius: 14px;
  border: none;
}
.modal-dialog {
  margin: 56px auto auto;
}
/* header */
.modal-header {
  height: 57px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}
button.close {
  padding: 0;
  color: #ff6600;
  opacity: 1;
  margin: 0 36.5px 0 0;
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
  background: rgba(23, 23, 37, 0.5);
  opacity: 0.75;
}
.form-group-avatar {
  position: absolute;
  top: 181px;
  left: 16px;
  border-radius: 50%;
}
.image-cover,
.image-avatar {
  display: block;
  object-fit: cover;
}
.image-avatar {
  border-radius: 50%;
  border: 4px solid #ffffff;
}
.label-cover,
.label-cancel,
.label-avatar {
  position: absolute;
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
  cursor: pointer;
}
.label-cancel {
  right: 267px;
}
.label-avatar {
  top: 0;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  cursor: pointer;
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
.form-group-introduction {
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
  line-height: 26px;
  border: 0 none;
}
.form-control-text:focus {
  outline: none;
}
.form-control-introduction {
  resize: none;
  flex-basis: 121px;
  flex-shrink: 0;
}
.text-hint {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin-left: -18px;
  padding-top: 4px;
}
.error {
  border-top: 2px solid #fc5a5a;
  justify-content: space-between;
}
.text-limit-error {
  color: #fc5a5a;
}
.text-count {
  color: #696974;
}
.text-name,
.text-introduction {
  color: #696974;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 2px;
}
</style>