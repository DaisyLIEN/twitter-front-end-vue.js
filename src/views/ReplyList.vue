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
          <h4>推文</h4>
        </div>
      </header>

      <!-- 推文區域 -->
      <div class="tweet-section">
        <div class="tweet-content">
          <div class="user-avatar-name-account">
            <router-link :to="{ name: 'user', params: { id: tweet.UserId } }">
              <img :src="tweet.avatar" alt="" class="user-avatar" />
            </router-link>
            <div class="user-name-account">
              <span class="user-name">{{ tweet.name }}</span>
              <span class="user-account">@{{ tweet.account }}</span>
            </div>
          </div>
          <div class="tweet-description">
            {{ tweet.description }}
          </div>
          <div class="tweet-time">{{ tweet.tweetCreatedAt | fromNow }}</div>
        </div>
        <div class="tweet-counts">
          <p class="reply-count">
            {{ tweet.totalReplyCount }}<span> 回覆</span>
          </p>
          <p class="like-count">
            {{ tweet.totalLikeCount }}<span> 喜歡次數</span>
          </p>
        </div>
        <div class="tweet-actions">
          <font-awesome-icon
            data-toggle="modal"
            data-target="#replyModal"
            icon="fa-regular fa-comment"
          />
          <font-awesome-icon
            v-if="tweet.isLiked"
            @click.prevent.stop="deleteLike(tweet.TweetId)"
            icon="fa-regular fa-heart"
            class="fa-heart-active"
          />
          <font-awesome-icon
            v-else
            @click.prevent.stop="addLike(tweet.TweetId)"
            icon="fa-regular fa-heart"
          />
        </div>
        <!-- <hr class="hr1" /> -->
      </div>

      <ReplyCard
        v-for="reply in replylist"
        :key="reply.replyId"
        :initial-reply-from-reply-list="reply"
      />
    </div>

    <div class="right-content">
      <PopularList />
    </div>

    <ReplyModal :initial-tweet="tweet" @after-reply="handleAfterReply" />
  </div>
</template>

<script>
import moment from "moment";
import Navbar from "../components/Navbar.vue";
import ReplyCard from "./../components/ReplyCard";
import PopularList from "../components/PopularList.vue";
import ReplyModal from "../components/ReplyModal.vue";
import tweetsAPI from "./../apis/tweets";

export default {
  components: {
    Navbar,
    ReplyCard,
    PopularList,
    ReplyModal,
  },
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  data() {
    return {
      user: {
        Id: -1,
      },
      tweet: {},
      users: [],
      replylist: [],
    };
  },
  created() {
    this.fetchTweet();
    this.fetchTweetReplies();
  },
  methods: {
    // GET /tweets/:tweet_id
    async fetchTweet() {
      try {
        const tweetId = this.$route.params.tweet_id;
        const { data } = await tweetsAPI.getTweet(tweetId);

        this.tweet = data;
      } catch (error) {
        console.log(error);
      }
    },
    // GET /api/tweets/:tweet_id/replies
    async fetchTweetReplies() {
      try {
        const tweetId = this.$route.params.tweet_id;
        const { data } = await tweetsAPI.getTweetReplies(tweetId);
        console.log("getTweetReplies", data);
        this.replylist = data;
      } catch (error) {
        console.log("getTweetReplies", error);
      }
    },
    // POST /tweets/:tweet_id/replies
    async handleAfterReply(payload) {
      try {
        console.log("handleAfterReply", payload);
        const { tweetId, userId, comment } = payload;
        const { data } = await tweetsAPI.createTweetReply({
          tweetId,
          userId,
          comment,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log("createTweetReply", error);
      }
    },
    // POST /tweets/:id/like
    addLike() {
      this.tweet = {
        ...this.tweet,
        isLiked: true,
      };
    },
    deleteLike() {
      this.tweet = {
        ...this.tweet,
        isLiked: false,
      };
    },

    // async addLike(userId) {
    //   try {
    //     const { data } = await usersAPI.addLike({ restaurantId });

    //     if (data.status !== "success") {
    //       throw new Error(data.message);
    //     }

    //     this.restaurant = {
    //     ...this.restaurant,
    //     isLiked: true,
    //   };
    //   } catch (error) {
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法增加Like ，請稍後再試",
    //     });
    //   }
    // },
    // POST /tweets/:id/unlike
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
  border: 1px solid #e6ecf0;
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
/* twitter-section */
.tweet-section {
  width: 639px;
  /* min-height: 351px; */
  margin-bottom: 16px;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  flex-flow: column nowrap;
}
.tweet-content {
  margin: 16px 21px 0 16px;
  padding-bottom: 8px;
  display: flex;
  flex-flow: column nowrap;
}
.user-avatar-name-account {
  display: flex;
}
.user-avatar {
  width: 50px;
  height: 50px;
  display: block;
  object-fit: cover;
  margin-right: 8px;
  border-radius: 50%;
}
.user-name-account {
  display: flex;
  flex-flow: column nowrap;
}
.user-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: #171725;
}
.user-account {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #6c757d;
}
.tweet-description {
  margin: 10px 0 8px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: #171725;
}
.tweet-time {
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
}
.tweet-counts {
  height: 60px;
  margin: 0 21px 0 16px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  font-size: 19px;
  font-weight: 700;
  line-height: 23.16px;
  color: #171725;
}
.tweet-counts > p > span {
  font-weight: 500;
  line-height: 27.51px;
  color: #6c757d;
}
.reply-count {
  margin-right: 24px;
}
.tweet-actions {
  height: 60px;
  margin: 0 21px 0 16px;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #6c757d;
  cursor: pointer;
}
.fa-comment {
  margin-right: 128px;
}
.fa-heart-active {
  color: red;
}
</style>