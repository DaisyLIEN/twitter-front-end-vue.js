<template>
  <div class="popular-container">
    <h1 class="popular-title">跟隨誰</h1>
    <ul class="popular-list">
      <li
        @click="routerToUser(user.id)"
        v-for="user in users"
        :key="user.id"
        class="popular-item"
      >
        <img
          class="popular-avatar"
          :src="user.avatar ? user.avatar : avatarNone"
          alt="user-img"
        />
        <div class="popular-info">
          <router-link :to="`users/${user.id}`" class="popular-name">{{
            user.name
          }}</router-link>
          <p class="popular-account">{{ user.account }}</p>
        </div>
        <button
          v-show="!user.isFollowed"
          :disabled="isProcessing"
          @click.stop.prevent="addFollow(user)"
          class="btn-follow"
        >
          跟隨
        </button>
        <button
          v-show="user.isFollowed"
          :disabled="isProcessing"
          @click.stop.prevent="removeFollow(user.id)"
          class="btn-follow btn-following"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import avatarNone from "../assets/Avatar-none.png";

export default {
  data() {
    return {
      users: [],
      avatarNone,
      isProcessing: false,
    };
  },
  created() {
    this.fetchPopularList();
  },
  methods: {
    async fetchPopularList() {
      try {
        const response = await usersAPI.getTopFollowedUser();
        // console.log('response', response)
        const { data } = response;
        this.users = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得跟隨誰資料，請稍後再試",
        });
        console.log(error);
      }
    },
    async addFollow(TopFollowedUser) {
      try {
        this.isProcessing = true;
        const { data } = await usersAPI.addFollow(TopFollowedUser);
        // console.log('data', data)
        this.users = this.users.map((user) => {
          if (user.id !== data.followship.followingId) {
            return user;
          } else {
            return {
              ...user,
              isFollowed: true,
            };
          }
        });
        // console.log(this.users)
        this.isProcessing = false;
        window.location.reload();
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async removeFollow(userId) {
      this.isProcessing = true;
      const followUser = this.users.find((user) => user.id === userId);
      followUser.isFollowed = false;
      try {
        const { data } = await usersAPI.removeFollow(userId);
        console.log("data", data);
        console.log(userId);
        this.isProcessing = false;
        window.location.reload();
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
    routerToUser(userID) {
      this.$router.push(`/users/${userID}`);
    },
  },
};
</script>


<style scoped>
.popular-container {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 273px;
  border-radius: 14px;
  background-color: #f5f8fa;
  border-top: 1px solid white;
  /* border: 1px solid red; */
}
.popular-title {
  margin: 24px 0 24px 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
}
.popular-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e6ecf0;
  padding: 16px;
}
.popular-item:hover {
  cursor: pointer;
  background: rgb(235, 219, 219);
}

.popular-avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 8px;
}

.popular-info {
  position: absolute;
  left: 75px;
}
.popular-name {
  color: #1c1c1c;
}
.popular-account {
  color: #657786;
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

/* 調整已跟隨的按鈕樣式變化 */
.btn-following {
  width: 96px;
  background-color: #ff6600;
  color: #ffffff;
}
.btn-following::after {
  content: "正在跟隨";
}
.btn-following:hover {
  background-color: #000000;
  border-color: #000000;
  color: red;
}
.btn-following:hover::after {
  content: "取消跟隨";
}
</style>