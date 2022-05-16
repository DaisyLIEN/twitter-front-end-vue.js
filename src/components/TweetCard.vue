<template>
  <router-link :to="{ name: 'replylist', params: { tweet_id: user.id } }">
    <div class="tweet">
      <div class="tweet-img">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img :src="user.avatar" alt="" class="user-photo" />
        </router-link>
      </div>
      <div class="tweet-right">
        <div class="user">
          <span class="user-name">{{ user.name }}</span>
          <span class="user-account"
            >@{{ user.account }} ‧ {{ user.createdAt | fromNow }}小時</span
          >
        </div>
        <div class="tweet-content">
          {{ user.description }}
        </div>
        <div class="tweet-actions">
          <div class="tweet-action">
            <font-awesome-icon icon="fa-regular fa-comment" />
            <p class="reply-number">{{ user.replyCount }}</p>
          </div>
          <div class="tweet-action">
            <font-awesome-icon icon="fa-regular fa-heart" />
            <p class="like-number">{{ user.likeCount }}</p>
          </div>
        </div>
      </div>
      <hr class="hr1" />
    </div>
  </router-link>
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
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
};
</script>

<style scoped>
.tweet {
  display: flex;
  flex-wrap: wrap;
}

img {
  width: 50px;
  height: 50px;
  margin: 0 8px 0 24px;
}

.tweet-right {
  width: calc(100% - 106px);
}

.user-name {
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.user-account {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  color: #6c757d;
}

.tweet-content {
  margin: 8px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  color: #171725;
}

.tweet-actions {
  display: flex;
}

.tweet-action {
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

.hr1 {
  width: 100%;
  height: 1px;
  /* margin: 24px 0px 16px 0px; */
}
</style>