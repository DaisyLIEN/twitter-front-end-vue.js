<template>
  <div class="wrapper">
    <header>
      <img
        @click="$router.back()"
        class="vector-primary"
        src="https://i.imgur.com/PYbiwrX.png"
        alt=""
      />
      <div class="title">
        <h5>{{ profile.name }}</h5>
        <p>{{ profile.tweetCount }} 推文</p>
      </div>
    </header>
    <div class="profile">
      <img
        class="cover-image"
        :src="profile.cover ? profile.cover : coverNone"
        alt=""
      />
      <img
        class="avatar"
        :src="profile.avatar ? profile.avatar : avatarNone"
        alt=""
      />
      <div class="btn-user" v-if="initialCurrentUserId === initialParamsId">
        <button class="btn-edit" data-toggle="modal" data-target="#editModal">
          編輯個人資料
        </button>
      </div>
      <div class="btn-other-user" v-else>
        <img
          src="https://i.imgur.com/uag9cu3.png"
          alt=""
          class="icon-to-mail"
        />
        <img
          src="https://i.imgur.com/mjUki2z.png"
          alt=""
          class="icon-describe"
        />
        <button
          v-if="!otherUserIsFollowed"
          type="button"
          class="btn-follow"
          @click.stop.prevent="addFollow(otherUserId)"
        >
          跟隨
        </button>
        <button
          v-else
          type="button"
          class="btn-following"
          @click.stop.prevent="deleteFollow(otherUserId)"
        >
          正在跟隨
        </button>
      </div>

      <div class="info">
        <div class="names">
          <h5 class="user-name">{{ profile.name }}</h5>
          <p class="user-account">@{{ profile.account }}</p>
        </div>
        <p class="introduction">
          {{ profile.introduction }}
        </p>
        <div class="follow-ship">
          <router-link
            class="following"
            :to="{ name: 'following', params: { id: initialParamsId } }"
            >{{ profile.followingsCount }}個<span>追隨中</span></router-link
          >
          <router-link
            class="follower"
            :to="{ name: 'follower', params: { id: initialParamsId } }"
            >{{ profile.followersCount }}位<span>追隨者</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//導入沒avatar及cover時的替換照片
import avatarNone from "../assets/Avatar-none.png";
import coverNone from "../assets/Cover-none.jpg";
import tweetsAPI from "./../apis/tweets";
import usersAPI from "./../apis/users";
// import { Toast } from "./../utils/helpers";

export default {
  props: {
    initialUserProfile: {
      type: Object,
      required: true,
    },
    initialCurrentUserId: {
      type: Number,
      required: true,
    },
    initialParamsId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialUserProfile,
      avatarNone,
      coverNone,
      otherUserId: -1,
      otherUserIsFollowed: false,
    };
  },
  created() {
    this.otherUserId = this.initialParamsId;
    this.fetchFollowersTweets(this.otherUserId);
  },
  methods: {
    // GET /api/users/:id/followers
    async fetchFollowersTweets(otherUserId) {
      try {
        const { data } = await tweetsAPI.getFollowersTweets(otherUserId);

        this.otherUserIsFollowed = data.some(
          (data_user) => data_user.followerId === this.initialCurrentUserId
        );

        console.log("fetchFollowers", data);
      } catch (error) {
        console.log("get this.otherUserIsFollowed", error);
      }
    },
    // 追隨：POST /followships?id=2
    async addFollow(otherUserId) {
      try {
        const response = await usersAPI.addFollow({ id: otherUserId });

        console.log("addFollow", response);
      } catch (error) {
        console.log(error);
      }
      this.otherUserIsFollowed = true;
      this.fetchFollowersTweets(this.otherUserId);
    },
    // 取消追隨：DETELE /followships/:followingId
    async deleteFollow(otherUserId) {
      try {
        const response = await usersAPI.removeFollow(otherUserId);

        console.log("removeFollow", response);
      } catch (error) {
        console.log(error);
      }
      this.otherUserIsFollowed = false;
      this.fetchFollowersTweets(this.otherUserId);
    },
  },
  watch: {
    initialUserProfile(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 31px;
}
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
.profile {
  position: relative;
}
.cover-image {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.avatar {
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  position: absolute;
  left: 16px;
  top: 124px;
  object-fit: cover;
}
.btn-user,
.btn-other-user {
  position: absolute;
  top: 216px;
  right: 16px;
}
.btn-edit {
  background: #ffffff;
  border: 1px solid #ff6600;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ff6600;
  width: 128px;
  height: 40px;
  outline: none;
}
.info {
  margin-top: 72px;
  margin-left: 16px;
  font-size: 14px;
  line-height: 22px;
}
.info .user-account,
.follow-ship > a > span {
  color: #6c757d;
}
.introduction,
.follow-ship a {
  text-decoration: none;
  color: #171725;
}
.introduction {
  margin-top: 6px;
  margin-bottom: 8px;
}
.following {
  margin-right: 20px;
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
.btn-following {
  width: 96px;
  height: 40px;
  background-color: #ff6600;
  border: 1px solid #ff6600;
  border-radius: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  outline: none;
}
.btn-other-user {
  display: flex;
}
.icon-to-mail,
.icon-describe {
  width: 40px;
  height: 40px;
  margin-right: 16px;
}
</style>