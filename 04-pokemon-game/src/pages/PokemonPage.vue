<template>
  <!-- Si no existe un pokemon se muestra el h1 -->
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <!-- Si existe un pokemon se renderiza todo el contenido en el div -->
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <!-- selection es un $emit -->
    <!-- estoy escuchando el evento $emit (selection) que llama al metodo chechAnswer() -->
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />

    <!-- template se utiliza en vez de div -->
    <!-- si showAnswer es true se renderiza el titulo y el boton -->
    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';

import getPokemonOptions from '../helpers/getPokemonOptions';

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: '',
    };
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      // generamos un numero de manera aleatoria
      const randomInt = Math.floor(Math.random() * 4);

      // la prop pokemon es igual al pokemonArray en una posicion aleatoria
      this.pokemon = this.pokemonArr[randomInt];
    },
    // pokemonId es el valor que emite el evento en el $emit selection
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`;
      } else {
        this.message = `Oops, era ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },

  // https://vuejs.org/api/options-lifecycle.html#mounted
  // Se llama después de que se haya montado el componente.
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
