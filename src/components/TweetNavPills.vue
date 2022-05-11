<template>
  <div class="wrapper-tweet-nav-pills">
    <header>
      <a href="#">
        <img
          class="vector-primary"
          src="https://i.imgur.com/PYbiwrX.png"
          alt=""
        />
      </a>
      <div class="title">
        <h5>John Doe</h5>
        <p>29 推文</p>
      </div>
    </header>
    <ul>
      <a href="#"><li>推文</li></a>
      <a href="#"><li>回覆</li></a>
      <a href="#"><li>喜歡的內容</li></a>      
    </ul>
  </div>
</template>

<style scoped>
.wrapper-tweet-nav-pills {
  height: 52px;
}
ul {  
  height: 100%;
  display: flex;  
  border-bottom: 1px solid #e6ecf0;
}
a {
  text-decoration: none;
  position: relative;
  color: #657786;
  width: 130px;
}
li {  
  height: 52px;
  text-align: center;
  padding: 15px;
  line-height: 22px;  
  color: #657786;
  font-weight: 700;
  font-size: 15px;  
}
li:hover,
li:focus,
li:hover::after,
li:focus::after {
  color: #ff6600;
  opacity: 1;
}
li::after {
  content: "";
  border-bottom: 2px solid #ff6600;  
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
}
</style>