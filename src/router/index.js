import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/products',
    component: () => import(/* webpackChunkName: "products" */ '../views/products'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/products/create',
    component: () => import(/* webpackChunkName: "products-create" */ '../views/products/create'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/orders',
    component: () => import(/* webpackChunkName: "orders" */ '../views/orders'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/settings',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/settings'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/help',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/help'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '*',
    name: 'Error',
    meta: {
      layout: 'error'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

export default router
