<template>
  <div class="container">
    <!-- header -->
    <header>
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
      <h5>推文</h5>
    </header>

    <!-- FollowNavPills -->

    <!-- FollowCard -->
    <div class="tweets">
      <FollowCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import FollowCard from "./../components/FollowCard";

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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
      replyNum: 13,
      likeNum: 76,
      isFollow: false
    },
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
      replyNum: 13,
      likeNum: 76,
      isFollow: false
    },
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
      replyNum: 13,
      likeNum: 76,
      isFollow: false
    },
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
      replyNum: 13,
      likeNum: 76,
      isFollow: false
    },
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
      replyNum: 13,
      likeNum: 76,
      isFollow: false
    },
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
      replyNum: 13,
      likeNum: 76,
      isFollow: false
    },
    {
      id: 1,
      name: "Apple",
      account: "apple",
      image: "https://img.onl/Dwojms",
      createdAt: "2022-05-11T02:16:16.000Z",
      updatedAt: "2022-05-11T02:16:16.000Z",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. ",
      replyNum: 13,
      likeNum: 76,
      isFollow: false
    },
  ],
};

export default {
  components: {
    FollowCard,
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
  width: 46%;
  padding: 0px;
  border: 1px solid #e6ecf0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  /* border: 1px solid red; */
}

header {
  margin: 16px 0;
  display: flex;
  align-items: center;
}

.fa-arrow-left {
  margin: 0 16px 0 25px;
}

h5 {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #171725;
}
</style>