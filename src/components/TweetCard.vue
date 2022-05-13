<template>
  <div class="tweet">
    <h1>123</h1>
    <div class="tweet-img">
      <img :src="user.image" alt="" class="user-photo" />
    </div>
    <div class="tweet-right">
      <div class="user">
        <span class="user-name">{{ user.name }}</span>
        <span class="user-account"
          >@{{ user.account }} ‧ {{ user.createdAt }}小時</span
        >
      </div>
      <div class="tweet-content">
        {{ user.content }}
      </div>
      <div class="tweet-actions">
        <div class="tweet-action">
          <font-awesome-icon icon="fa-regular fa-comment" />
          <p class="reply-number">{{ user.replyNum }}</p>
        </div>
        <div class="tweet-action">
          <font-awesome-icon icon="fa-regular fa-heart" />
          <p class="like-number">{{ user.likeNum }}</p>
        </div>
      </div>
    </div>
    <hr class="hr1" />
  </div>
</template>

<script>
export default {
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

/* .tweet-img {
  margin-right: 8px;
} */

img {
  width: 50px;
  height: 50px;
  margin: 0 8px 0 24px;
}

.tweet-right {
  width: calc(100% - 106px);
}

.tweet-content {
  margin: 8px 0;
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
}

.hr1 {
  width: 100%;
  height: 1px;
  /* margin: 24px 0px 16px 0px; */
}
</style>