import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('views/index/Index')
  },
  {
    path: '/classification',
    component: () => import('views/classification/Classification')
  },
  {
    path: '/shoppingCart',
    component: () => import('views/shopping-cart/ShoppingCart')
  },
  {
    path: '/my',
    component: () => import('views/my/My')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router