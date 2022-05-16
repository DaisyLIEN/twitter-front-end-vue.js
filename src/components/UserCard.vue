<template>
  <div class="wrapper">
    <header>
      <router-link to="#">
        <img
          class="vector-primary"
          src="https://i.imgur.com/PYbiwrX.png"
          alt=""
        />
      </router-link>
      <div class="title">
        <h5>{{ profile.name }}</h5>
        <p>{{ profile.totalTweetCount }} 推文</p>
      </div>
    </header>
    <div class="profile">
      <img class="cover-image" :src="profile.cover" alt="" />
      <img class="avatar" :src="profile.avatar" alt="" />
      <div class="user-item-edit">
        <button class="btn-edit" data-toggle="modal" data-target="#editModal">
          編輯個人資料
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
          <a class="following" href="#"
            >{{ profile.followingsCount }}個<span>追隨中</span></a
          >
          <a class="follower" href="#"
            >{{ profile.followersCount }}位<span>追隨者</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUserProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialUserProfile,
    };
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
.btn-edit {
  position: absolute;
  top: 216px;
  right: 16px;
  background: #ffffff;
  border: 1px solid #ff6600;
  border-radius: 50px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #ff6600;
  width: 128px;
  height: 40px;
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
</style>