import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  // state is used to store data

  state: {
    user: {},
    products: [],
    product: [],
    filterCategory: [],
    id: '',
    selectFilterCategory: [],
    searchData: [],
    detailPage: [],
  },

  // getters is used to set data in component
  getters: {
    products: state => state.products,
    searchData:state=>state.searchData,
    product: state => state.product,
    filterCategory: state => state.filterCategory,
    detailPage: state => state.detailPage,
    selectFilterCategory: state => state.selectFilterCategory,
  },

  // mutations is used to update the state
  mutations: {
    
    removeCartData(state, id) {
      state.product.splice(id, 1)
      console.log(this.state.product.splice(id, 1), "console remove data")
    }

    ,

    SET_PRODUCT_Detail(state, GetDetailPage) {
      state.detailPage = GetDetailPage
    }
    ,
    Update_Search_Product(state, Select_Search_Category) {
      state.searchData = Select_Search_Category.products
    }
    ,

    Update_Filter_Product(state, Select_filter_Category) {
      state.selectFilterCategory = Select_filter_Category.products;
    }
    ,
    Update_Select_Product(state, Select_Category) {
      state.filterCategory = Select_Category
    }
    ,
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_PRODUCT(state, singleProductFetch) {
    
        state.product.push(singleProductFetch);
      
    }

  },



  // actions is used to call mutations
  actions: {
// user login action and validation
    async loginUser(state,user) {
      const userData = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.userName,
          password: user.password,
        })

      })

      // user login store in local storage
      const userInformation = await userData.json();
      console.log(userInformation,"user login")
       localStorage.setItem('userLoginDetail', JSON.stringify( userInformation));
      // const data = JSON.parse(localStorage.getItem("userLoginDetail"));

    //  user login validation and redirect to home page
      if (user.userName == userInformation.username && userData.status == 200) {
        const userLoggedIn = true;
        localStorage.setItem('authUser', JSON.stringify(userLoggedIn));
        console.log(userLoggedIn, "userLoggedIn")
        window.location.replace('/')
      } else {
      alert('Invalid Credentials')
      }
    },


//  get all product from api
    async getProducts({ commit }) {
      const getAllProducts = await fetch('https://dummyjson.com/products?limit=100')
      const products = await getAllProducts.json()
      commit('SET_PRODUCTS', products.products)
    },

    // Add to cart get single product
    async ProductDescription({ commit }, id) {
      const getSingleProduct = await fetch(`https://dummyjson.com/products/${id}`)
      const singleProductFetch = await getSingleProduct.json()
      singleProductFetch.quantity=1
      singleProductFetch.deliveryCharge=5
      commit('SET_PRODUCT', singleProductFetch);
      console.log(singleProductFetch, "singleProductFetch");
    },


    // get all category from api
    async productSelect({ commit }) {
      const fetchProduct = await fetch('https://dummyjson.com/products/categories')
      const Select_Category = await fetchProduct.json()
      commit('Update_Select_Product', Select_Category)
    },
    

    // get filter category from api
    async filterSingleProduct({ commit }, productFilterName) {
      const fetchProduct = await fetch(`https://dummyjson.com/products/category/${productFilterName}`)
      const Select_filter_Category = await fetchProduct.json()
      commit('Update_Filter_Product', Select_filter_Category)
    },

//  get search product from api
    async searchProduct({ commit }, search) {
      const searchProduct = await fetch(`https://dummyjson.com/products/search?q=${search}`)
      const Select_Search_Category = await searchProduct.json()
      commit('Update_Search_Product', Select_Search_Category)

    },

    // get product detail page from api
    async DetailPageGet({ commit }, id) {
      const getProductDetail = await fetch(`https://dummyjson.com/products/${id}`)
      const GetDetailPage = await getProductDetail.json()
      commit('SET_PRODUCT_Detail', GetDetailPage)

    },

  },

})
