import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payLoad) {
      let oldProduct = state.cartList.find(item => item.id == payLoad.id)
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payLoad.count = 1
        state.cartList.push(payLoad)
      }
      console.log(state.cartList)
    }
  },
  actions: {},
  getters: {},
  modules: {}
})

export default store