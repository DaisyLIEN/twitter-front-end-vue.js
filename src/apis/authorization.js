import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  signIn({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/login', {
      account,
      password
    })
  },
  regist({ account, name, email, password, passwordCheck }) {
    //這裡return的會是一個Promise
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      passwordCheck
    })
  },
  AdminSignin({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/admin/login', {
      account,
      password
    })
  },
}