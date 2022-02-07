import { createStore } from 'vuex'

function updateLocalStorage(cart) {
  localStorage.setItem('shoppingcart', JSON.stringify(cart))
}

export default createStore({
  state: {
    shoppingcart: []
  },
  getters: {
    productQuantity: state => product => {
      const item = state.shoppingcart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },
    cartItems: state => {
      return state.shoppingcart
    },
  },
  mutations: {
    addToCart (state, product) {
      let item = state.shoppingcart.find(i => i.id === product.id)

      if(item) {
        item.quantity++
      } else {
        state.shoppingcart.push({...product, quantity: 1})
      }

      updateLocalStorage(state.shoppingcart)
    },
  }
})
