import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem('token')
// const userId = () => localStorage.getItem('userId')

export default {
  addLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}