<template>
  <div class="container">
    <!-- Navbar -->
    <div class="left-content">
      <AdminNavbar />
    </div>

    <!-- middle-content -->
    <div class="middle-content">
      <header>
        <h4>推文清單</h4>
      </header>

      <div class="tweets">
        <div class="tweet" v-for="user in users" :key="user.id">
          <div class="tweet-img">
            <img :src="user.avatar" alt="" class="user-photo" />
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
              {{ user.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar";
import adminAPI from './../apis/admin'
import {Toast} from './../utils/helpers'

export default {
  components: {
    AdminNavbar,
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
    async fetchUsers() {
      try {
        const response = await adminAPI.getAdminTweets()
        console.log('response', response)

        const {data} = response

        if(data.status !== 'success') {
          throw new Error(data.statusText)
        }

        this.users = data.data;
      } catch (error) {
        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得後台推文資料，請稍後再試'
        })
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 178px 938px;
  grid-gap: 24px;
  padding: 0;
  /* border: 1px solid green; */
}

.left-content {
  grid-column: 1/2;
  /* border: 1px solid red; */
}

.middle-content {
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  grid-column: 2/3;
  /* border: 1px solid blue; */
}

header {
  border-bottom: 1px solid #e6ecf0;
}

h4 {
  margin: 24px 0 24px 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: #171725;
}

.tweet {
  display: flex;
  border-bottom: 1px solid #e6ecf0;
  margin: 16px 0;
}

.user-photo {
  width: 50px;
  height: 50px;
  margin-left: 23.13px;
}

.tweet-right {
  margin-left: 8px;
  width: 855px;
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
  color: #6c757d;
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
