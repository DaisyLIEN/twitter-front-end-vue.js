<template>
  <div class="container">
    <!-- header -->
    <header>
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
      <h4>推文</h4>
    </header>
    
    <!-- ReplyList Tweet -->

    <!-- ReplyCard  -->
    <ReplyCard v-for="reply in replylist" :key="reply.id" :initial-reply="reply"/>
  </div>
</template>

<script>
import ReplyCard from "./../components/ReplyCard";

const dummyData = {
 "users": [
    {
      "id": 1,
      "name": "Apple",
      "account": "apple",
      "image": "https://img.onl/Dwojms",
      "createdAt": "2022-05-11T02:16:16.000Z",
      "updatedAt": "2022-05-11T02:16:16.000Z",
      "content":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacinia justo. Cras mi ipsum, venenatis vitae pretium quis, interdum non orci. Suspendisse blandit libero sit amet nisl blandit, vitae fermentum leo tincidunt.",
      "replyNum": 13,
      "likeNum": 76,
    },
    {
      "id": 2,
      "name": "Jane Cathy",
      "account": "jamjane1999",
      "image": "https://img.onl/KW4sJV",
      "createdAt": "2022-04-25T02:16:16.000Z",
      "updatedAt": "2022-04-25T02:16:16.000Z",
      "content":
        "Cras blandit libero nibh, nec scelerisque lorem condimentum sit amet. Nam sapien eros, ultricies sit amet arcu non, iaculis venenatis nulla. Integer efficitur varius neque, viverra vestibulum ligula. Duis libero odio, convallis a elit ac, fermentum luctus velit.",
      "replyNum": 10,
      "likeNum": 80,
    },
    {
      "id": 3,
      "name": "Cheery",
      "account": "cheerysweet",
      "image": "https://img.onl/H5eDF2",
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "content":
        "Integer odio tellus, viverra eget vestibulum vitae, auctor sed magna. Sed sed gravida diam. Praesent volutpat tincidunt risus a sagittis. Vestibulum quis purus venenatis, sodales justo eu, faucibus tortor.",
      "replyNum": 17,
      "likeNum": 55,
    },
    {
      "id": 4,
      "name": "Dana",
      "account": "danagirl",
      "image": "https://img.onl/HM4fxm",
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "content":
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, orci imperdiet condimentum sagittis, nisl enim commodo sem, nec ornare augue libero ut purus.",
      "replyNum": 10,
      "likeNum": 88,
    },
    {
      "id": 5,
      "name": "Gorden",
      "account": "gordenball2022",
      "image": "https://img.onl/25RyTE",
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "content":
        "Nullam eu ante nisi. In convallis non augue ac rutrum. Fusce eu ullamcorper quam. Duis at aliquet tortor.",
      "replyNum": 13,
      "likeNum": 76,
    },
    {
      "id": 6,
      "name": "LuLu",
      "account": "lulupig",
      "image": "https://img.onl/1XTVZ",
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "content":
        "Integer ut pulvinar augue, ac molestie diam. Aliquam sagittis luctus elit, vitae auctor enim euismod nec.",
      "replyNum": 17,
      "likeNum": 68,
    }
  ],
  "replylist": [
    {
      "id": 1,
      "content": "Ut ipsum culpa consequatur cum error sit qui totam ab. Ut ipsum culpa consequatur cum error sit qui totam ab.",
      "userId": 1,
      "tweetId": 1,
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "replyNum": 13,
      "likeNum": 76,
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "account": "devon_lane",
        "image":"https://img.onl/Dwojms",
        "password":
          "$2a$10$UMTVoVpobdowk25uWvbhkOz84BaOxA.L2qWrRJOm1I5eGuX9dCdmi",
        "isAdmin": true,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-19T02:16:16.000Z",
      },
      "Tweet": {
        "id": 1,
        "name": "Mrs. Brooks Koch",
        "account": "apple",
        "tel": "1-758-244-5096 x093",
        "address": "577 Tristian Walk",
        "opening_hours": "08:00",
        "description": "earum",
        "image":
          "https://loremflickr.com/320/240/restaurant,food/?random=57.10351638724558",
        "viewCounts": 1,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-22T04:38:14.000Z",
        "CategoryId": 3,
      }
    },
    {
      "id": 1,
      "content": "Ut ipsum culpa consequatur cum error sit qui totam ab.",
      "userId": 1,
      "tweetId": 1,
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "replyNum": 13,
      "likeNum": 76,
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "account": "devon_lane",
        "image":"https://img.onl/Dwojms",
        "password":
          "$2a$10$UMTVoVpobdowk25uWvbhkOz84BaOxA.L2qWrRJOm1I5eGuX9dCdmi",
        "isAdmin": true,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-19T02:16:16.000Z",
      },
      "Tweet": {
        "id": 1,
        "name": "Mrs. Brooks Koch",
        "account": "apple",
        "tel": "1-758-244-5096 x093",
        "address": "577 Tristian Walk",
        "opening_hours": "08:00",
        "description": "earum",
        "image":
          "https://loremflickr.com/320/240/restaurant,food/?random=57.10351638724558",
        "viewCounts": 1,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-22T04:38:14.000Z",
        "CategoryId": 3,
      }
    },
    {
      "id": 1,
      "content": "Ut ipsum culpa consequatur cum error sit qui totam ab.",
      "userId": 1,
      "tweetId": 1,
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "replyNum": 13,
      "likeNum": 76,
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "account": "devon_lane",
        "image":"https://img.onl/Dwojms",
        "password":
          "$2a$10$UMTVoVpobdowk25uWvbhkOz84BaOxA.L2qWrRJOm1I5eGuX9dCdmi",
        "isAdmin": true,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-19T02:16:16.000Z",
      },
      "Tweet": {
        "id": 1,
        "name": "Mrs. Brooks Koch",
        "account": "apple",
        "tel": "1-758-244-5096 x093",
        "address": "577 Tristian Walk",
        "opening_hours": "08:00",
        "description": "earum",
        "image":
          "https://loremflickr.com/320/240/restaurant,food/?random=57.10351638724558",
        "viewCounts": 1,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-22T04:38:14.000Z",
        "CategoryId": 3,
      }
    },
    {
      "id": 1,
      "content": "Ut ipsum culpa consequatur cum error sit qui totam ab.",
      "userId": 1,
      "tweetId": 1,
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "replyNum": 13,
      "likeNum": 76,
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "account": "devon_lane",
        "image":"https://img.onl/Dwojms",
        "password":
          "$2a$10$UMTVoVpobdowk25uWvbhkOz84BaOxA.L2qWrRJOm1I5eGuX9dCdmi",
        "isAdmin": true,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-19T02:16:16.000Z",
      },
      "Tweet": {
        "id": 1,
        "name": "Mrs. Brooks Koch",
        "account": "apple",
        "tel": "1-758-244-5096 x093",
        "address": "577 Tristian Walk",
        "opening_hours": "08:00",
        "description": "earum",
        "image":
          "https://loremflickr.com/320/240/restaurant,food/?random=57.10351638724558",
        "viewCounts": 1,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-22T04:38:14.000Z",
        "CategoryId": 3,
      }
    },
    {
      "id": 1,
      "content": "Ut ipsum culpa consequatur cum error sit qui totam ab.",
      "userId": 1,
      "tweetId": 1,
      "createdAt": "2022-04-19T02:16:16.000Z",
      "updatedAt": "2022-04-19T02:16:16.000Z",
      "replyNum": 13,
      "likeNum": 76,
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "account": "devon_lane",
        "image":"https://img.onl/Dwojms",
        "password":
          "$2a$10$UMTVoVpobdowk25uWvbhkOz84BaOxA.L2qWrRJOm1I5eGuX9dCdmi",
        "isAdmin": true,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-19T02:16:16.000Z",
      },
      "Tweet": {
        "id": 1,
        "name": "Mrs. Brooks Koch",
        "account": "apple",
        "tel": "1-758-244-5096 x093",
        "address": "577 Tristian Walk",
        "opening_hours": "08:00",
        "description": "earum",
        "image":
          "https://loremflickr.com/320/240/restaurant,food/?random=57.10351638724558",
        "viewCounts": 1,
        "createdAt": "2022-04-19T02:16:16.000Z",
        "updatedAt": "2022-04-22T04:38:14.000Z",
        "CategoryId": 3,
      }
    },
  ],
};

export default {
  components: {
    ReplyCard
  },
  data() {
    return {
      users: [],
      replylist: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.users = dummyData.users;
      this.replylist = dummyData.replylist
    }
  },
};
</script>

<style scoped>
.container {
  width: 46%;
  padding: 0px;
  border: 1px solid #E6ECF0;
  border-top: 1px solid white; 
  border-bottom: 1px solid white;
  /* border: 1px solid red;  */
}

header {
  margin: 24px 0 16px 25px;
  display: flex;
  align-items: center;
}

h4 {
  margin-left: 16px;
}
</style>