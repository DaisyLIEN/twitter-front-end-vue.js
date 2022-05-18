<template>
  <div class="container">
    <div class="left-content">
      <Navbar />
    </div>
    <div class="middle-content">
      <UserCard
        :initial-user-profile="profile"
        :initial-current-user-id="currentUserId"
        :initial-params-id="paramsId"
      />
      <!-- TweetNavPills -->
      <div class="wrapper-tweet-nav-pills">
        <ul>
          <li
            :class="[{ 'current-page': currentPill === 'tweets' }]"
            @click.stop.prevent="switchNavPill('tweets')"
          >
            推文
          </li>
          <li
            :class="[{ 'current-page': currentPill === 'repliedTweets' }]"
            @click.stop.prevent="switchNavPill('repliedTweets')"
          >
            回覆
          </li>
          <li
            :class="[{ 'current-page': currentPill === 'likes' }]"
            @click.stop.prevent="switchNavPill('likes')"
          >
            喜歡的內容
          </li>
        </ul>
      </div>

      <div class="tweet-cards">
        <TweetCard
          v-for="user in usersTweets"
          :key="user.id"
          :initial-user="user"
          v-show="currentPill === 'tweets'"
        />
      </div>

      <ReplyCard
        v-for="userReply in replyTweets"
        :key="userReply.id"
        :initial-user-reply="userReply"
        :initial-profile="profile"
        :initial-current-user-id="currentUserId"
        v-show="currentPill === 'repliedTweets'"
      />

      <TweetCard
        v-for="user in usersTweets"
        :key="user.id"
        :initial-user="user"
        v-show="currentPill === 'likes'"
      />
    </div>
    <div class="right-content">
      <PopularList />
    </div>

    <EditModal
      :initial-user-profile="profile"
      @after-submit="handleAfterSubmit"
    />
    <!-- ref="editModalRef" -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserCard from "../components/UserCard.vue";
import TweetCard from "../components/TweetCard.vue";
import ReplyCard from "../components/ReplyCard.vue";
import PopularList from "../components/PopularList.vue";
import EditModal from "../components/EditModal.vue";
import usersAPI from "./../apis/users";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    Navbar,
    UserCard,
    TweetCard,
    ReplyCard,
    PopularList,
    EditModal,
  },
  data() {
    return {
      currentUserId: -1,
      paramsId: -1,
      usersTweets: [],
      replyTweets: [],
      profile: {
        id: -1,
        account: "",
        name: "",
        introduction: "",
        avatar: "",
        cover: "",
        followingsCount: 0,
        followersCount: 0,
        tweetCount: 0,
      },
      currentPill: "tweets",
    };
  },
  created() {
    const { id } = this.$route.params;
    this.paramsId = Number(id);
    this.getCurrentUserId();
    this.fetchUserCard(id);
    this.fetchUsersTweets(id);
  },
  methods: {
    getCurrentUserId() {
      const userId = localStorage.getItem("userId");
      this.currentUserId = Number(userId);
    },
    switchNavPill(pillName) {
      this.currentPill = pillName;
      if (pillName === "tweets") {
        this.fetchUsersTweets(this.paramsId);
      } else if (pillName === "repliedTweets") {
        this.fetchReplyTweets(this.paramsId);
      } else {
        this.fetchLikes(this.paramsId);
      }
    },
    // UserCard：GET /api/users/:id
    async fetchUserCard(paramsId) {
      try {
        const { data } = await usersAPI.getUserCard(paramsId);

        const {
          id,
          account,
          name,
          introduction,
          avatar,
          cover,
          followingsCount,
          followersCount,
          tweetCount,
        } = data;

        this.profile = {
          ...this.profile,
          id,
          account,
          name,
          introduction,
          avatar,
          cover,
          followingsCount,
          followersCount,
          tweetCount,
        };
      } catch (error) {
        console.log(error);
      }
    },
    // 推文：GET /api/users/:id/tweets
    async fetchUsersTweets(paramsId) {
      try {
        const { data } = await tweetsAPI.getUserTweets(paramsId);
        console.log("getUserTweets", data);
        this.usersTweets = data;
      } catch (error) {
        console.log("fetchUsersTweets", error);
      }
    },
    // 回覆：GET /api/users/:id/replied_tweets
    async fetchReplyTweets(paramsId) {
      try {
        const { data } = await tweetsAPI.getReplyTweets(paramsId);
        this.replyTweets = data;
      } catch (error) {
        console.log("getReplyTweets", error);
      }
    },
    // 喜歡的內容：GET /api/users/:id/likes
    async fetchLikes(paramsId) {
      try {
        const { data } = await tweetsAPI.getLikeTweets(paramsId);
        console.log("getLikeTweets", data);

        if (data.length === 0) {
          this.usersTweets = [];
        } else {
          this.usersTweets = data;
        }
      } catch (error) {
        console.log("getLikeTweets", error);
      }
    },
    // EditModal：PUT /api/users/:id
    async handleAfterSubmit({ formData }) { 
      try {
        console.log("收到子元件formData");

        const { data } = await usersAPI.updateUserCard({ formData });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        console.log("個人資料送後端成功");
        this.fetchUserCard();
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新個人資料，請稍後再試",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.paramsId = Number(id);
    this.fetchUserCard(id);
    this.fetchUsersTweets(id);
    next();
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
li:hover {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
}
.current-page {
  color: #ff6600;
  border-bottom: 2px solid #ff6600;
}
</style>