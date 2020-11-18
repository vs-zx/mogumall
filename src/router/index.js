import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: ()=>import('views/category/Category.vue')
  },
  {
    path: '/shopcart',
    name: 'ShopCar',
    component: ()=>import('views/shopcart/ShopCart.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: ()=>import('views/user/User.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: ()=>import('views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
