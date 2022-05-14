<template>
  <div class="user-container">
    <div class="left-content">
      <Navbar />
    </div>

    <div class="right-content">
      <header>
        <h4>使用者列表</h4>
      </header>

      <div class="admin-user-cards">
        <AdminUserCard v-for="user in users" :key="user.id" :initial-user="user"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import AdminUserCard from "./../components/AdminUserCard";

const dummyData = {
  users: [
    {
      id: 1,
      name: "Apple",
      account: "apple",
      avatar: "https://img.onl/d0RNIH",
      coverImage:"https://i.imgur.com/Y20gp8R.png",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. Suspendisse blandit libero sit amet nisl blandit, vitae fermentum leo tincidunt.",
      replyNum: 13,
      likeNum: 76,
      foiiowingNum: 34,
      followerNum: 59
    },
    {
      id: 2,
      name: "Jane Cathy",
      account: "jamjane1999",
      avatar: "https://i.imgur.com/sFuDF3M.png",
      coverImage:"https://i.imgur.com/Y20gp8R.png",
      createdAt: "2022-04-25T02:16:16.000Z",
      updatedAt: "2022-04-25T02:16:16.000Z",
      content:
        "Cras blandit libero nibh, nec scelerisque lorem condimentum sit amet. Nam sapien eros, ultricies sit amet arcu non, iaculis venenatis nulla. Integer efficitur varius neque, viverra vestibulum ligula. Duis libero odio, convallis a elit ac, fermentum luctus velit.",
      replyNum: 10,
      likeNum: 80,
      foiiowingNum: 78,
      followerNum: 69
    },
    {
      id: 3,
      name: "Cheery",
      account: "cheerysweet",
      avatar: "https://i.imgur.com/sFuDF3M.png",
      coverImage:"https://i.imgur.com/Y20gp8R.png",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Integer odio tellus, viverra eget vestibulum vitae, auctor sed magna. Sed sed gravida diam. Praesent volutpat tincidunt risus a sagittis. Vestibulum quis purus venenatis, sodales justo eu, faucibus tortor.",
      replyNum: 17,
      likeNum: 55,
      foiiowingNum: 34,
      followerNum: 59
    },
    {
      id: 4,
      name: "Dana",
      account: "danagirl",
      avatar: "https://i.imgur.com/sFuDF3M.png",
      coverImage:"https://i.imgur.com/Y20gp8R.png",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, orci imperdiet condimentum sagittis, nisl enim commodo sem, nec ornare augue libero ut purus.",
      replyNum: 10,
      likeNum: 88,
      foiiowingNum: 34,
      followerNum: 59
    },
    {
      id: 5,
      name: "Gorden",
      account: "gordenball2022",
      avatar: "https://i.imgur.com/sFuDF3M.png",
      coverImage:"https://i.imgur.com/Y20gp8R.png",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Nullam eu ante nisi. In convallis non augue ac rutrum. Fusce eu ullamcorper quam. Duis at aliquet tortor.",
      replyNum: 13,
      likeNum: 76,
      foiiowingNum: 34,
      followerNum: 59
    },
    {
      id: 6,
      name: "LuLu",
      account: "lulupig",
      avatar: "https://i.imgur.com/sFuDF3M.png",
      coverImage:"https://i.imgur.com/Y20gp8R.png",
      createdAt: "2022-04-19T02:16:16.000Z",
      updatedAt: "2022-04-19T02:16:16.000Z",
      content:
        "Integer ut pulvinar augue, ac molestie diam. Aliquam sagittis luctus elit, vitae auctor enim euismod nec.",
      replyNum: 17,
      likeNum: 68,
      foiiowingNum: 34,
      followerNum: 59
    },
  ],
};

export default {
  components: {
    Navbar,
    AdminUserCard
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
}
</script>

<style scoped>
.user-container {
  display: flex;
  padding: 0;
  margin: 0;
}

.left-content {
  width: 178px;
  border: 1px solid red;
}

.right-content {
  /* width: 1176px; */
  /* width: 77%; */
  margin-left: 24px;
  border-left: 1px solid #E6ECF0;
}

header {
  border-bottom: 1px solid #E6ECF0;
  margin-top: 24px;
}

h4 {
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color:#171725;
  margin: 0 0 24px 24px;
}

.admin-user-cards {
  display: flex;
  flex-wrap: wrap;
  margin: 16px 8px 0 0;
}
</style>
