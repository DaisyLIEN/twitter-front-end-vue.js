<template>
  <div class="container">
    <div class="left-content">
      <Navbar />
    </div>

    <div class="middle-content">
      <header>
        <img
          @click="$router.back()"
          class="vector-primary"
          src="https://i.imgur.com/PYbiwrX.png"
          alt=""
        />
        <div class="title">
          <h5>{{ user.name }}</h5>
          <p>{{ user.totalTweetCount }} 推文</p>
        </div>
      </header>

      <!-- FollowNavPills -->
      <div class="wrapper-follow-nav-pills">
        <ul>
          <router-link class="to-follower" :to="{ name: 'follower' }">
            <li>追隨者</li>
          </router-link>
          <li class="active">正在追隨</li>
        </ul>
      </div>

      <FollowCard v-for="user in users" :key="user.id" :initial-user="user" />
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
import usersAPI from "./../apis/users";
import tweetsAPI from "./../apis/tweets";

// const dummyData = {
//   users: [
//     {
//       id: 1,
//       name: "Apple",
//       account: "apple",
//       image: "https://img.onl/Dwojms",
//       createdAt: "2022-05-11T02:16:16.000Z",
//       updatedAt: "2022-05-11T02:16:16.000Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
//       replyNum: 13,
//       likeNum: 76,
//       isFollow: false,
//     },
//     {
//       id: 1,
//       name: "Apple",
//       account: "apple",
//       image: "https://img.onl/Dwojms",
//       createdAt: "2022-05-11T02:16:16.000Z",
//       updatedAt: "2022-05-11T02:16:16.000Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
//       replyNum: 13,
//       likeNum: 76,
//       isFollow: false,
//     },
//     {
//       id: 1,
//       name: "Apple",
//       account: "apple",
//       image: "https://img.onl/Dwojms",
//       createdAt: "2022-05-11T02:16:16.000Z",
//       updatedAt: "2022-05-11T02:16:16.000Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
//       replyNum: 13,
//       likeNum: 76,
//       isFollow: false,
//     },
//     {
//       id: 1,
//       name: "Apple",
//       account: "apple",
//       image: "https://img.onl/Dwojms",
//       createdAt: "2022-05-11T02:16:16.000Z",
//       updatedAt: "2022-05-11T02:16:16.000Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
//       replyNum: 13,
//       likeNum: 76,
//       isFollow: false,
//     },
//     {
//       id: 1,
//       name: "Apple",
//       account: "apple",
//       image: "https://img.onl/Dwojms",
//       createdAt: "2022-05-11T02:16:16.000Z",
//       updatedAt: "2022-05-11T02:16:16.000Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
//       replyNum: 13,
//       likeNum: 76,
//       isFollow: false,
//     },
//     {
//       id: 1,
//       name: "Apple",
//       account: "apple",
//       image: "https://img.onl/Dwojms",
//       createdAt: "2022-05-11T02:16:16.000Z",
//       updatedAt: "2022-05-11T02:16:16.000Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
//       replyNum: 13,
//       likeNum: 76,
//       isFollow: false,
//     },
//     {
//       id: 1,
//       name: "Apple",
//       account: "apple",
//       image: "https://img.onl/Dwojms",
//       createdAt: "2022-05-11T02:16:16.000Z",
//       updatedAt: "2022-05-11T02:16:16.000Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
//       replyNum: 13,
//       likeNum: 76,
//       isFollow: false,
//     },
//   ],
// };

export default {
  components: {
    Navbar,
    FollowCard,
    PopularList,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        totalTweetCount: 0,
      },
      users: [],
    };
  },
  created() {
    this.fetchUserCard();
    this.fetchFollowingsTweets();
  },
  methods: {
    // GET /api/users/:id，取id、名稱、總推文數
    async fetchUserCard() {
      try {
        const { data } = await usersAPI.getUserCard(2);

        console.log("getUserCard", data);

        const { id, name, totalTweetCount } = data;

        this.user = {
          ...this.user,
          id,
          name,
          totalTweetCount,
        };
      } catch (error) {
        console.log("fetchUserCard", error);
      }
    },
    // GET /api/users/:id/followings
    async fetchFollowingsTweets() {
      try {
        const { data } = await tweetsAPI.getFollowingsTweets(2);
        console.log("getFollowingsTweets", data);
        this.users = data;
      } catch (error) {
        console.log("getFollowingsTweets", error);
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
.to-follower {
  text-decoration: none;
}
</style>