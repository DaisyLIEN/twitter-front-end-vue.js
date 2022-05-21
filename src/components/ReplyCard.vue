<template>
  <div class="reply">
    <div class="reply-img">
      <img :src="profile.avatar" alt="" class="user-photo" />
    </div>
    <div class="reply-right">
      <div class="user">
        <span class="user-name">{{ profile.name }}</span>
        <span class="user-account"
          >{{ reply.account }} ·{{ reply.replyCreateAt | fromNow }}</span
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
    <ReplyModal />
  </div>
</template>

<script>
import moment from "moment";
import ReplyModal from "../components/ReplyModal.vue";

export default {
  components: {
    ReplyModal,
  },
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
      required: true,
    },
    initialUserReply: {
      type: Object,
      required: true,
    },
    initialProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reply: this.initialUserReply,
      profile: this.initialProfile,
      currentParams: -1,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.currentParams = Number(id);
  },
  watch: {
    initialUserReply(newValue) {
      this.reply = {
        ...this.reply,
        ...newValue,
      };

      // comment: "faker.lorem.text()"
      // createAt: "2022-05-15T12:31:42.000Z"
      // id: 4
      // replyAccount: "user1"
    },
    initialReply(newValue) {
      this.reply = {
        ...this.reply,
        ...newValue,
      };
      // account: "user2"
      // avatar: "https://loremflickr.com/800/350/paradise/?random=75.80269215053413"
      // comment: "faker.lorem.text()"
      // id: 1
      // likeCount: 0
      // name: "user2"
      // tweetId: 1
      // userId: 3
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