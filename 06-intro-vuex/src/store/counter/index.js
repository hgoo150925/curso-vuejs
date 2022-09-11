import state from './state';
import { increment, incrementBy, setLoading } from './mutations';
import { incrementRandomInt } from './actions';
import { squareCount } from './getters';

export const counterStore = {
  namespaced: true,
  // parecido a la data() en el OptionAPi
  // state: () =>({}) -> con esta sintaxis el state pasa a ser reactivo
  state: state,
  // state: () => ({
  //   count: 1,
  //   lastMutation: 'none',
  //   isLoading: false,
  //   lastRandomInt: 0,
  // }),

  // mutations son como metodos (methods)
  // llamaremos a esta mutations por medio de un commit en el componente
  mutations: {
    increment,
    incrementBy,
    setLoading,
    // // sirven para realizar cambios en el state
    // increment(state) {
    //   state.count++;
    //   state.lastMutation = 'increment';
    // },
    // // incrementar recibiendo un argumento
    // incrementBy(state, value) {
    //   state.count += value;
    //   state.lastRandomInt = value;
    // },
    // setLoading(state, value) {
    //   state.isLoading = value;
    //   state.lastMutation = 'setLoading: ' + value;
    // },
  },

  // Funciones que pueden ser asíncronas que también pueden llamar mutations
  // Las acciones cambian el state a traves de una mutations
  actions: {
    incrementRandomInt,
    // async incrementRandomInt({ commit }) {
    //   // Llamo a la mutations setLoading
    //   commit('setLoading', true);
    //   const randomInt = await getRandomInt();
    //   // Llamo a una mutacion con el commit
    //   commit('incrementBy', randomInt);
    //   commit('setLoading', false);
    // },
  },

  getters: {
    squareCount,
    // los getters reciben el argumento del state
    // squareCount(state) {
    //   return state.count * state.count;
    // },
  },
};
