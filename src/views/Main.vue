<template>
  <div class="container">
    <Navbar />

    <div class="middle-content">
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

      <!-- TweetModal -->
      <TweetModal />
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import TweetCard from "./../components/TweetCard";
import TweetModal from "./../components/TweetModal";

const dummyData = {
  users: [
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. Suspendisse blandit libero sit amet nisl blandit, vitae fermentum leo tincidunt.",
      replyNum: 13,
      likeNum: 76,
    },
    {
      id: 2,
      name: "Jane Cathy",
      account: "jamjane1999",
      image: "https://img.onl/KW4sJV",
      createdAt: "2022-04-25T02:16:16.000Z",
      updatedAt: "2022-04-25T02:16:16.000Z",
      content:
        "Cras blandit libero nibh, nec scelerisque lorem condimentum sit amet. Nam sapien eros, ultricies sit amet arcu non, iaculis venenatis nulla. Integer efficitur varius neque, viverra vestibulum ligula. Duis libero odio, convallis a elit ac, fermentum luctus velit.",
      replyNum: 10,
      likeNum: 80,
    },
    {
      id: 3,
      name: "Cheery",
      account: "cheerysweet",
      image: "https://img.onl/H5eDF2",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Integer odio tellus, viverra eget vestibulum vitae, auctor sed magna. Sed sed gravida diam. Praesent volutpat tincidunt risus a sagittis. Vestibulum quis purus venenatis, sodales justo eu, faucibus tortor.",
      replyNum: 17,
      likeNum: 55,
    },
    {
      id: 4,
      name: "Dana",
      account: "danagirl",
      image: "https://img.onl/HM4fxm",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, orci imperdiet condimentum sagittis, nisl enim commodo sem, nec ornare augue libero ut purus.",
      replyNum: 10,
      likeNum: 88,
    },
    {
      id: 5,
      name: "Gorden",
      account: "gordenball2022",
      image: "https://img.onl/25RyTE",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Nullam eu ante nisi. In convallis non augue ac rutrum. Fusce eu ullamcorper quam. Duis at aliquet tortor.",
      replyNum: 13,
      likeNum: 76,
    },
    {
      id: 6,
      name: "LuLu",
      account: "lulupig",
      image: "https://img.onl/1XTVZ",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Integer ut pulvinar augue, ac molestie diam. Aliquam sagittis luctus elit, vitae auctor enim euismod nec.",
      replyNum: 17,
      likeNum: 68,
    },
  ],
};

export default {
  components: {
    Navbar,
    TweetCard,
    TweetModal,
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
.container {
  display: flex;
}

h4 {
  margin: 24px 0 24px 24px;
}

.middle-content {
  width: 46%;
  padding: 0px;
  border: 1px solid #e6ecf0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
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
  display: flex;
}

.photo {
  width: 50px;
  height: 50px;
  margin-left: 25.19px;
}

.new-post {
  /* margin: 0 auto; */
  margin-left: 8px;
  border: none;
  outline: medium;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #6c757d;
}

.btn {
  display: flex;
  justify-content: flex-end;
  margin: 14px 25.19px 6px 0;
}

.btn-submit {
  width: 64px;
  height: 40px;
  background-color: #ff6600;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  outline: none; /*點擊不會出現黑框*/
}

.hr2 {
  border: 10px solid #e6ecf0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px 0 16px 0;
  background-color: #e6ecf0;
}

/* .tweets {
  border: 1px solid green;
} */
</style>