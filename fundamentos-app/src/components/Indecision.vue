<template>
  <img v-if="image" :src="image" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar con un signo de interrogacion</p>
    <!-- isValidQuestion si la pregunta es valida, se muestra la pregunta -->
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      answer: null,
      image: null,
      isValidQuestion: false,
    };
  },

  // https://vuejs.org/guide/essentials/watchers.html#basic-example
  // Con watch puedo estar pendiente a los cambios en la propiedad reactiva question
  // Si el valor de question cambia, puedo realizar una accion
  // Basicamente watch lo que hace es "observar" si hay un cambio o no en el estado de la propiedad, en este caso question
  // Si existe ese cambio, watch permite realizar cualquier accion que querramos
  watch: {
    question(newValue, oldValue) {
      this.isValidQuestion = false;
      // Si el nuevo valor de question no incluye un singo de interrogacion, que no haga nada
      if (!newValue.includes('?')) {
        return;
      }
      this.isValidQuestion = true;
      // https://yesno.wtf/
      this.getAnswer();
    },
  },

  methods: {
    async getAnswer() {
      this.answer = 'Pensando...';
      try {
        const { answer, image } = await fetch('https://yesno.wtf/api').then(
          res => res.json()
        );
        this.answer = answer === 'yes' ? 'Si' : 'No';
        this.image = image;
      } catch (error) {
        this.answer = `Error! Could not reach the API. ${error}`;
      }
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
