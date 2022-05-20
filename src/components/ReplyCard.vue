<template>
  <div class="reply">
    <div class="reply-img">
      <router-link :to="{ name: 'user', params: { id: reply.UserId } }">
        <img :src="reply.avatar | emptyAvatar" alt="" class="user-photo" />
      </router-link>
    </div>
    <div class="reply-right">
      <div class="user">
        <span class="user-name">{{ reply.userName }}</span>
        <span class="user-account"
          >@{{ reply.userAccount }} ·{{ reply.replyCreatedAt | fromNow }}</span
        >
      </div>
      <div class="tweet">
        <p class="tweet-reply">
          回覆 <span class="tweet-account"> @{{ reply.replyAccount }}</span>
        </p>
      </div>
      <div class="reply-content">
        {{ reply.comment }}
      </div>
      <div
        v-show="initialCurrentUserId !== initialParamsId"
        class="reply-actions"
      >
        <div class="reply-action">
          <font-awesome-icon icon="fa-regular fa-comment" />
          <!-- data-toggle="modal"
            data-target="#replyModal"
            @click="openReplyModal(reply.replyId)" -->
          <p class="reply-number">{{ reply.totalReplyCount }}</p>
        </div>
        <div class="reply-action">
          <!-- <font-awesome-icon
            v-if="reply.isLike"
            @click.prevent.stop="deleteLike(reply.replyId)"
            icon="fa-regular fa-heart"
            class="fa-heart-active"
          /> -->
          <font-awesome-icon icon="fa-regular fa-heart" />
          <!-- v-else
            @click.prevent.stop="addLike(reply.replyId)" -->
          <p class="like-number">{{ reply.totalLikeCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
// import usersAPI from "./../apis/users";
// import { Toast } from "./../utils/helpers";

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
    // from User、ReplyList
    initialCurrentUserId: {
      type: Number,
      required: true,
    },
    // from User
    initialReplyTweet: {
      type: Object,
      required: true,
    },
    initialParamsId: {
      type: Number,
      required: true,
    },
    // from ReplyList
    initialReply: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reply: {
        avatar: "",
        userName: "",
        userAccount: "",
        replyCreatedAt: "",
        replyAccount: "",
        comment: "",
        totalLikeCount: "",
        totalReplyCount: "",
        UserId: "",
        replyId: "",
        // isLike: "",
      },
    };
  },
  // created() {
  //   this.reply = this.initialReply;
  // },
  methods: {
    // async addLike(replyId) {
    //   try {
    //     const response = await usersAPI.addTweetLike(replyId);
    //     // console.log('response', response)
    //     const { data } = response;
    //     this.reply = {
    //       ...this.reply,
    //       isLike: data.isLike,
    //       totalLikeCount: data.totalLikeCount,
    //     };
    //   } catch (error) {
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法成功按讚，請稍後再試",
    //     });
    //   }
    // },
    // async deleteLike(replyId) {
    //   try {
    //     const response = await usersAPI.deleteTweetLike(replyId);
    //     // console.log('response', response)
    //     const { data } = response;
    //     this.reply = {
    //       ...this.reply,
    //       totalLikeCount: data.totalLikeCount,
    //       isLike: data.isLike,
    //     };
    //   } catch (error) {
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法收回按讚，請稍後再試",
    //     });
    //   }
    // },
    // 關於ReplyModal的
    // openReplyModal(replyId) {
    //   this.$emit("after-reply-modal-open", replyId);
    // },
  },
  watch: {
    initialReply(newValue) {
      this.reply = {
        ...this.reply,
        ...newValue,
      };
    },
    initialReplyTweet(newValue) {
      const {
        UserId,
        avatar,
        comment,
        replyAccount,
        replyCreateAt,
        replyId,
        totalLikeCount,
        totalReplyCount,
        userAccount,
        userName,
      } = newValue;
      this.reply = {
        ...this.reply,
        avatar,
        userName,
        userAccount,
        replyCreatedAt: replyCreateAt, // 後端要改
        replyAccount,
        comment,
        totalLikeCount,
        totalReplyCount,
        UserId,
        replyId,
        // isLike,
      };
    },
  },
};
</script>

<style scoped>
.reply {
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #e6ecf0;
  margin-bottom: 16px;
}

img {
  width: 50px;
  height: 50px;
  margin: 0 8px 0 24px;
  border-radius: 50%;
}

.reply-right {
  margin-right: 24px;
}

.user-name {
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.user-account,
.tweet {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
}

.tweet-account {
  color: #ff6600;
}

.tweet {
  margin-top: 8px;
}

.reply-content {
  margin: 8px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  color: #171725;
}

.reply-actions {
  display: flex;
  margin-bottom: 16px;
}

.reply-action {
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
</style>