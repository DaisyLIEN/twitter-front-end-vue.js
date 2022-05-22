<template>
  <div class="container">
    <!-- Navbar -->
    <div class="left-content">
      <AdminNavbar />
    </div>

    <!-- right-content -->
    <div class="right-content scrollbar">
      <header>
        <h4>推文清單</h4>
      </header>
      <Spinner v-if="isLoading" />
      <div v-else>
        <div class="tweets">
          <div class="tweet" v-for="user in users" :key="user.id">
            <div class="tweet-img">
              <router-link :to="{ name: 'user', params: { id: user.TweetId } }">
                <img
                  :src="user.avatar | emptyAvatar"
                  alt=""
                  class="user-photo"
                />
              </router-link>
            </div>
            <div class="tweet-right">
              <div class="tweet-right-top">
                <div class="user">
                  <router-link
                    :to="{ name: 'user', params: { id: user.UserId } }"
                  >
                    <span class="user-name">{{ user.name }}</span>
                    <span class="user-account">@{{ user.account }} ‧ </span>
                  </router-link>
                  <router-link
                    :to="{
                      name: 'replylist',
                      params: { tweet_id: user.TweetId },
                    }"
                  >
                    <span class="tweet-time">{{
                      user.tweetCreatedAt | fromNow
                    }}</span>
                  </router-link>
                </div>

                <div class="delete-tweet">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    @click="deleteTweet(user.TweetId)"
                  />
                </div>
              </div>
              <div class="tweet-content">
                <router-link
                  :to="{
                    name: 'replylist',
                    params: { tweet_id: user.TweetId },
                  }"
                >
                  <span class="tweet-content">{{ user.description }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import AdminNavbar from "./../components/AdminNavbar";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import moment from "moment";
import Spinner from "./../components/Spinner";

export default {
  mixins: [emptyImageFilter],
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  components: {
    AdminNavbar,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
      continue: false,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const response = await adminAPI.getAdminTweets();
        const { data } = response;
        console.log("data", data);

        if (response.status !== 200) {
          throw new Error(data.statusText);
        }

        this.users = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得後台推文資料，請稍後再試",
        });
      }
    },
    async deleteTweet(tweetId) {
      try {
        if (!this.continue) {
          this.continue = true;
          const deleteResponse = await adminAPI.deleteTweet({ tweetId });
          console.log("deleteResponse", deleteResponse);
          this.fetchUsers();
          this.continue = false;
        }
      } catch (error) {
        this.continue = false;

        Toast.fire({
          icon: "error",
          title: "無法刪除後台推文資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 130px 178px 24px 938px;
  /* grid-gap: 24px; */
  padding: 0;
  margin: 0;
  /* border: 1px solid green; */
}

.left-content {
  grid-column: 2/3;
  /* border: 1px solid red; */
}

.right-content {
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
  grid-column: 4/5;
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
.user-photo {
  border-radius: 25px;
}
.user-name {
  margin-right: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.user-account,
.tweet-time {
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

/* 去除底線 */
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
