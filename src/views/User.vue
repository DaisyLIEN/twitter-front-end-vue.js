<template>
  <div class="container-user">
    <div class="left-content">
      <Navbar />
    </div>
    <div class="middle-content">
      <UserCard />
      <TweetNavPills />
      <TweetCard />
    </div>
    <div class="right-content">
      <PopularList />
    </div>
    <!-- <EditModal />       -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserCard from "../components/UserCard.vue";
import TweetNavPills from "../components/TweetNavPills.vue";
import TweetCard from "../components/TweetCard.vue";
import PopularList from "../components/PopularList.vue";
// import EditModal from "../components/EditModal.vue";

// const dummyData = {
//   profile: {
//     id: 1,
//     cover: "https://i.imgur.com/H3ADasp.png",
//     avatar: "",
//     userName: "user1",
//     userAccount: "user1",
//     description: "Hello, I am user1.",
//     followingsCount: 34,
//     followersCount: 59,
//     tweet: [
//       {
//         // replyName: "",
//         // replyAccount: '',
//         description: "This is my first tweet.",
//         replyCount: 13,
//         likeCount: 25,
//         updatedAt: "2019-06-22T09:00:43.000Z",
//       },
//       {
//         // replyName: "",
//         // replyAccount: '',
//         description: "This is my second tweet.",
//         replyCount: 13,
//         likeCount: 25,
//         updatedAt: "2019-06-23T09:00:43.000Z",
//       },
//       {
//         // replyName: "",
//         // replyAccount: '',
//         description: "This is my third tweet.",
//         replyCount: 13,
//         likeCount: 25,
//         updatedAt: "2019-06-24T09:00:43.000Z",
//       },
//     ],
//   },
// };

export default {
  components: {
    Navbar,
    UserCard,
    TweetNavPills,
    TweetCard,
    PopularList,
    // EditModal,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container-user {
  grid-template-columns: 130px 639px 273px 130px;
  grid-column-gap: 24px;
}
.left-content {
  grid-column: 1 / 2;
}
.middle-content {
  /* outline: 1px solid blue; */
  grid-column: 2 / 3;
  width: 639px;
  padding: 0;
}
.right-content {
  grid-column: 3 /4;
}
</style>