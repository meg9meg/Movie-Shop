import { createStore } from 'vuex'

function updateLocalStorage(shoppingcart) {
  localStorage.setItem('shoppingcart', JSON.stringify(shoppingcart))
}

export default createStore({
  state: {
    shoppingcart: [],
    total_amount: 0,
  },
  getters: {
    productQuantity: state => movie => {
      const item = state.shoppingcart.find(i => i.id === movie.imdbID)

      if (item) return item.quantity
      else return null
    },
    cartItems: state => {
      return state.shoppingcart
    },
  },
  mutations: {
    addToCart (state, movie) {
      let item = state.shoppingcart.find(i => i.id === movie.imdbID)

      if(item) {
        item.quantity++
      } else {
        state.shoppingcart.push({...movie, quantity: 1})
      }

      updateLocalStorage(state.shoppingcart)
    },
    removeFromCart (state, movie) {
      let item = state.shoppingcart.find(i => i.id === movie.imdbID)
      state.shoppingcart.splice(item, 1)

      updateLocalStorage(state.shoppingcart)
    },
    updateTotal (state, total_cost) {
      state.total_amount = total_cost
    },
    updateCartFromLocalStorage(state) {
      const shoppingcart = localStorage.getItem('shoppingcart')
      if (shoppingcart) {
        state.shoppingcart = JSON.parse(shoppingcart)
      }
    },
    clearFromCart(state) {
      const cart = localStorage.getItem('shoppingcart')
      if (cart) {
        state.shoppingcart = JSON.parse(cart)
      }
      state.shoppingcart = []
      state.total_amount = 0
      
    }
  }
})
