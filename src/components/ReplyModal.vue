<template>
  <div>
    <!-- Button trigger modal (測試按鈕，待組裝完成後刪除) -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#tweetModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
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
              <img class="photo" src="https://img.onl/d0RNIH" alt="" />
              <div class="tweet-info">
                <div class="user-info">
                  <span class="user-name">Apple</span>
                  <span class="user-account">@apple</span>
                  <span>．</span>
                  <span class="create-time">3 小時</span>
                </div>
                <div class="tweet-text">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                  ullamco cillum dolor. Voluptate exercitation incididunt
                  aliquip deserunt reprehenderit elit laborum.
                </div>
                <div class="reply-hint">回覆給@Mitsubishi</div>
              </div>
              <div class="conect-line"></div>
            </div>
            <div class="posting">
              <img class="photo" src="https://img.onl/d0RNIH" alt="" />
              <textarea
                v-model="replyContent"
                id="note"
                class="new-reply"
                placeholder="推你的回覆"
                autofocus
                rows="5"
              >
              </textarea>
            </div>
            <div class="btn">
              <button
                @click="handleSubmit"
                type="button"
                class="btn-submit"
                data-dismiss="modal"
              >
                回覆
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export default {
  name: "Replication",
  props: {
    tweetId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      replyContent: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("after-reply", {
        replyId: uuidv4(),
        createTime: moment(),
        tweetId: this.tweetId,
        replyContent: this.replyContent,
      });
      this.replyContent = "";
    },
  },
};
</script>

<style scoped>
/* Modal */

.modal-dialog {
  height: 500px;
  width: 634px;
  max-width: none;
}

.modal-content {
  border-radius: 14px;
}

.modal-header {
  padding-left: 0;
  padding-right: 0;
}
.modal-body {
  height: 100%;
  width: 100%;
  padding: 16px 24px;
}

.close {
  color: #ff6600;
  outline: none;
  padding-left: 15px;
  margin-left: 0px;
}

.posting {
  position: relative;
  display: flex;
  padding: 0;
}

.photo {
  width: 50px;
  height: 50px;
}

.new-reply,
.tweet-info {
  width: 100%;
  margin-left: 8px;
  border: none;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #6c757d;
}
.new-reply {
  padding-top: 10px;
  /* 取消textarea預設樣式 */
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
}
.user-info {
  margin-bottom: 10px;
  font-size: 14px;
}

.user-name {
  font-weight: 700;
  margin-right: 8px;
  color: #171725;
}

.tweet-text {
  color: #171725;
}

.reply-hint {
  font-size: 14px;
  margin: 10px 0px;
}
.conect-line {
  position: absolute;
  top: 60px;
  left: 25px;
  width: 2px;
  height: 86px;
  background-color: #b5b5be;
}

.btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 0;
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