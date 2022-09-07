<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Change name</button>
</template>

<script>
// Lifecycle Hooks es una funcion que se ejecuta en cierto momento del tiempo
// https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
// https://vuejs.org/api/composition-api-lifecycle.html
// https://vuejs.org/api/options-lifecycle.html#beforecreate

export default {
  data() {
    return {
      name: 'Bruno',
    };
  },

  methods: {
    onChangeName() {
      this.name = 'Millefiori';
    },
  },

  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },

  // antes que se actualice el DOM y las propiedades reactivas
  beforeUpdate() {
    console.log('beforeUpdate');
    console.log('Ojo, esta a punto de actualizarse');
  },

  // termino el proceso de actualizacion del DOM
  updated() {
    console.log('updated');
    console.log('Se actualizo, viste?');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  errorCaptured() {
    console.log('errorCaptured');
  },
  renderTracked() {
    console.log('renderTracked');
  },
  renderTriggered() {
    console.log('renderTriggered');
  },
};
</script>
