// el state es reactivo y cuando se cambia el state vamos a notificar a todos los componentes
// que escuchen los cambios de nuestro state
export default () => ({
  isLoading: true,
  entries: ['a', 'b', 'c'],
});
