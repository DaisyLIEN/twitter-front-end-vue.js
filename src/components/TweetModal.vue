<template>
  <div class="tweet-modal">
    <div
      class="modal fade"
      id="tweetModal"
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
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="posting">
              <!-- <img class="photo" :src="user.avatar | emptyAvatar" alt="" /> -->
              <img
                class="photo"
                :src="currentUserAvatar ? currentUserAvatar : avatarNone"
                alt=""
              />
              <textarea
                v-model="newTweet"
                :style="{ height: height }"
                name="new-post"
                class="new-post"
                maxlength="141"
                placeholder="有什麼新鮮事？"
              ></textarea>
            </div>
            <div class="footer">
              <div v-if="!newTweet.length" class="text-limit-error">
                內容不可空白
              </div>
              <div v-else-if="newTweet.length === 141" class="text-limit-error">
                字數不可超過 140 字
              </div>
              <!-- :disabled="!newTweet.length || newTweet.length === 141" -->
              <button
                type="button"
                class="btn-submit"
                data-dismiss="modal"
                @click="addTweet"
              >
                推文
              </button>
            </div>
            <!-- <div class="btn">
              <button
                type="button"
                class="btn-submit"
                data-dismiss="modal"
                @click="addTweet"
              >
                推文
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTweet: "",
      height: "",
      currentUserAvatar: localStorage.getItem("userAvatar"),
    };
  },
  watch: {
    newTweet() {
      // console.log(this.newTweet.length);
      if (this.newTweet.length > 70) this.height = "126px";
      else this.height = "66px";
    },
  },
  methods: {
    addTweet() {
      if (this.newTweet.length === 0 || this.newTweet.length === 141) return;
      // const newTweet = this.newTweet;
      this.$emit("after-addTweet", this.newTweet);
      this.newTweet = "";
    },
  },
};
</script>

<style scoped>
/* Modal */
.modal-dialog {
  height: 304px;
  width: 46%;
  max-width: none;
}

.modal-content {
  border-radius: 14px;
}

.modal-header {
  padding-left: 0;
  padding-right: 0;
}

.close {
  color: #ff6600;
  outline: none;
  padding-left: 15px;
  margin-left: 0px;
}

/* .post {
  height: auto;
} */

.posting {
  display: flex;
  padding: 0;
}

.photo {
  width: 50px;
  height: 50px;
  margin-left: 8px;
}

.new-post {
  width: 526px;
  margin: 12px 8px 14px 8px;
  border: none; /*去除邊框*/
  outline: none; /*去除選中後的邊框*/
  resize: none; /*移除小三角，關閉調整大小功能*/
  overflow: hidden;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #6c757d;
  min-height: 66px;
}

/* .btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
  padding: 0;
} */

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  padding: 0;
}

.text-limit-error {
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: #fc5a5a;
  margin-right: 20px;
}

.btn-submit {
  width: 64px;
  height: 40px;
  background-color: #ff6600;
  border: none;
  border-radius: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  outline: none; /*點擊不會出現黑框*/
}
</style>