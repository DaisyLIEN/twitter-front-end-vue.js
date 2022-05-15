<template>
  <div class="container">
    <div class="left-content">
      <Navbar />
    </div>
    <div class="middle-content">
      <UserCard :initial-user-profile="profile" />
      <!-- <TweetNavPills /> -->
      <div class="wrapper-tweet-nav-pills">
        <ul>
          <a href="#"><li>推文</li></a>
          <a href="#"><li>回覆</li></a>
          <a href="#"><li>喜歡的內容</li></a>
        </ul>
      </div>

      <TweetCard
        v-for="user in UsersTweets"
        :key="user.id"
        :initial-user="user"
      />

      <ReplyCard />
    </div>
    <div class="right-content">
      <PopularList />
    </div>

    <!-- <EditModal />       -->
    <EditModal ref="editModalRef" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserCard from "../components/UserCard.vue";
// import TweetNavPills from "../components/TweetNavPills.vue";
import TweetCard from "../components/TweetCard.vue";
import ReplyCard from "../components/ReplyCard.vue";
import PopularList from "../components/PopularList.vue";
import EditModal from "../components/EditModal.vue";

const dummyDataUser = {
  profile: {
    id: 1,
    userAccount: "user1",
    userName: "John Doe",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "https://i.imgur.com/sFuDF3M.png",
    cover: "https://i.imgur.com/H3ADasp.png",
    followingsCount: 34,
    followersCount: 59,
  },
};

const dummyDataUsersTweets = {
  users: [
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. Suspendisse blandit libero sit amet nisl blandit, vitae fermentum leo tincidunt.",
      replyNum: 13,
      likeNum: 76,
    },
    {
      id: 2,
      name: "Jane Cathy",
      account: "jamjane1999",
      image: "https://img.onl/KW4sJV",
      createdAt: "2022-04-25T02:16:16.000Z",
      updatedAt: "2022-04-25T02:16:16.000Z",
      content:
        "Cras blandit libero nibh, nec scelerisque lorem condimentum sit amet. Nam sapien eros, ultricies sit amet arcu non, iaculis venenatis nulla. Integer efficitur varius neque, viverra vestibulum ligula. Duis libero odio, convallis a elit ac, fermentum luctus velit.",
      replyNum: 10,
      likeNum: 80,
    },
    {
      id: 3,
      name: "Cheery",
      account: "cheerysweet",
      image: "https://img.onl/H5eDF2",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Integer odio tellus, viverra eget vestibulum vitae, auctor sed magna. Sed sed gravida diam. Praesent volutpat tincidunt risus a sagittis. Vestibulum quis purus venenatis, sodales justo eu, faucibus tortor.",
      replyNum: 17,
      likeNum: 55,
    },
    {
      id: 4,
      name: "Dana",
      account: "danagirl",
      image: "https://img.onl/HM4fxm",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, orci imperdiet condimentum sagittis, nisl enim commodo sem, nec ornare augue libero ut purus.",
      replyNum: 10,
      likeNum: 88,
    },
    {
      id: 5,
      name: "Gorden",
      account: "gordenball2022",
      image: "https://img.onl/25RyTE",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Nullam eu ante nisi. In convallis non augue ac rutrum. Fusce eu ullamcorper quam. Duis at aliquet tortor.",
      replyNum: 13,
      likeNum: 76,
    },
    {
      id: 6,
      name: "LuLu",
      account: "lulupig",
      image: "https://img.onl/1XTVZ",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Integer ut pulvinar augue, ac molestie diam. Aliquam sagittis luctus elit, vitae auctor enim euismod nec.",
      replyNum: 17,
      likeNum: 68,
    },
  ],
};

export default {
  components: {
    Navbar,
    UserCard,
    // TweetNavPills,
    TweetCard,
    ReplyCard,
    PopularList,
    EditModal,
  },
  data() {
    return {
      UsersTweets: [],
      profile: {
        id: -1,
        userAccount: "",
        userName: "",
        introduction: "",
        avatar: "",
        cover: "",
        followingsCount: 0,
        followersCount: 0,
      },
    };
  },
  created() {
    this.fetchUsersTweets();
    this.fetchUserCard();
  },
  methods: {
    // Profile：GET /api/users/:id
    fetchUserCard() {
      const {
        id,
        userAccount,
        userName,
        introduction,
        avatar,
        cover,
        followingsCount,
        followersCount,
      } = dummyDataUser.profile;

      this.profile = {
        ...this.profile,
        id,
        userAccount,
        userName,
        introduction,
        avatar,
        cover,
        followingsCount,
        followersCount,
      };
    },
    // 推文：GET /api/users/:id/tweets
    fetchUsersTweets() {
      this.UsersTweets = dummyDataUsersTweets.users;
    },
    // 回覆：GET /api/users/:id/replied_tweets

    // 喜歡的內容：GET /api/users/:id/likes

    // EditModal：PUT /api/users/:id
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
/* TweetNavPills */
.wrapper-tweet-nav-pills {
  height: 52px;
  margin-bottom: 16px;
}
ul {
  height: 100%;
  display: flex;
  border-bottom: 1px solid #e6ecf0;
}
a {
  text-decoration: none;
  position: relative;
  color: #657786;
  width: 130px;
}
li {
  height: 52px;
  text-align: center;
  padding: 15px;
  line-height: 22px;
  color: #657786;
  font-weight: 700;
  font-size: 15px;
}
li:hover,
li:focus,
li:hover::after,
li:focus::after {
  color: #ff6600;
  opacity: 1;
}
li::after {
  content: "";
  border-bottom: 2px solid #ff6600;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
}
</style>