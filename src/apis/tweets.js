import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getTweets() {
    return apiHelper.get('/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserTweets(userId) {
    return apiHelper.get(`/user/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getReplyTweets(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addTweet({ description }) {
    return apiHelper.post('/tweets', { description }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}