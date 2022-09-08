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

// https://lenguajejs.com/vuejs/componentes/ciclo-vida/
// https://codingpotions.com/vue-ciclo-vida

export default {
  data() {
    return {
      name: 'Bruno',
    };
  },

  watch: {
    name(value, oldValue) {
      if (value) {
        console.log('WATCH ', value, 'old value', oldValue);
      }
    },
  },

  methods: {
    onChangeName() {
      console.log('Se cambiara el nombre a Millefiori');
      this.name = 'Millefiori';
    },
  },

  // Lifecycle Hooks del componente

  // beforeCreate, que es cuando se inicializa y comienza a crear el componente
  // Al inicializar y antes de procesar opciones.
  beforeCreate() {
    console.log('beforeCreate');
  },

  // Después de crearse. Los datos ya están disponibles
  created() {
    console.log('created');
  },

  // Inmediatamente antes de la fase de montaje en el DOM.
  beforeMount() {
    console.log('beforeMount');
  },

  // mounted es el momento en el que un componente se ha cargado y mostrado en la página
  // Al mostrarse en la página. No se garantiza montaje de hijos.
  mounted() {
    console.log('mounted');
  },

  // antes que se actualice el DOM y las propiedades reactivas
  // Cuando cambian los datos (antes de modificar el DOM)
  beforeUpdate() {
    console.log('beforeUpdate');
    console.log('Ojo, esta a punto de actualizarse');
  },

  // termino el proceso de actualizacion del DOM
  // Cuando cambian los datos y el DOM ha sido modificado.
  // updated es ideal para realizar peticiones HTTP ya que tenemos la referencia al componente, la data
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

  // Justo antes del desmontaje, pero siendo aún funcional
  beforeUnmount() {
    console.log('beforeUnmount');
  },

  // Justo cuando un componente (y todos sus hijos) ha sido desmontado.
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
