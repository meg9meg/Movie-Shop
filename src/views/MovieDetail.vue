<template>
  <div class="movie">
    <div class="details">
        <div class="details-nav">
          <p>{{ movie.Title }}</p>   
        </div>
        <div class="details-main">
            <div class="details-left">
                <img v-if="movie.Poster === 'N/A'" class="standard-image" src="https://us.123rf.com/450wm/vadmary/vadmary1704/vadmary170400009/75732094-popcorn-cinema-reel-disposable-cup-clapper-board-and-tickets-at-blue-background-concept-cinema-theat.jpg?ver=6">
                <img v-else :src="movie.Poster">
            </div>
            <div class="details-right">
                <p v-if="movie.Poster != 'N/A'">{{ movie.Plot }}</p>
                <p v-else >No plot description for this movie :(</p>
                <ul>
                    <li><b>Type: </b>{{ movie.Genre }}</li>
                    <li><b>Duration: </b>{{ movie.Runtime }}</li>
                    <li><b>Language: </b>{{ movie.Language }}</li>
                    <li><b>Director: </b>{{ movie.Director }}</li>
                    <li><b>Year: </b>{{ movie.Year }}</li>
                    <li><b>Main actors: </b>{{ movie.Actors }}</li>
                    <li><b>IMDB rating: </b>{{ movie.imdbRating }}</li>
                </ul>
                <div class="movie-price">
                    <h4>12$</h4>
                    <font-awesome-icon class="add" icon="cart-plus" @click="addToCart(movie)"/>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import key from '@/apikey.js';
import { useStore } from 'vuex';

export default {
    setup () {
        const store = useStore();
        const movie = ref({});
        const r = useRoute();

        onBeforeMount(() => {
            fetch(`https://www.omdbapi.com/?apikey=${key.apikey}&i=${r.params.id}`)
                .then(res => res.json())
                .then(data => {
                    movie.value = data;
                })
        })

        const addToCart = (movie) => {
            store.commit('addToCart', movie)
        }

        return {
            movie,
            addToCart
        }
    }
}
</script>

<style scoped lang="scss">
.movie {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #F4F1DE;
    min-height: calc(100vh - 95px);

    .details{
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .details-nav {
            width: 100%;
            height: 60px;
            background-color: #E07A5F;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
            color: #F4F1DE;

            @media screen and (max-width: 900px){
                font-size: 18px;
            }
        }

        .details-main {
            width: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            @media screen and (max-width: 900px){
                flex-direction: column;
            }

            .details-left {
                width: 50%;
                align-self: center;
                @media screen and (max-width: 900px){
                    width: 100%;
                }
            }

            .details-right {
                padding-right: 30px;
                width: 50%;
                height: 100%;
                align-self: center;
                text-align: justify;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                @media screen and (max-width: 900px){
                    width: 100%;
                    padding-right: 0;
                }

                p {
                    width: 80%;
                    @media screen and (max-width: 900px){
                        align-self: center;
                    }
                }

                ul {
                    text-align: left;
                    list-style: none;
                    padding: 30px 0;
                    @media screen and (max-width: 900px){
                        width: 80%;
                        align-self: center;
                    }
                }

                .movie-price {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    margin-top: 15px;
                    font-size: 35px;
                    color: #E07A5F;
                    @media screen and (max-width: 900px){
                        justify-content: center;
                    }

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
    }
}
</style>