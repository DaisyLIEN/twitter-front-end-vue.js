<template>
  <div class="reply">
    <div class="reply-img">
      <img :src="reply.User.image" alt="" class="user-photo" />
    </div>
    <div class="reply-right">
      <div class="user">
        <span class="user-name">{{ reply.User.name }}</span>
        <span class="user-account"
          >{{ reply.User.account }} ·{{ reply.createdAt | fromNow }}小時</span
        >
      </div>
      <div class="tweet">
        <p class="tweet-reply">
          回覆 <sapn class="tweet-account"> @{{ reply.Tweet.account }}</sapn>
        </p>
      </div>
      <div class="reply-content">
        {{ reply.content }}
      </div>
      <div class="reply-actions">
        <div class="reply-action">
          <font-awesome-icon icon="fa-regular fa-comment" />
          <p class="reply-number">{{ reply.replyNum }}</p>
        </div>
        <div class="reply-action">
          <font-awesome-icon icon="fa-regular fa-heart" />
          <p class="like-number">{{ reply.likeNum }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  props: {
    initialReply: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reply: this.initialReply,
    };
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