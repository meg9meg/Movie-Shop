<template>
  <div class="movie">
    <div class="details">
        <div class="details-nav">
          <p>{{ movie.Title }}</p>   
        </div>
        <div class="details-main">
            <div class="details-left">
                <img :src="movie.Poster" alt="">
            </div>
            <div class="details-right">
                <p>{{ movie.Plot }}</p>
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
                    <font-awesome-icon class="add" icon="cart-plus" />
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

export default {
    setup () {
        const movie = ref({});
        const r = useRoute();

        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=${key.apikey}&i=${r.params.id}`)
                .then(res => res.json())
                .then(data => {
                    movie.value = data;
                })
        })
        return {
            movie
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

            .details-left {
                width: 50%;
                align-self: center;

                img {
                    @media screen and (max-width: 900px){
                        width: 90%;
                    }
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
                        font-size: 14px;
                }

                p {
                    width: 80%;
                }

                ul {
                    text-align: left;
                    list-style: none;
                    padding: 30px 0;
                }

                .movie-price {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    margin-top: 15px;
                    font-size: 35px;
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
    }
}
</style>