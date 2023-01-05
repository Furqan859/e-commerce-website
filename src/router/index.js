import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store/index.js'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import userProfileView from '../views/userProfileView.vue'
import CartPage from '../views/CartPage.vue'
import DetailPage from '@/views/DetailPage.vue'

Vue.use(VueRouter)

const userAuth = store.state.AuthLogin;
console.log(userAuth,"userAuth")
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      needsAuth:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
  ,
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
  ,
  {
    path: '/userProfile',
    name: 'userProfile',
    component: userProfileView
  },
  {
    path: '/cartPage',
    name: 'userCart',
    component: CartPage
  },
  {
    path: '/detailPage/:id',
    name: 'detailPage',
    component: DetailPage
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  if(to.meta.needsAuth){
    if(userAuth){
      next();
    }else{
    next('/login')
    }
  }else{
    next()
  }
})

export default router;
