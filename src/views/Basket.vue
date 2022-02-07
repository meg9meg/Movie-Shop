<template>
  <div class="basket">
    <BasketArea />
  </div>
</template>

<script>
// @ is an alias to /src
import BasketArea from '@/components/BasketArea.vue'

export default {
  name: 'Basket',
  components: {
    BasketArea
  }
}
</script>

<style lang="scss">

</style>