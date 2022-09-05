import pokemonApi from '../api/pokemonApi';

// funcion que crea un arreglo de pokemons
export const getPokemons = () => {
  // crear un array
  // El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable o similar a una matriz
  // https://www.javascripttutorial.net/es6/javascript-array-from/
  const pokemonsArr = Array.from(Array(650)); // crea un array de la posicion 1 hasta 650
  return pokemonsArr.map((_, index) => index + 1);
};

// Toma el arreglo creado y lo mezcla de forma aleatoria
const getPokemonOptions = async () => {
  // Mezcla pokemones de manera aleatoria
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  // peticion de 4 pokemones
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
  return pokemons;
};

export const getPokemonNames = async ([pokeA, pokeB, pokeC, pokeD] = []) => {
  const promiseArr = [
    pokemonApi.get(`/${pokeA}`),
    pokemonApi.get(`/${pokeB}`),
    pokemonApi.get(`/${pokeC}`),
    pokemonApi.get(`/${pokeD}`),
  ];
  // const res = await pokemonApi.get(`/${1}`);
  // Promise.all() dispara promesas de manera simultanea
  const [poke1, poke2, poke3, poke4] = await Promise.all(promiseArr);

  return [
    { name: poke1.data.name, id: poke1.data.id },
    { name: poke2.data.name, id: poke2.data.id },
    { name: poke3.data.name, id: poke3.data.id },
    { name: poke4.data.name, id: poke4.data.id },
  ];
};

export default getPokemonOptions;
