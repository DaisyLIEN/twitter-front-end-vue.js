import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: '',
      name: '',
      email: '',
    },
    isAuthenticated: false,
    currentTweetId: -1
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      state.isAuthenticated = true
    },
    setCurrentTweetId(state, currentTweetId) {
      state.currentTweetId = currentTweetId
    },
  },
  actions: {
  },
  modules: {
  }
})
