<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <h1>Journal App</h1>

  <button @click="goToDaybook" class="btn btn-primary">Primary</button>
  <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
  <button @click="goToDaybook" class="btn btn-success">Success</button>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook' });
    },
  },
};
</script>
