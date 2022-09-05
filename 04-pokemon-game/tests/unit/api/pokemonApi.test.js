import { describe, test, expect } from 'vitest';

import pokemonApi from '../../../src/api/pokemonApi';

describe('pokemonApi', () => {
  test('axios debe de estar configurado con el API de pokemon', () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      'https://pokeapi.co/api/v2/pokemon'
    );
  });
});
