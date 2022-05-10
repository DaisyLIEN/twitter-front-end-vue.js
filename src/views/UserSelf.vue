<template>
  <!-- Navbar -->

  <div class="container">
    
    <UserSelfDetail />   
    
      <PostNavPills />    

    <!-- UserSelfPostList -->
    <!-- UserSelfReplyList -->
    <!-- UserSelfLikeList -->
  </div>
  <!-- PopularList -->

  <!-- UserSelfEditModal -->
</template>

<script>
import UserSelfDetail from "./../components/UserSelfDetail.vue";
import PostNavPills from "./../components/PostNavPills.vue";

export default {
  components: {
    UserSelfDetail,
    PostNavPills,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  outline: 1px solid blue;
  width: 640px;
}
</style>