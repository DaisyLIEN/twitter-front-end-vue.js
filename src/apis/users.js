import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem('token')
const userId = localStorage.getItem("userId");

export default {
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserInfo() {
    return apiHelper.get(`/users/${userId}`, {
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
  }
}