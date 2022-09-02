import { describe, test, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Indecision from '../../../src/components/Indecision.vue';

describe('Indecision component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Indecision);
  });

  test('debe de ser identico con el snapshot', () => {
    // toMatchSnapshot() garantiza que un valor coincida con la instantánea más reciente.
    expect(wrapper.html()).toMatchSnapshot();

    // actualizar snapshot
    // yarn test -u
  });

  test('p debe tener el valor por defecto "Recuerda terminar con un signo de interrogacion"', () => {
    const parrafo = wrapper.find('p');
    expect(parrafo.text()).toBe(
      'Recuerda terminar con un signo de interrogacion'
    );
  });
});
