<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
</template>

<script>
// mapState mapeemos todo lo que necesitemos del state del store
// mapState regresa propiedades computadas del state
import { mapState } from 'vuex';

export default {
  //   computed: mapState(['count']),
  computed: {
    countComputed() {
      return this.$store.state.count * 2;
    },
    // Formas distintas de usar el mapState
    // ...mapState(['count']),
    ...mapState({
      counter: state => state.count,
    }),
  },
};
</script>
