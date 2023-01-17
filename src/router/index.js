import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import userProfileView from '../views/userProfileView.vue'
import CartPage from '../views/CartPage.vue'
import DetailPage from '@/views/DetailPage.vue'
import BasketCheckout from '../components/BasketCheckout.vue'
import PageNotFound from '../views/PageNotFound.vue'
Vue.use(VueRouter)


// user authentication
const userAuth = JSON.parse(localStorage.getItem('authUser'));
console.log(userAuth, "userAuth check")
const routes = [
  // route for home page
  {
    path: '/',
    name: 'homeView',
    component: HomeView,
   
  },
  // route for login page
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  // route for about page
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
  ,
  // route for contact page
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
  ,
  // route for user profile page
  {
    path: '/userProfile',
    name: 'userProfile',
    component: userProfileView
  },
  // route for cart page
  {
    path: '/cartPage',
    name: 'userCart',
    component: CartPage,
     meta: {
      needsAuth: true
    }
   
  },
  // route for detail page
  {
    path: '/detailPage',
    name: 'detailPage',
    component: DetailPage
  },
  // route for checkout page
  {
    path: '/basketCheckout',
    name: 'BasketCheckout',
    component: BasketCheckout
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// route guard for user authentication
router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    if (userAuth) {
      next();
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router;
