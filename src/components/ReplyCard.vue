<template>
  <div class="reply">
    <div class="reply-img">
      <router-link :to="{ name: 'user', params: { id: reply.UserId } }">
        <img :src="reply.avatar | emptyAvatar" alt="" class="user-photo" />
      </router-link>
    </div>
    <div class="reply-right">
      <div class="user">
        <span class="user-name">{{ reply.userName }}</span>
        <span class="user-account"
          >{{ reply.userAccount }} ·{{ reply.replyCreateAt | fromNow }}</span
        >
      </div>
      <div class="tweet">
        <p class="tweet-reply">
          回覆 <span class="tweet-account"> @{{ reply.replyAccount }}</span>
        </p>
      </div>
      <div class="reply-content">
        {{ reply.comment }}
      </div>
      <div
        v-show="initialCurrentUserId !== currentParams"
        class="reply-actions"
      >
        <div class="reply-action">
          <font-awesome-icon icon="fa-regular fa-comment" />
          <p class="reply-number">{{ reply.totalReplyCount }}</p>
        </div>
        <div class="reply-action">
          <font-awesome-icon icon="fa-regular fa-heart" />
          <p class="like-number">{{ reply.totalLikeCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import moment from "moment";

export default {
  mixins: [emptyImageFilter],
  components: {},
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  props: {
    initialCurrentUserId: {
      type: Number,
      required: false,
    },
    initialUserReply: {
      type: Object,
      required: false,
    },
    initialReplyFromReplyList: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      reply: this.initialUserReply,
      currentParams: -1,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.currentParams = Number(id);
    if (!this.initialUserReply) {
      this.reply = this.initialReplyFromReplyList;
    }
  },
  watch: {
    initialUserReply(newValue) {
      this.reply = {
        ...this.reply,
        ...newValue,
      };

      // UserId: (...)
      // avatar: (...)
      // comment: (...)
      // replyAccount: (...)
      // replyCreateAt: (...)
      // replyId: (...)
      // totalLikeCount: (...)
      // totalReplyCount: (...)
      // userAccount: (...)
      // userName: (...)
    },
    initialReply(newValue) {
      console.log("replynewvalue", newValue);
      const {
        UserId,
        avatar,
        comment,
        replyAccount,
        replyCreatedAt,
        replyId,
        totalLikeCount,
        totalReplyCount,
        userAccount,
        userName,
      } = newValue;
      this.reply = {
        ...this.reply,
        UserId,
        avatar,
        comment,
        replyAccount,
        replyCreateAt: replyCreatedAt, //待改
        replyId,
        totalLikeCount,
        totalReplyCount,
        userAccount,
        userName,
      };
      //       UserId: (...)
      // avatar: (...)
      // comment: (...)
      // replyAccount: (...)
      // replyCreatedAt: (...)
      // replyId: (...)
      // totalLikeCount: (...)
      // totalReplyCount: (...)
      // tweetId: (...)
      // userAccount: (...)
      // userName: (...)
    },
  },
};
</script>

<style scoped>
.reply {
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #e6ecf0;
  margin-bottom: 16px;
}

img {
  width: 50px;
  height: 50px;
  margin: 0 8px 0 24px;
}

.reply-right {
  margin-right: 24px;
}

.user-name {
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.user-photo {
  border-radius: 25px;
}
.user-account,
.tweet {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
}

.tweet-account {
  color: #ff6600;
}

.tweet {
  margin-top: 8px;
}

.reply-content {
  margin: 8px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  color: #171725;
}

.reply-actions {
  display: flex;
  margin-bottom: 16px;
}

.reply-action {
  display: flex;
  margin-right: 40px;
  align-items: baseline;
}

.reply-number,
.like-number {
  margin-left: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
}
</style>