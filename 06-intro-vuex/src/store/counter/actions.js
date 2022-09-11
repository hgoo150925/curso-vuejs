import { getRandomInt } from '../../helpers/getRandomInt';

export const incrementRandomInt = async ({ commit }) => {
  // Llamo a la mutations setLoading
  commit('setLoading', true);

  const randomInt = await getRandomInt();

  // Llamo a una mutacion con el commit
  commit('incrementBy', randomInt);
  commit('setLoading', false);
};
