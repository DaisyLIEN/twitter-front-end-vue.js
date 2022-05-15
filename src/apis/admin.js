import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  // 帶入需要的參數
  AdminSignin({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/admin/login', {
      account,
      password
    })
  },
  getAdminTweets() {
    return apiHelper.get(`/admin/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getAdminUsers() {
    return apiHelper.get(`/admin/users`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}