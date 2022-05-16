<template>
  <div class="tweet-modal">
    <div
      class="modal fade"
      id="tweetModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="posting">
              <img class="photo" src="https://img.onl/d0RNIH" alt="" />
              <input
                type="text"
                class="new-post"
                autofocus
                placeholder="有什麼新鮮事？"
              />
            </div>
            <div class="btn">
              <button type="button" class="btn-submit" data-bs-dismiss="modal">
                推文
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Modal */
.modal-dialog {
  height: 304px;
  width: 46%;
  max-width: none;
}

.modal-content {
  border-radius: 14px;
}

.modal-header {
  padding-left: 0;
  padding-right: 0;
}

.close {
  color: #ff6600;
  outline: none;
  padding-left: 15px;
  margin-left: 0px;
}

.posting {
  display: flex;
  padding: 0;
}

.photo {
  width: 50px;
  height: 50px;
  margin-left: 8px;
}

.new-post {
  margin-left: 8px;
  border: none;
  outline: medium;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #6c757d;
}

.btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 121px;
  padding: 0;
}

.btn-submit {
  width: 64px;
  height: 40px;
  background-color: #ff6600;
  border: none;
  border-radius: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  outline: none; /*點擊不會出現黑框*/
}
</style>