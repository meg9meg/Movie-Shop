<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/basket"><font-awesome-icon icon="shopping-cart" /><span>{{ product_total }}</span></router-link>
    <p></p>
  </div>
  <router-view/>
</template>

<script>
//import { mapState } from 'vuex'

export default {
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  },
  computed: {   
    product_total() {
      return this.$store.state.shoppingcart.length
    }
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 30px;
  background-color: #3D405B;
  color: #E07A5F;

  a {
    font-size: 30px;
    font-weight: bold;
    color: #81B29A;
    text-decoration: none;

    &.router-link-exact-active {
      color: #F2CC8F;
    }

    span {
      font-size: 16px;
      color: #F2CC8F;
    }
  }
}
</style>
