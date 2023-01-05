import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    products: [],
    product: [],
    id: '',
    count: 0,
    AuthLogin: true,
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, products) {
      state.product = products;
    },
    addToCart(state, id) {
      state.id = id;
    }
  },
  actions: {

    async loginUser(state, user) {
      const userData = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

          username: user.userName,
          password: user.password,
        })

      })

      const userLogin = await userData.json();
      localStorage.setItem('userLogin', JSON.stringify(userLogin));
      const data = JSON.parse(localStorage.getItem("userLogin"));
      // console.log(data);
      // console.log(data.token, "user token")
      // console.log(this.token, "this token")
      // console.log(data.username, "username form data")

      if (user.userName == data.username) {
       state.AuthLogin = true;
        window.location.replace('/')
      } else alert('Invalid Credentials')    },

    async getProducts({ commit }) {
      const fetchProduct = await fetch('https://dummyjson.com/products')
      const products = await fetchProduct.json()
      // console.log(products.products,"product data")

      commit('SET_PRODUCTS', products.products)
    },
    async ProductDescription({ commit }) {

      const fetchProduct = await fetch(`https://dummyjson.com/products/${this.state.id}`)
      const products = await fetchProduct.json()
      console.log( products, "product data")
      commit('SET_PRODUCT', products)
    },
  },

})
