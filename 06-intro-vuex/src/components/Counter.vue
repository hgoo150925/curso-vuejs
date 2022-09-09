<template>
  <h1>Counter - Vuex</h1>
  <p>Direct access: {{ $store.state.count }}</p>
  <p>Computed: {{ countComputed }}</p>

  <button @click="increment">+1</button>
  <button @click="incrementByArg">+5</button>
  <button>random</button>

  <h1>mapState</h1>
  <p>mapState: {{ count }}</p>
  <p>lastMutation: {{ lastMutation }}</p>
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
    // mapState regresa propiedades computadas del state
    // Formas distintas de usar el mapState
    ...mapState(['count', 'lastMutation']),
    // ...mapState({
    //   counter: state => state.count,
    // }),
  },

  methods: {
    // Este es el increment del componente no del store
    increment() {
      // commit('increment') llama a la mutations 'increment' del store
      this.$store.commit('increment');
    },

    // // commit('incrementBy') llama a la mutations 'incrementBy' del store
    incrementByArg() {
      this.$store.commit('incrementBy', 5);
    },
  },
};
</script>
