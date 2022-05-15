import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getUserCard(userId) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getReplyTweets(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getLikeTweets(userId) {
    return apiHelper.get(`/users/${userId}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  updateUserCard({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}