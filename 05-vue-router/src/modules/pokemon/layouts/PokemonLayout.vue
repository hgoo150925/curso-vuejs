<template>
  <div class="pokemon-layout">
    <h1>Pokemon Layout</h1>

    <!-- PokemonLayout puede tener rutas hijas y si las tiene renderizar aqui dentro  -->
    <router-view />
  </div>
</template>

<style scoped>
.pokemon-layout {
  /* background-color: deeppink; */
  border-radius: 5px;
  color: deeppink;
}
</style>
