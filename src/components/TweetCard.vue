<template>
  <div class="tweet">
    <div class="tweet-img">
      <router-link :to="{ name: 'user', params: { id: tweet.UserId } }">
        <img
          :src="tweet.avatar ? tweet.avatar : avatarNone"
          alt=""
          class="user-photo"
        />
      </router-link>
    </div>
    <div class="tweet-right">
      <div class="user">
        <router-link :to="{ name: 'user', params: { id: tweet.UserId } }">
          <span class="user-name">{{ tweet.name }}</span>
          <span class="user-account">@{{ tweet.account }} ‧ </span>
        </router-link>
        <router-link
          :to="{ name: 'replylist', params: { tweet_id: tweet.TweetId } }"
        >
          <span class="tweet-time">{{ tweet.tweetCreatedAt | fromNow }}</span>
        </router-link>
      </div>

      <div class="tweet-content">
        <router-link
          :to="{ name: 'replylist', params: { tweet_id: tweet.TweetId } }"
        >
          <span class="tweet-content">{{ tweet.description }}</span>
        </router-link>
      </div>

      <div class="tweet-actions">
        <div class="tweet-action">
          <font-awesome-icon
            data-toggle="modal"
            :data-target="`#replyModal${tweet.TweetId}`"
            icon="fa-regular fa-comment"
          />
          <p class="reply-number">{{ totalReplyCount }}</p>
        </div>
        <div class="tweet-action" :class="{ active: isLike }">
          <font-awesome-icon
            icon="fa-regular fa-heart"
            v-if="isLike"
            class="active"
            @click.stop.prevent="deleteLike(tweet.TweetId)"
          />
          <font-awesome-icon
            icon="fa-regular fa-heart"
            v-else
            @click.stop.prevent="addLike(tweet.TweetId)"
          />
          <p class="like-number">{{ totalLikeCount }}</p>
        </div>
      </div>
    </div>
    <ReplyModal :initial-tweet="initialTweet" @after-reply="afterReply" />
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import ReplyModal from "../components/ReplyModal.vue";
import moment from "moment";
import avatarNone from "../assets/Avatar-none.png";

export default {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  components: {
    ReplyModal,
  },
  props: {
    initialTweet: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      continue: false,
      tweet: this.initialTweet,

      //點及愛心後先透過前端method將like數及是否被按讚的效果渲染在畫面上
      isLike: this.initialTweet.isLike,
      totalReplyCount: this.initialTweet.totalReplyCount,
      totalLikeCount: this.initialTweet.totalLikeCount,

      avatarNone,
    };
  },
  watch: {
    initialTweet(newValue) {
      this.tweet = {
        ...this.tweet,
        ...newValue,
      };
    },
  },
  methods: {
    async addLike(tweetId) {
      try {
        if (!this.continue) {
          this.continue = true;
          const response = await usersAPI.addTweetLike(tweetId);
          if (response.statusText !== "OK") {
            throw new Error(response.statusText);
          }
          console.log("addLikeResponse", response);
          const { data } = response;
          this.isLike = data.isLike;
          this.totalLikeCount = data.totalLikeCount;
          this.continue = false;
        }
      } catch (error) {
        this.continue = false;
        console.log(error);
      }
    },
    async deleteLike(tweetId) {
      try {
        if (!this.continue) {
          this.continue = true;
          const response = await usersAPI.deleteTweetLike(tweetId);
          if (response.statusText !== "OK") {
            throw new Error(response.statusText);
          }
          console.log("deleteLikeResponse", response);
          const { data } = response;
          this.isLike = data.isLike;
          this.totalLikeCount = data.totalLikeCount;
          this.continue = false;
        }
      } catch (error) {
        this.continue = false;
        console.log(error);
      }
    },
    afterReply() {
      //回覆成功時先讓前端頁面數字改變
      this.totalReplyCount += 1;
    },
  },
};
</script>

<style scoped>
/* 去除底線 */
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

.tweet {
  display: flex;
  border-bottom: 1px solid #e6ecf0;
  padding: 16px 0;
}

img {
  width: 50px;
  height: 50px;
  margin: 0 8px 0 24px;
}

.tweet-right {
  width: calc(100% - 106px);
  display: flex;
  flex-direction: column;
}

.user-name {
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.user-photo{
  border-radius: 25px;
}
.user-account,
.tweet-time {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  color: #6c757d;
}

.tweet-content {
  margin: 8px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  color: #171725;
  word-break: break-all;
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

.fa-heart:hover {
  color: #ff1493;
}

.active {
  color: #ff1493;
}
</style>