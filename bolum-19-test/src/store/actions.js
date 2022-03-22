import Vue from "vue"

export const setTradeResult = ( {state, commit} , tradeResult)=> {
 commit("updateTradeResult", tradeResult);
let tradeData = {
    purchase : state.purchase,
    sale : state.sale
}
 Vue.http.put("https://product-operations-app-53bec-default-rtdb.firebaseio.com/trade-result.json",  tradeData)
.then(response => {
console.log(response);
})
}

export const getTradeResult = ({ commit }) => {

}