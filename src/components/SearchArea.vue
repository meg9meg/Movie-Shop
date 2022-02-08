<template>
  <div class="search">

    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" v-model="title" placeholder="Search for movie" >
      <input type="submit" value="&#xf002;">
    </form>

    <div class="movie-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link style="text-decoration: none" :to="'/movie/' + movie.imdbID" class="movie-link">
            <div class="movie-image">
              <img :src="movie.Poster" alt="Movie Poster">
              <!--div class="movie-type">{{ movie.Type }}</div-->
            </div>
            <div class="movie-detail">
              <p class="movie-year">{{ movie.Year }}</p>
              <h3>{{ movie.Title }}</h3>
            </div>
        </router-link>
          <div class="movie-price">
            <h4>12$</h4>
            <font-awesome-icon class="add" icon="cart-plus" />
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import key from '@/apikey.js';

export default { 
  name: 'SearchArea',

  setup() {
      const title = ref("");
      const movies = ref([]);

      const SearchMovies = () => {
        if(title.value != ""){
          fetch(`http://www.omdbapi.com/?apikey=${key.apikey}&s=${title.value}`)
            .then(response => response.json())
            .then(data => {
              movies.value = data.Search;
              title.value = "";
            })
        }
      }

      return {
          title,
          movies,
          SearchMovies
      }
  }
}
</script>

<style scoped lang="scss">
@import url("https://use.fontawesome.com/releases/v5.0.1/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');



.search {
    display: flex;
    flex-direction: column;

    .search-box {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #81B29A;

        input {
            display: block;
            appearance: none;
            border: none;
            outline: none;
            background: none;
            font-size: 20px;

            &[type="text"] {
                height: 30px;
                width: 35%;
                padding: 5px;
                color: #2c3e50;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            
            &[type="submit"] {
                background-color: #E07A5F;
                color: #F4F1DE;
                font-family: 'Font Awesome 5 Free', Tahoma;
                font-weight: 900;
                font-size: 25px;
                cursor: pointer;
                margin-left: 30px;
                height: 40px;
                width: 60px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
        }
    }

    .movie-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        background-color: #3D405B;
        

        .movie {
            width: 300px;
            padding: 15px 20px;
            margin: 15px 15px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            background-color: #3D405B;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .movie-detail {
              font-family: Raleway;
              font-size: 20px;
              color: #81B29A;
              text-decoration: none;

              .movie-year {
                color: #F4F1DE;
                margin-bottom: 15px;
              }
            }
        }

        .movie-price {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 15px;
          font-size: 23px;
          color: #E07A5F;

          .add {
            background-color: #F4F1DE;
            padding: 10px 10px;
            border-radius: 50%;
            margin-left: 10px;
            cursor: pointer;

            &:hover {
              background-color: #81B29A;
            }
          }
        }
    }
}
</style>