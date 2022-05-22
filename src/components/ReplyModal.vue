<template>
  <div
    class="modal fade"
    :id="`replyModal${tweet.TweetId}`"
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
            <img
              class="photo"
              :src="tweet.avatar ? tweet.avatar : avatarNone"
              alt=""
            />
            <div class="tweet-info">
              <div class="user-info">
                <span class="user-name">{{ tweet.name }}</span>
                <span class="user-account">@{{ tweet.account }}</span>
                <span>．</span>
                <span class="create-time">{{
                  tweet.tweetCreatedAt | fromNow
                }}</span>
              </div>
              <div class="tweet-text">
                {{ tweet.description }}
              </div>
              <div class="reply-hint">回覆給@{{ tweet.account }}</div>
            </div>
            <div class="connect-line"></div>
          </div>
          <div class="posting reply-posting">
            <img
              class="photo"
              :src="currentUserAvatar ? currentUserAvatar : avatarNone"
              alt=""
            />
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
          <div class="footer">
            <div v-show="!replyContent.length" class="text-limit-error">
              內容不可空白
            </div>
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
</template>

<script>
import moment from "moment";
import { Toast } from "../utils/helpers";
import tweetsAPI from "./../apis/tweets";
import avatarNone from "../assets/Avatar-none.png";

export default {
  name: "Replication",
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  props: {
    initialTweet: {
      type: Object,
      required: false,
    },
    replyTweet: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      tweet: {},
      replyContent: "",
      userId: -1,
      currentUserAvatar: localStorage.getItem("userAvatar"),
      avatarNone,
    };
  },
  created() {
    this.tweet = this.initialTweet;
    if (this.initialTweet) {
      this.tweet = this.initialTweet;
    } else {
      this.tweet = this.replyTweet;
    }
    this.userId = localStorage.getItem("userId");
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.replyContent.length === 0) {
          Toast.fire({
            icon: "warning",
            title: "回覆內容不可為空白",
          });
          return;
        }

        const response = await tweetsAPI.createTweetReply({
          tweetId: this.tweet.TweetId,
          userId: this.userId,
          comment: this.replyContent,
        });

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        Toast.fire({
          icon: "success",
          title: "回覆成功！",
        });

        this.replyContent = "";
        //送出後重整頁面
        this.$emit("after-reply");
      } catch (error) {
        console.log("createReplyerror", error);
      }
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
  border-radius: 25px;
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
.connect-line {
  position: absolute;
  top: 60px;
  left: 25px;
  width: 2px;
  bottom: 10px;
  background-color: #b5b5be;
}

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