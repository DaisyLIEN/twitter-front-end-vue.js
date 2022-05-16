import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/main/:tweet_id',
    name: 'replylist',
    component: () => import('../views/ReplyList.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('../views/Follow.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweets.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminSignin.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

//驗證是否有取得token，否則無法進入其他頁面
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
//   // 登入頁（首頁）不用驗證
//   if (to.fullPath === '/signin' || to.fullPath === '/admin' || to.fullPath === '/regist') {
//     if(token) {
//       next('/main')
//       return
//     }
//     next()
//     return
//   }
//   if (!token) {
//     next('/signin')
//   }
//   next()
// })


export default router
