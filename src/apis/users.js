import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem('token')
const userId = localStorage.getItem("userId");

export default {
  addTweetLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteTweetLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike(userId) {
    return apiHelper.delete(`/like/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserInfo() {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserCard(otherUserId) {
    return apiHelper.get(`/users/${otherUserId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  accountSetting({ account, name, email, password, checkPassword }) {
    return apiHelper.put(`/users/${userId}`, {
      account,
      name,
      email,
      password,
      checkPassword
    }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // updateUserCard({ name, introduction, cover, avatar }) {
  //   return apiHelper.put(`/users/${userId}`, { name, introduction, cover, avatar }, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // },
  updateUserCard({ formData }) {
    return apiHelper.put(`/users/${userId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopFollowedUser() {
    return apiHelper.get(`/users/topFollowedUser`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollow(userId) {
    return apiHelper.post('/followships', userId, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  removeFollow(userId) {
    return apiHelper.delete(`/followships/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}