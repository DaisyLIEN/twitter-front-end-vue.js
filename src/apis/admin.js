import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getAdminTweets() {
    return apiHelper.get('/admin/tweets', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getAdminUsers() {
    return apiHelper.get('/admin/users', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}