<template>
  <div class="pokemon-container">
    <img :src="imgSrc" class="hidden-pokemon" alt="pokemon" />
    <!-- si showPokemon es true se muestra la img -->
    <!-- showPokemon es una props -->
    <img v-if="showPokemon" :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  // Las propiedades computadas se almacenan en caché según sus dependencias.
  // Una propiedad computada solo se volverá a evaluar cuando alguna de sus dependencias haya cambiado
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
