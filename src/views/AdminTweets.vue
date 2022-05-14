<template>
  <div class="container">
    <!-- Navbar -->
    <div class="left-content">
      <Navbar />
    </div>

    <!-- middle-content -->
    <div class="middle-content">
      <header>
        <h4>推文清單</h4>
      </header>

      <div class="tweets">
        <div class="tweet" v-for="user in users" :key="user.id">
          <div class="tweet-img">
            <img :src="user.image" alt="" class="user-photo" />
          </div>
          <div class="tweet-right">
            <div class="tweet-right-top">
              <div class="user">
                <span class="user-name">{{ user.name }}</span>
                <span class="user-account"
                  >@{{ user.account }} ‧
                  {{ user.createdAt | fromNow }}小時</span
                >
              </div>
              <div class="delete-tweet">
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </div>
            </div>
            <div class="tweet-content">
              {{ user.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar";

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
    Navbar
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
  }
};
</script>

<style scoped>
.container {
  display: flex;
}

.middle-content {
  width: 67%;
  margin: 0 130px 0 24px;
  border-right: 1px solid #E6ECF0;
  border-left: 1px solid #E6ECF0;
}

header {
  border-bottom: 1px solid #E6ECF0;
}

h4 {
  margin: 24px 0 24px 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color:#171725;
}

.tweet {
  display: flex;
  border-bottom: 1px solid #E6ECF0;
  margin: 16px 0;
}

.user-photo {
  width: 50px;
  height: 50px;
  margin-left: 23.13px;
}

.tweet-right {
  margin-left: 8px;
}

.tweet-right-top {
  display: flex;
  justify-content: space-between;
}

.user-name {
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.user-account {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  color: #6C757D;
}

.fa-xmark {
  width: 24px;
  height: 24px;
  color: #696974;
}

.tweet-content {
  margin: 8px 0 16px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: left;
  color: #171725;
}
</style>