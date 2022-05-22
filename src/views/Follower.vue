<template>
  <div class="container">
    <div class="left-content">
      <Navbar />
    </div>

    <div class="middle-content scrollbar">
      <header>
        <img
          @click="$router.back()"
          class="vector-primary"
          src="https://i.imgur.com/PYbiwrX.png"
          alt=""
        />
        <div class="title">
          <h5>{{ name }}</h5>
          <!-- <h5>{{ user.name }}</h5> -->
          <p>{{ tweetCount }} 推文</p>
          <!-- <p>{{ user.totalTweetCount }} 推文</p> -->
        </div>
      </header>

      <!-- FollowNavPills -->
      <div class="wrapper-follow-nav-pills">
        <ul>
          <li class="active">追隨者</li>
          <router-link class="to-following" :to="{ name: 'following' }">
            <li>正在追隨</li>
          </router-link>
        </ul>
      </div>
      <Spinner v-if="isLoading" />
      <div v-else>
        <FollowCard v-for="user in users" :key="user.id" :initial-user="user" />
      </div>
    </div>

    <div class="right-content">
      <PopularList />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FollowCard from "./../components/FollowCard";
import PopularList from "../components/PopularList.vue";
import tweetsAPI from "./../apis/tweets";
import usersAPI from "./../apis/users";
import Spinner from "./../components/Spinner";

export default {
  components: {
    Navbar,
    FollowCard,
    PopularList,
    Spinner,
  },
  data() {
    return {
      users: [],
      name: "",
      tweetCount: 0,
      isLoading: true,
    };
  },
  created() {
    const userId = this.$route.params.id;
    this.fetchFollowersTweets(userId);
    this.getUserInfo(userId);
  },
  methods: {
    // GET /api/users/:id/followers
    async fetchFollowersTweets(userId) {
      try {
        this.isLoading = true;
        const { data } = await tweetsAPI.getFollowersTweets(userId);
        this.users = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
      }
    },
    async getUserInfo(paramsId) {
      try {
        const { data } = await usersAPI.getUserCard(paramsId);
        this.name = data.name;
        this.tweetCount = data.tweetCount;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 178px 639px 273px;
  grid-column-gap: 24px;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
}
.left-content {
  grid-column: 1 / 2;
}
.middle-content {
  grid-column: 2 / 3;
  width: 639px;
  padding: 0;
}
.right-content {
  grid-column: 3 /4;
}
/* Header */
header {
  height: 74px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.vector-primary {
  width: 17px;
  height: 14px;
  margin: auto 28px auto 19px;
  cursor: pointer;
}
.title p {
  font-size: 13px;
  font-weight: 500;
  color: #6c757d;
}
/* FollowNavPill */
.wrapper-follow-nav-pills {
  height: 52px;
  margin-bottom: 16px;
}
ul {
  height: 100%;
  display: flex;
  border-bottom: 1px solid #e6ecf0;
  position: relative;
}
li {
  width: 130px;
  height: 52px;
  text-align: center;
  padding: 15px;
  line-height: 22px;
  color: #657786;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
}
li:hover,
.active {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
}
.to-following {
  text-decoration: none;
}
</style>