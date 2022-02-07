import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'
import ShippingDetails from '../views/ShippingDetails.vue'
import Payment from '../views/Payment.vue'
import ThankyouPage from '../views/ThankyouPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "basket" */ '../views/Basket.vue')
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  },
  {
    path: '/shippingdetails',
    name: 'Shipping Detail',
    component: ShippingDetails
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/thankyoupage',
    name: 'Thank you Page',
    component: ThankyouPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
