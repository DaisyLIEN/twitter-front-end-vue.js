<!-- 測試component的地方 -->
<template>
  <div class="test">
    <div class="left">
      <Navbar />
    </div>
    <div class="middle">
      <h1>55</h1>
    </div>
    <div class="right">
      <PopularList />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularList from "../components/PopularList.vue";


export default {
  components: {
    Navbar,
    PopularList
  },
};
</script>