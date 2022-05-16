<!-- 測試component的地方 -->
<template>
  <div>
    <Navbar />
    <PopularList />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularList from "../components/PopularList.vue";

export default {
  components: {
    Navbar,
    PopularList,
  },
};
</script>