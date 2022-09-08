<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <!-- <RouterLink to="/id">Pokemon por id</RouterLink> -->
    <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
      >Pokemon por id</router-link
    >
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #6fedd6;
  border-radius: 5px;
}
nav a {
  color: #f7f7f7;
  font-size: 18px;
}

nav .router-link-exact-active {
  color: #a084cf;
}
</style>
