<template>
  <div class="container">
    <!-- Navbar -->
    <div class="left-content">
      <Navbar />
    </div>

    <div class="middle-content">
      <h4 class="title">首頁</h4>
      <hr class="hr1" />
      <!-- post -->
      <div class="post">
        <div class="posting">
          <img class="photo" src="https://img.onl/d0RNIH" alt="" />
          <textarea
            v-model="newTweet2"
            :style="{ height: height }"
            name="new-post"
            class="new-post"
            maxlength="140"
            autofocus
            placeholder="有什麼新鮮事？"
          ></textarea>
        </div>
        <div class="btn">
          <button class="btn-submit" type="submit" @click="handleAddTweet2">
            推文
          </button>
        </div>
        <hr class="hr2" />
      </div>

      <!-- tweets -->
      <div class="tweets">
        <TweetCard
          v-for="tweet in tweets"
          :key="tweet.id"
          :initial-tweet="tweet"
        />
      </div>
    </div>

    <div class="right-content">
      <PopularList />
    </div>

    <!-- TweetModal -->
    <TweetModal @after-addTweet="handleAddTweet" />
  </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import TweetCard from "./../components/TweetCard";
import TweetModal from "./../components/TweetModal";
import PopularList from "./../components/PopularList";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    Navbar,
    TweetCard,
    TweetModal,
    PopularList,
  },
  data() {
    return {
      tweets: [],
      newTweet2: "",
      height: "",
    };
  },
  created() {
    this.fetchTweets();
    console.log("created", this.tweets)
  },
  watch: {
    newTweet2() {
      // console.log(this.newTweet2.length)
      if (this.newTweet2.length > 70) this.height = "106px";
      else this.height = "66px";
    },
  },
  methods: {
    async fetchTweets() {
      try {
        const data = await tweetsAPI.getTweets();

        if (data.statusText !== "OK") {
          throw new Error(data.statusText);
        }
        this.tweets = data.data;
      } catch (error) {
        console.log(error);

        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async handleAddTweet(newTweet) {
      // console.log(newTweet);
      try {
        if (!newTweet) {
          Toast.fire({
            icon: "error",
            title: "推文內容不可以為空白",
          });
          return;
        } else if (newTweet.length >= 140) {
          Toast.fire({
            icon: "error",
            title: "推文字數不可超過140字",
          });
          return;
        }
        const data = await tweetsAPI.addTweet({ description: newTweet });
        this.tweets = data.data;
        console.log("handleAddTweet", this.tweets)
        //送出後重整頁面
        // window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },
    handleAddTweet2() {
      this.handleAddTweet(this.newTweet2);
      this.newTweet2 = "";
      console.log("handleAddTweet2", this.tweets)
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 178px 641px 273px;
  grid-gap: 24px;
  width: 1140px;
  padding: 0;
  /* border: 1px solid black; */
}

.left-content {
  grid-column: 1/2;
  /* border: 1px solid blue; */
}

.middle-content {
  /* width: 46%; */
  padding: 0px;
  border: 1px solid #e6ecf0;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  grid-column: 2/3;
  /* border: 1px solid red; */
}

.right-content {
  grid-column: 3/4;
  margin-top: 16px;
  /* border: 1px solid green; */
}

h4 {
  margin: 24px 0 24px 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: #171725;
}

.title {
  margin-top: 24px;
}

.hr1 {
  height: 1px;
  margin: 24px 0px 16px 0px;
}

.posting {
  display: flex;
}

.photo {
  width: 50px;
  height: 50px;
  margin-left: 25.19px;
}

.new-post {
  width: 526px;
  margin-left: 8px;
  padding-top: 12px;
  border: none; /*去除邊框*/
  outline: none; /*去除選中後的邊框*/
  resize: none; /*移除小三角，關閉調整大小功能*/
  overflow: hidden;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #6c757d;
  min-height: 66px;
}

.btn {
  display: flex;
  justify-content: flex-end;
  margin: 14px 25.19px 6px 0;
}

.btn-submit {
  width: 64px;
  height: 40px;
  background-color: #ff6600;
  border: none;
  border-radius: 50px;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  outline: none; /*點擊不會出現黑框*/
}

.hr2 {
  border: 10px solid #e6ecf0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px 0 16px 0;
  background-color: #e6ecf0;
}

/* .tweets {
  border: 1px solid green;
} */
</style>