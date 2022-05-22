<template>
  <div class="user-container">
    <div class="left-content">
      <AdminNavbar />
    </div>

    <div class="right-content scrollbar">
      <header>
        <h4>使用者列表</h4>
      </header>

      <Spinner v-if="isLoading" />
      <div v-else>
        <div class="admin-user-cards">
          <AdminUserCard
            v-for="user in users"
            :key="user.id"
            :initial-user="user"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar";
import AdminUserCard from "./../components/AdminUserCard";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";

export default {
  components: {
    AdminNavbar,
    AdminUserCard,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const response = await adminAPI.getAdminUsers();
        console.log("response", response);

        const { data, statusText } = response;

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.users = data;
        console.log("this.users", this.users);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);

        Toast.fire({
          icon: "error",
          title: "無法取得後台使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.user-container {
  display: grid;
  grid-template-columns: 130px 178px 24px 1076px;
  /* border: 1px solid green; */
}

.left-content {
  width: 178px;
  grid-column: 2/3;
  /* border: 1px solid red; */
}

.right-content {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  grid-column: 4/5;
  /* border: 1px solid blue; */
}

header {
  border-bottom: 1px solid #e6ecf0;
  margin-top: 24px;
}

h4 {
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: #171725;
  margin: 0 0 24px 24px;
}

.admin-user-cards {
  display: flex;
  flex-wrap: wrap;
  margin: 16px 8px 0 0;
}
</style>
