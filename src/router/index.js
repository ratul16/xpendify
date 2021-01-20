import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    
    component: () => import('../views/Profile.vue'),
    children:[
      {
        path: '/analytics',
        name: 'analytics',
        component: () => import('../components/dashboardview/Analytics.vue')
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import('../components/dashboardview/Transactions.vue')
      },
    ]
  },
  
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
