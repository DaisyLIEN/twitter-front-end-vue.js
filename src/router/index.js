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
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue')
  },
  // {
  //   path: '/setting',
  //   name: 'setting',
  //   component: () => import('../views/Setting.vue')
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   component: () => import('../views/Admin.vue')
  // },
  // {
  //   path: '/adminmain',
  //   name: 'admin-main',
  //   component: () => import('../views/AdminMain.vue')    
  // },  
  {
    path: '/main',
    name: 'main',
    component: Main,
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/UserSelf.vue')
  },
  // {
  //   path: '/userother',
  //   name: 'user-other',
  //   component: () => import('../views/UserOther.vue')
  // },  
  // {
  //   path: '/userselffollow',
  //   name: 'user-self-follow',
  //   component: () => import('../views/UserSelfFollow.vue')
  // },
  // {
  //   path: '/replylist',
  //   name: 'replylist',
  //   component: () => import('../views/ReplyList.vue')
  // },     
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
