import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/pages/HomeSite.vue'
import About from '../components/pages/AboutSite.vue'
import Login from '../components/pages/LoginSite.vue'
import Signup from '../components/pages/SignupSite.vue'





const routes=[
  {
  path:'/home',
  component:Home
  },
  
  {
  path:'/login',
  component:Login
  },
  {
  path:'/signup',
  component:Signup
  },
  
  {
  path:'/blog',
  component:About
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})




export default router