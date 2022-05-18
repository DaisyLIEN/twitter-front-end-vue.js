import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem('token')
const userId = localStorage.getItem("userId");

export default {
  addLike(userId) {
    return apiHelper.post(`/like/${userId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike(userId) {
    return apiHelper.delete(`/like/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getUserInfo() { },
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
  updateUserCard({ formData }) {
    return apiHelper.put(`/users/${userId}`, { formData, userId }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}