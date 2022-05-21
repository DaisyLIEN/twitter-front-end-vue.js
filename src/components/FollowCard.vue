<template>
  <div class="tweet">
    <div class="tweet-img">
      <router-link :to="{ name: 'user', params: { id: user.id } }">
        <img
          :src="user.avatar ? user.avatar : avatarNone"
          alt=""
          class="user-photo"
        />
      </router-link>
    </div>
    <div class="tweet-right">
      <div class="tweet-right-top">
        <div class="user">
          <span class="user-name">{{ user.name }}</span>
        </div>
        <div class="btn">
          <button
            v-if="!user.isFollowed"
            type="button"
            class="btn-follow"
            @click.stop.prevent="addFollow(user)"
          >
            跟隨
          </button>
          <button
            v-else
            type="button"
            class="btn-following"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            正在跟隨
          </button>
        </div>
      </div>
      <div class="tweet-content">
        {{ user.introduction }}
      </div>
    </div>
    <hr class="hr1" />
  </div>
</template>

<script>
import avatarNone from "../assets/Avatar-none.png";
import usersAPI from "./../apis/users";

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
      avatarNone,
    };
  },
  created() {},
  methods: {
    async addFollow(user) {
      try {
        const response = await usersAPI.addFollow(user);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      this.user.isFollowed = true;
    },
    async deleteFollow(userId) {
      try {
        const response = await usersAPI.removeFollow(userId);
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
      this.user.isFollowed = false;
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