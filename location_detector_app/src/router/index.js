import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLocation from '../views/UserLocation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: UserLocation
  }
]

const router = new VueRouter({
  routes
})

export default router
