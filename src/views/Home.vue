<template>
  <div class="home">
    <HelloBanner/>
    <SearchArea/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloBanner from '@/components/HelloBanner.vue'
import SearchArea from '@/components/SearchArea.vue'

export default {
  name: 'Home',
  components: {
    HelloBanner,
    SearchArea
  }
}
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  background-color: #3D405B;
}
</style>
