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
    path: '/follower/:id',
    name: 'follower',
    component: () => import('../views/Follower.vue')
  },
  {
    path: '/following/:id',
    name: 'following',
    component: () => import('../views/Following.vue')
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

// 驗證是否有取得token，否則無法進入其他頁面
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  const userAvatar = localStorage.getItem('userAvatar')
  if (to.fullPath === '/signin' || to.fullPath === '/admin' || to.fullPath === '/regist') {
    //要前往登入頁面時如果有token和userId則導入main主頁
    if (token && userId && userAvatar) {
      next('main')
      return
    } else {
      next()
      return
    }
  } else {
    //要前往其他頁面時如果缺少token或userId則導入signin頁面
    if (token && userId && userAvatar) {
      next()
      return
    } else {
      next('signin')
      return
    }
  }
})



export default router
