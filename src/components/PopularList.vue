<template>
  <div class="popular-container">
    <h1 class="popular-title">Popular</h1>
    <ul class="popular-list">
      <li
        @click="routerToUser(user.id)"
        v-for="user in users"
        :key="user.id"
        class="popular-item"
      >
        <img class="popular-avatar" :src="user.avatar" alt="user-img" />
        <div class="popular-info">
          <router-link :to="`users/${user.id}`" class="popular-name">{{
            user.userName
          }}</router-link>
          <p class="popular-account">{{ user.userAccount }}</p>
        </div>
        <button
          v-show="!user.isFollowed"
          @click.stop.prevent="addFollow(user.id)"
          class="btn-follow"
        >
          跟隨
        </button>
        <button
          v-show="user.isFollowed"
          @click.stop.prevent="removeFollow(user.id)"
          class="btn-follow btn-following"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script>
const dummyUsers = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: true,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/100",
    userName: "A",
    userAccount: "@A",
    isFollowed: false,
  },
];

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchPopularList();
  },
  methods: {
    fetchPopularList() {
      this.users = dummyUsers;
    },
    addFollow(userID) {
      const followUser = this.users.find((user) => user.id === userID);
      followUser.isFollowed = true;
    },
    removeFollow(userID) {
      const followUser = this.users.find((user) => user.id === userID);
      followUser.isFollowed = false;
    },
    routerToUser(userID) {
      this.$router.push(`/users/${userID}`);
    },
  },
};
</script>


<style scoped>
.popular-container {
  width: 350px;
  border-radius: 14px;
  background-color: #f5f8fa;
}
.popular-title {
  line-height: 45px;
  padding-left: 15px;
  font-size: 18px;
  font-weight: 700;
}
.popular-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e6ecf0;
  padding: 10px 15px;
}
.popular-item:hover {
  cursor: pointer;
  background: rgb(235, 219, 219);
}

.popular-avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
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