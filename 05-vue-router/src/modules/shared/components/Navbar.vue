<template>
  <nav>
    <!-- <RouterLink :to="{ name: 'home' }">Home</RouterLink> -->
    <!-- <RouterLink to="/id">Pokemon por id</RouterLink> -->
    <!-- <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
      >Pokemon por id</router-link
    > -->
    <!-- <RouterLink :to="{ name: 'about' }">About</RouterLink> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </nav>
</template>

<script>
import CustomLink from './CustomLink.vue';

export default {
  components: { CustomLink },
  data() {
    return {
      links: [
        { to: 'pokemon-home', name: 'Pokemons' },
        { to: 'pokemon-id', name: 'Por ID', id: 151 },
        { to: 'pokemon-about', name: 'About' },

        // { to: 'dbz-characters', name: 'Personajes' },
        // { to: 'dbz-about', name: 'DBZ-About' },

        { to: 'https://google.com', name: 'Google' },
      ],
    };
  },
};
</script>

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
