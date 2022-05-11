<template>
  <div class="container">
    <h4 class="title">首頁</h4>
    <hr class="hr1" />
    <!-- post -->
    <div class="post">
      <div class="posting">
        <img class="photo" src="https://img.onl/d0RNIH" alt="" />
        <input
          type="text"
          class="new-post"
          autofocus
          placeholder="有什麼新鮮事？"
        />
      </div>
      <div class="btn">
        <button class="btn-submit" type="submit">推文</button>
      </div>
      <hr class="hr2" />
    </div>

    <!-- tweets -->
    <div class="tweets">
      <TweetCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import TweetCard from "./../components/TweetCard";

const dummyData = {
  users: [
    {
      id: 1,
      name: "Apple",
      account: "apple",
      createdAt: 3,
      image: "https://img.onl/Dwojms",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. Suspendisse blandit libero sit amet nisl blandit, vitae fermentum leo tincidunt.",
      replyNum: 13,
      likeNum: 76,
    },
    {
      id: 2,
      name: "Jane Cathy",
      account: "jamjane1999",
      createdAt: 4,
      image: "https://img.onl/KW4sJV",
      content:
        "Cras blandit libero nibh, nec scelerisque lorem condimentum sit amet. Nam sapien eros, ultricies sit amet arcu non, iaculis venenatis nulla. Integer efficitur varius neque, viverra vestibulum ligula. Duis libero odio, convallis a elit ac, fermentum luctus velit.",
      replyNum: 10,
      likeNum: 80,
    },
    {
      id: 3,
      name: "Cheery",
      account: "cheerysweet",
      createdAt: 5,
      image: "https://img.onl/H5eDF2",
      content:
        "Integer odio tellus, viverra eget vestibulum vitae, auctor sed magna. Sed sed gravida diam. Praesent volutpat tincidunt risus a sagittis. Vestibulum quis purus venenatis, sodales justo eu, faucibus tortor.",
      replyNum: 17,
      likeNum: 55,
    },
    {
      id: 4,
      name: "Dana",
      account: "danagirl",
      createdAt: 6,
      image: "https://img.onl/HM4fxm",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, orci imperdiet condimentum sagittis, nisl enim commodo sem, nec ornare augue libero ut purus.",
      replyNum: 10,
      likeNum: 88,
    },
    {
      id: 5,
      name: "Gorden",
      account: "gordenball2022",
      createdAt: 4,
      image: "https://img.onl/25RyTE",
      content:
        "Nullam eu ante nisi. In convallis non augue ac rutrum. Fusce eu ullamcorper quam. Duis at aliquet tortor.",
      replyNum: 13,
      likeNum: 76,
    },
    {
      id: 6,
      name: "LuLu",
      account: "lulupig",
      createdAt: 8,
      image: "https://img.onl/1XTVZ",
      content:
        "Integer ut pulvinar augue, ac molestie diam. Aliquam sagittis luctus elit, vitae auctor enim euismod nec.",
      replyNum: 17,
      likeNum: 68,
    },
  ],
};

export default {
  components: {
    TweetCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
};
</script>

<style scoped>
/* 引入字體 */
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&display=swap'); */

/* #app {
  font-family: 'Noto Sans TC', sans-serif;
} */

/* css reset */
/* h1 {
  font-weight: bold;
  font-size: 68px;
}
h2 {
  font-weight: bold;
  font-size: 42px;
}
h3 {
  font-weight: medium;
  font-size: 28px;
}
h4 {
  font-weight: medium;
  font-size: 24px;
}
h5 {
  font-weight: medium;
  font-size: 18px;
}
p, span {
  font-weight: 16px;
} */

.container {
  width: 46%;
  /* border: 1px solid red; */
}

.title {
  margin-top: 24px;
}

.hr1 {
  height: 1px;
  margin: 24px 0px 16px 0px;
}

/* .post {
  border: 1px solid blue;
} */

.posting {
  margin-bottom: 14px;
  display: flex;
  /* flex-wrap: wrap; */
}

.photo {
  width: 50px;
  height: 50px;
}

.new-post {
  /* margin: 0 auto; */
  margin-left: 8px;
  border: none;
  outline: medium;
}

.btn {
  display: flex;
  justify-content: flex-end;
}

.btn-submit {
  width: 64px;
  height: 40px;
  background-color: #ff6600;
  border: none;
  border-radius: 50px;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.hr2 {
  border: 10px solid #e6ecf0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px 0 16px 0;
}

.tweets {
  /* border: 1px solid green; */
}
</style>