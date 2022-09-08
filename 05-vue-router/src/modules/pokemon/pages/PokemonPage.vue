<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
    <p>{{ pokemonName }}</p>

    <!-- v-if="pokemon" -> si tenemos la data del pokemon podemos renderizar este div -->
    <div v-if="pokemon">
      <img :src="pokemonImage" :alt="pokemonName" />
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      // id: this.$route.params.id,
      pokemonName: '',
      pokemon: null,
      pokemonImage: null,
    };
  },
  created() {
    // const { id } = this.$route.params;
    // this.id = id;
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then(r => r.json());
        console.log(pokemon);
        this.pokemon = pokemon;
        this.pokemonName = pokemon.name;
        this.pokemonImage = pokemon.sprites.front_default;
      } catch (error) {
        // push mantiene la historia
        // si existe un error envio a la pagina home
        this.$router.push('/');
        console.log('No hay nada que hacer aquí');
      }
    },
  },

  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>
