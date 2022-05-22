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
          <h4>推文</h4>
        </div>
      </header>

      <!-- 推文區域 -->
      <div class="tweet-section">
        <div class="tweet-content">
          <div class="user-avatar-name-account">
            <router-link :to="{ name: 'user', params: { id: tweet.UserId } }">
              <img
                :src="tweet.avatar ? tweet.avatar : avatarNone"
                alt=""
                class="user-avatar"
              />
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
            :data-target="`#replyModal${tweet.TweetId}`"
            icon="fa-regular fa-comment"
          />
          <font-awesome-icon
            v-if="tweet.isLike"
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

    <ReplyModal
      :reply-tweet="tweet"
      v-if="tweet.TweetId"
      @after-reply="tweet"
    />
  </div>
</template>

<script>
import moment from "moment";
import Navbar from "../components/Navbar.vue";
import ReplyCard from "./../components/ReplyCard.vue";
import PopularList from "../components/PopularList.vue";
import ReplyModal from "../components/ReplyModal.vue";
import tweetsAPI from "./../apis/tweets";
import avatarNone from "../assets/Avatar-none.png";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    Navbar,
    ReplyCard,
    PopularList,
    ReplyModal,
  },
  filters: {
    fromNow(datetime) {
      moment.locale("zh-tw", {
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (h, meridiem) {
          let hour = h;
          if (hour === 12) {
            hour = 0;
          }
          if (
            meridiem === "凌晨" ||
            meridiem === "早上" ||
            meridiem === "上午"
          ) {
            return hour;
          } else if (meridiem === "下午" || meridiem === "晚上") {
            return hour + 12;
          } else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
          }
        },
        meridiem: function (hour, minute) {
          const hm = hour * 100 + minute;
          if (hm < 600) {
            return "凌晨";
          } else if (hm < 900) {
            return "早上";
          } else if (hm < 1130) {
            return "上午";
          } else if (hm < 1230) {
            return "中午";
          } else if (hm < 1800) {
            return "下午";
          } else {
            return "晚上";
          }
        },
      });
      return moment(datetime).format("a HH:mm．YYYY年MM月DD日");
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

      avatarNone,
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
        console.log("fetchTweet", this.tweet);
      } catch (error) {
        console.log(error);
      }
    },
    // GET /api/tweets/:tweet_id/replies
    async fetchTweetReplies() {
      try {
        const tweetId = this.$route.params.tweet_id;
        const { data } = await tweetsAPI.getTweetReplies(tweetId);
        this.replylist = data;
      } catch (error) {
        console.log("getTweetReplies", error);
      }
    },
    // POST /tweets/:id/like
    async addLike(tweetId) {
      try {
        const response = await usersAPI.addTweetLike(tweetId);
        // console.log('response', response)
        const { data } = response;
        this.tweet = {
          ...this.tweet,
          isLike: data.isLike,
          totalLikeCount: data.totalLikeCount,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法成功按讚，請稍後再試",
        });
      }
    },
    // POST /tweets/:id/unlike
    async deleteLike(tweetId) {
      try {
        const response = await usersAPI.deleteTweetLike(tweetId);
        // console.log('response', response)
        const { data } = response;
        this.tweet = {
          ...this.tweet,
          totalLikeCount: data.totalLikeCount,
          isLike: data.isLike,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法收回按讚，請稍後再試",
        });
      }
    },
    renderCreateReply(payload) {
      const {
        replyAccount,
        comment,
        // isLike,
      } = payload;

      this.replyList.unshift({
        avatar: this.profile.avatar,
        userName: this.profile.name,
        userAccount: this.profile.account,
        replyCreatedAt: new Date(),
        replyAccount,
        comment,
        totalLikeCount: 0,
        totalReplyCount: 0,
        // isLike,
      });
    },
    // 關於ReplyModal的
    // handleReplyModal(replyId) {
    //   const replyModalReply = this.replyList.find(
    //     (reply) => reply.replyId === replyId
    //   );
    //   this.replyModalReply = replyModalReply;
    // },
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
  word-break: break-all;
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