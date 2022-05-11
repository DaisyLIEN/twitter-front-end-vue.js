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
    path: '/regist',
    name: 'regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
