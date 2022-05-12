import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/UserSelf.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/admin/signin',
    name: 'admin-signin',
    component: () => import('../views/AdminSignin.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/replylist',
    name: 'replylist',
    component: () => import('../views/ReplyList.vue')
  },
  {
    path: '/following',
    name: 'following',
    component: () => import('../views/Following.vue')
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

export default router
