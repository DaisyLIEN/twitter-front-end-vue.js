<template>
  <div class="tweet">
    <div class="tweet-img">
      <router-link :to="{ name: 'user', params: { id: user.id } }">
        <img :src="user.avatar" alt="" class="user-photo" />
      </router-link>
    </div>
    <div class="tweet-right">
      <div class="user">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <span class="user-name">{{ user.name }}</span>
          <span class="user-account">@{{ user.account }} ‧ </span>
        </router-link>
        <router-link :to="{ name: 'replylist', params: { tweet_id: user.id } }">
          <span class="tweet-time">{{ user.createdAt | fromNow }}</span>
        </router-link>
      </div>

      <div class="tweet-content">
        <router-link :to="{ name: 'replylist', params: { tweet_id: user.id } }">
          <span class="tweet-content">{{ user.description }}</span>
        </router-link>
      </div>

      <div class="tweet-actions">
        <div class="tweet-action">
          <font-awesome-icon icon="fa-regular fa-comment" />
          <p class="reply-number">{{ user.replyNum }}</p>
        </div>
        <div class="tweet-action">
          <font-awesome-icon icon="fa-regular fa-heart"
          v-if="user.isLike"
           class="active"
          @click.stop.prevent="deleteLike(user.id)"
          />
          <font-awesome-icon icon="fa-regular fa-heart" 
          v-else         
          @click.stop.prevent="addLike(user.id)"
          />
          <p class="like-number">{{ user.likeNum }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import moment from "moment";

export default {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    async addLike(tweetId) {
      try {
        const response = await usersAPI.addLike(tweetId)
        console.log('response', response)

        const {data} =response
        console.log('data', data)

        this.user = {
          ...this.user,
          likeNum: data[0].likeNum,
          isLike: data[0].isLike
        }
        console.log('this.user', this.user)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteLike(tweetId) {
      try {
        const response = await usersAPI.deleteLike(tweetId)
        console.log('response', response)

        const {data} =response
        console.log('data', data)
        
        this.user = {
          ...this.user,
          likeNum: data[tweetId].likeNum,
          isLike: data[tweetId].isLike
        }
        console.log('this.user', this.user)
      } catch (error) {
        console.log(error)
      }
    }
  }
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