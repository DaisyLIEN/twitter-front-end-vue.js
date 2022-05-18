import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem('token')
// const userId = () => localStorage.getItem('userId')

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
  getUserCard(userId) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  updateUserCard({ formData, userId }) {
    return apiHelper.put(`/users/${userId}`, { formData, userId }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}