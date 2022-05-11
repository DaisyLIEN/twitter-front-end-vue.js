<template>
  <!-- Navbar -->

  <div class="container">
    
    <UserCard />   
    
      <TweetNavPills />    

    <!-- UserSelfPostList -->
    <!-- UserSelfReplyList -->
    <!-- UserSelfLikeList -->
  </div>
  <!-- PopularList -->

  <!-- UserSelfEditModal -->
</template>

<script>
import UserCard from "../components/UserCard.vue";
import TweetNavPills from "../components/TweetNavPills.vue";

export default {
  components: {
    UserCard,
    TweetNavPills,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  outline: 1px solid blue;
  width: 639px;
  padding: 0;  
}
</style>