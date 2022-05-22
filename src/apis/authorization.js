import { apiHelper } from './../utils/helpers'

export default {
  signIn({ account, password }) {
    return apiHelper.post('/login', {
      account,
      password
    })
  },
  regist({ account, name, email, password, checkPassword }) {
    //這裡return的會是一個Promise
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
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