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
  saveProduct( { commit} , payload){
      // Vue Resource islemleri

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