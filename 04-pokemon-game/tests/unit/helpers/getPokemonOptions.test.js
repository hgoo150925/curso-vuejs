import { describe, test, expect } from 'vitest';

import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from '../../../src/helpers/getPokemonOptions';

describe('getPokemonOptions', () => {
  test('debe regresar un arreglo de numeros', () => {
    const pokemon = getPokemons();
    expect(pokemon.length).toBe(650);
    expect(pokemon[0]).toBe(1);
    expect(pokemon[500]).toBe(501);
    expect(pokemon[649]).toBe(650);
  });

  test('debe regresar un arreglo de 4 elementos con nombres de pokemons', async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    const result = [
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 },
    ];

    expect(pokemons).toStrictEqual(result);
  });

  test('getPokemonOptions debe regresar un arreglo mezclado', async () => {
    const pokemons = await getPokemonOptions();

    const result = [
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ];

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual(result);
  });
});
