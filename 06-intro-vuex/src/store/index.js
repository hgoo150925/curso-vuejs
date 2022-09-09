import { createStore } from 'vuex';

import { getRandomInt } from '../helpers/getRandomInt';

export default createStore({
  // parecido a la data() en el OptionAPi
  state: {
    count: 1,
    lastMutation: 'none',
    isLoading: false,
    lastRandomInt: 0,
  },

  // mutations son como metodos (methods)
  // llamaremos a esta mutations por medio de un commit en el componente
  mutations: {
    // sirven para realizar cambios en el state
    increment(state) {
      state.count++;
      state.lastMutation = 'increment';
    },

    // incrementar recibiendo un argumento
    incrementBy(state, value) {
      state.count += value;
      state.lastRandomInt = value;
    },
  },

  // Funciones que pueden ser asíncronas que también pueden llamar mutations
  // Las acciones cambian el state a traves de una mutations
  actions: {
    async incrementRandomInt(context) {
      const randomInt = await getRandomInt();

      // Llamo a una mutacion con context
      context.commit('incrementBy', randomInt);
    },
  },
});
