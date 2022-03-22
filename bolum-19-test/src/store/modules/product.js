import Vue from "vue";
const state = {
products : []
}

const getters ={
getProducts(state){
    return state.products;
},
getProduct(state){

}
}

const mutations = {
updateProductList(state, product){
        state.products.push(product);
}
}
const actions = {
  initApp( {commit}){
      // Vue Resource islemleri
  },
  saveProduct( {dispatch , commit , state} , product){
      // Vue Resource islemleri
      Vue.http.post("https://product-operations-app-53bec-default-rtdb.firebaseio.com/product.json", product)
      .then((response) => {
          /***********  updating the product list*/
        product.key = response.body.name;
          commit("updateProductList" , product);
          /******************  Updating the trading balance information */
        dispatch
      });


  },
  sellProduct({commit}, payload){
      // Vue Resource islemleri


  }

}
export default {
    state,
    getters,
    mutations,
    actions
}