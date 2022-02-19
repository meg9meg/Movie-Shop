<template>
  <div class="hello">
    <div class="offer">
      <h1>Welcome in our movie shop!</h1>
      <p>Get 10% discount "promo10"</p>
    </div> 
    <div class="img">
      <img src="../assets/movie.png">
    </div>  
  </div>
</template>

<script>
export default {
  name: 'HelloBanner',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    z-index: 0;
    height: 250px;
    background-color: #F4F1DE;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    @media screen and (max-width: 600px) {
      height: 150px;
    }

    .offer {
      height: 100%;
      width: 50%;
      align-self: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 35px;
      }
      p {
        font-size: 20px;
      }

      @media screen and (max-width: 600px) {
        width: 45%;
        h1 {
        font-size: 20px;
        }
        p {
          font-size: 15px;
        }
      }  
    }
    .img {
      display: flex;
      img {
        height: 250px;       
        @media screen and (max-width: 600px) {
          height: 150px;
        }
        overflow: hidden;
      }
    }
    
  }
</style>
