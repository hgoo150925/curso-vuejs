<template>
  <h1>Counter - Vuex</h1>
  <!-- <p>Direct access: {{ $store.state.count }}</p> -->

  <!-- se agrega counter a $store.state... porque counter es el nombre que defini en el modulo -->
  <p>Direct access: {{ $store.state.counter.count }}</p>
  <p>Computed: {{ countComputed }}</p>

  <button @click="increment">+1</button>
  <button @click="incrementByArg">+5</button>
  <!-- <button @click="randomInt" :disabled="isLoading">random</button> -->
  <button @click="incrementRandomInt" :disabled="isLoading">random</button>

  <h1>mapState</h1>
  <p>mapState: {{ count }}</p>
  <p>lastMutation: {{ lastMutation }}</p>

  <h2>Direct getter: {{ $store.getters.squareCount }}</h2>
</template>

<script>
// mapState mapeemos todo lo que necesitemos del state del store
// mapState regresa propiedades computadas del state
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  //   computed: mapState(['count']),
  computed: {
    countComputed() {
      // return this.$store.state.count;
      // se agrega counter a $store.state... porque counter es el nombre que defini en el modulo
      return this.$store.state.counter.count;
    },
    // mapState regresa propiedades computadas del state
    // Formas distintas de usar el mapState
    // ...mapState(['count', 'lastMutation', 'isLoading']),
    // se agrega 'counter' al mapActions para referenciar al nombre del modulo de counter
    ...mapState('counter', ['count', 'lastMutation', 'isLoading']),

    // ...mapState({
    //   counter: state => state.count,
    // }),
  },

  methods: {
    // Este es el increment del componente no del store
    increment() {
      // commit('increment') llama a la mutations 'increment' del store
      // this.$store.commit('increment');

      // increment recibe el nombre del modulo de esta forma  this.$store.commit('counter/increment');
      this.$store.commit('counter/increment');
    },

    // // commit('incrementBy') llama a la mutations 'incrementBy' del store
    incrementByArg() {
      // this.$store.commit('incrementBy', 5);
      // recibe el nombre del modulo de esta forma this.$store.commit('counter/incrementBy', 5);
      this.$store.commit('counter/incrementBy', 5);
    },
    // ...mapActions(['incrementRandomInt']),
    // Si tengo un metodo que se llame randomInt puedo hacer lo siguiente:
    // mapActions habilita todo lo que tengo en los metodos
    // ...mapActions({
    //   // randomInt es el nombre que hace referencia a incrementRandomInt
    //   // randomInt se coloca en el @click
    //   randomInt: 'incrementRandomInt',
    // }),
    // se agrega 'counter' al mapActions para referenciar al nombre del modulo de counter
    ...mapActions('counter', ['incrementRandomInt']),
  },
};
</script>
