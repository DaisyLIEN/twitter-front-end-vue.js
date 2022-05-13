<template>
  <!-- Navbar -->

  <div class="container">
    <UserCard />

    <TweetNavPills />

    <TweetCard />

    <EditModal />    

    <!-- UserSelfReplyList -->
    <!-- UserSelfLikeList -->
  </div>
  <!-- PopularList -->

  <!-- UserSelfEditModal -->
</template>

<script>
import UserCard from "../components/UserCard.vue";
import TweetNavPills from "../components/TweetNavPills.vue";
import TweetCard from "../components/TweetCard.vue";
import EditModal from "../components/EditModal.vue";

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
    UserCard,
    TweetNavPills,
    TweetCard,
    EditModal    
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  /* outline: 1px solid blue; */
  width: 639px;
  padding: 0;
}
</style>