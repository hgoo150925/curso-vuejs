import { createStore } from 'vuex';

export default createStore({
  // parecido a la data() en el OptionAPi
  state: {
    count: 1,
    lastMutation: 'none',
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
    },
  },
});
