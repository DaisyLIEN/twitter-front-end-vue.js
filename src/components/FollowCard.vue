<template>
  <div class="tweet">
    <div class="tweet-img">
      <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img :src="user.image" alt="" class="user-photo" />
      </router-link>
    </div>
    <div class="tweet-right">
      <div class="tweet-right-top">
        <div class="user">
          <span class="user-name">{{ user.name }}</span>
        </div>
        <div class="btn">
          <button
            v-if="user.isFollow"
            type="button"
            class="btn-follow"
            @click.stop.prevent="deleteFollow"
          >
            跟隨
          </button>
          <button
            v-else
            type="button"
            class="btn-following"
            @click.stop.prevent="addFollow"
          >
            正在跟隨
          </button>
        </div>
      </div>
      <div class="tweet-content">
        {{ user.content }}
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
  methods: {
    addFollow() {
      this.user = {
        ...this.user,
        isFollow: true,
      };
    },
    deleteFollow() {
      this.user = {
        ...this.user,
        isFollow: false,
      };
    },
    // 追隨：POST /followships?id=2
    // 取消追隨：DETELE /followships/:followingId
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

.tweet-right-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.btn-follow {
  width: 64px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #ff6600;
  border-radius: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ff6600;
  outline: none; /*點擊不會出現黑框*/
}

.btn-following {
  width: 96px;
  height: 40px;
  background-color: #ff6600;
  border: 1px solid #ff6600;
  border-radius: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  outline: none;
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