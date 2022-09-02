// Objeto Vue 
const app = Vue.createApp({
  // Aqui configuramos nuestra app de Vue
  // data() es el estado del componente que va a utilizar
  data() {
    return {
      // todo lo que esta dentro de este return es reactivo, al igual que sus propiedades
      message: 'Hi JavaScript!',
      quote: 'Novaseo!',
      author: 'Jonas'
    }
  },

  methods: {
    changeQuote() {
      this.quote = 'Not Yet!';
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    }
  }

})

// Vue se monta en el id app
app.mount('#app')