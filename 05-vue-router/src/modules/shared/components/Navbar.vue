<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/id">Pokemon Page</RouterLink>
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
</style>
