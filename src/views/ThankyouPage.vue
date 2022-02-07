<template>
  <div class="thankyou">
      <h1>Thank you for your order!</h1>
      <router-link class="buttons" style="text-decoration: none" :to="'/'">
        <button>Home page</button>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.thankyou {
    background-color: #F4F1DE;
    min-height: calc(100vh - 95px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 30px 30px;

    .buttons {
      display: flex;
      width: 100%;
      height: 80px;
      justify-content: space-between;
      align-items: center;

      button {
        width: 100px;
        height: 25px;
        font-size: 16px;
        background-color: #3D405B;
        color: #F4F1DE;
        border: none;

        &:hover {
          color: #E07A5F;
          cursor: pointer;
        }
      }
    }
  }

</style>