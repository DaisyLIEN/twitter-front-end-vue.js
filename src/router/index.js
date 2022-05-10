import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'root',
  //   redirect: '/users/:id'
  // },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/UserSelf.vue')
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
