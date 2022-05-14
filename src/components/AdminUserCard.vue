<template>
  <div class="wrapper-admin-user-card">
    <img class="cover-image" :src="user.coverImage" alt="" />
    <img class="avatar" :src="user.avatar" alt="" />
    <div class="info">
      <div class="names">
        <p class="user-name">{{ user.name }}</p>
        <p class="user-account">@{{ user.account }}</p>
      </div>
      <div class="counts">
        <img class="tweet-count" src="https://i.imgur.com/41M4NLK.png" alt="" />
        <span>1.5k</span>
        <img class="like-count" src="https://i.imgur.com/dQXJ6Mp.png" alt="" />
        <span>20k</span>
      </div>
      <div class="follow-ship">
        <span>{{ user.foiiowingNum }}個</span><span>追隨中</span>
        <span>{{ user.followerNum }}位</span><span>追隨者</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
.wrapper-admin-user-card {
  position: relative;
  width: 249px;
  height: 314px;
  border-radius: 10px;
  margin: 0 0 16px 16px;
}
.cover-image {
  display: block;
  width: 100%;
  height: 140px;
  object-fit: cover;
}
.avatar {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 64px;
  left: 72px;
  border: 4px solid #ffffff;
  border-radius: 50px;
}
.info {
  margin-top: 32px;
  height: 118px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
}
.user-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: #171725;
}
.user-account {
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
}
.counts {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.tweet-count,
.like-count {
  width: 24px;
  height: 24px;
  margin-right: 9px;
}
.like-count {
  margin-left: 18px;
}
.info .user-account,
.follow-ship :nth-child(2),
.follow-ship :nth-child(4) {
  color: #6c757d;
}
.follow-ship :nth-child(2) {
  margin-right: 8px;
}
</style>