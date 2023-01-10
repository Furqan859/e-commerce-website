import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    products: [],
    product: [],
    filterCategory:[],
    id: '',
    count: 1,
    AuthLogin: true,
    selectFilterCategory:[],
    searchData:[],
    detailPage:[],
   
  },
getters:{
  product:state=>state.product,
  filterCategory:state=>state.filterCategory,
  detailPage:state=>state.detailPage,
  selectFilterCategory:state=>state.selectFilterCategory

}

  ,

  mutations: {

    removeCartData(state,id){
     state.product.splice(id,1)
     console.log(  this.state.product.splice(id,1),"console remove data")
     }
  
,

    SET_PRODUCT_Detail(state,GetDetailPage){
      state.detailPage = GetDetailPage
    }
,
    Update_Search_Product(state,Select_Search_Category){
      state.searchData = Select_Search_Category.products
    }
    ,

    Update_Filter_Product(state,Select_filter_Category){
      state.selectFilterCategory = Select_filter_Category.products;
    }
    ,
    Update_Select_Product(state,Select_Category){
      state.filterCategory = Select_Category
    }
    ,
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, productsFilter) {
      state.product.push(productsFilter);
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
    async ProductDescription({ commit },id) {
      const fetchProduct = await fetch(`https://dummyjson.com/products/${id}`)
      const productsFilter = await fetchProduct.json()
      // console.log( productsFilter, "productsFilter")
      commit('SET_PRODUCT', productsFilter);
      console.log(this.state.product,"product")
    },
    async productSelect({ commit }) {
      const fetchProduct = await fetch('https://dummyjson.com/products/categories')
      const Select_Category = await fetchProduct.json()
      // console.log(Select_Category,"Select_Category")
      commit('Update_Select_Product', Select_Category)
    },
    async filterSingleProduct({ commit },productFilterName) {
      const fetchProduct = await fetch(`https://dummyjson.com/products/category/${productFilterName}`)
      const Select_filter_Category = await fetchProduct.json()
      console.log(Select_filter_Category,"Select_filter_Category")
      commit('Update_Filter_Product',Select_filter_Category)
      
    },
    async searchProduct({ commit },search) {
      const fetchProduct = await fetch(`https://dummyjson.com/products/search?q=${search}`)
      const Select_Search_Category = await fetchProduct.json()
      console.log(Select_Search_Category.products,"Select_Search_Category")
      commit('Update_Search_Product',Select_Search_Category)
      console.log(this.state.searchData,'search')
    
    },
    async DetailPageGet({ commit },id) {
      const fetchProduct = await fetch(`https://dummyjson.com/products/${id}`)
      const  GetDetailPage= await fetchProduct.json()
      console.log( GetDetailPage, "product detail page")
      commit('SET_PRODUCT_Detail', GetDetailPage),
      console.log(this.state.detailPage,"GetDetailPage")
    },
   
  },

})
