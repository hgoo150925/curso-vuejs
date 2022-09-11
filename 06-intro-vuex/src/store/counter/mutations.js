// sirven para realizar cambios en el state
export const increment = state => {
  state.count++;
  state.lastMutation = 'increment';
};

// incrementar recibiendo un argumento
export const incrementBy = (state, value) => {
  state.count += value;
  state.lastRandomInt = value;
};

export const setLoading = (state, value) => {
  state.isLoading = value;
  state.lastMutation = 'setLoading: ' + value;
};
