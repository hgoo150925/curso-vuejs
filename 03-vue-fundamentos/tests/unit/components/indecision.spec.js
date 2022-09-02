import { describe, test, expect, beforeEach, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Indecision from '../../../src/components/Indecision.vue';

describe('Indecision component', () => {
  let wrapper;
  let spy; // Spy son espias que estan pendientes de cualquier suceso
  let getAnswerSpy;
  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    spy = vi.spyOn(console, 'log');
    // vm -> https://v1.test-utils.vuejs.org/api/wrapper/
    getAnswerSpy = vi.spyOn(wrapper.vm, 'getAnswer');

    vi.clearAllMocks();
  });

  test('debe de ser identico con el snapshot', () => {
    // toMatchSnapshot() garantiza que un valor coincida con la instantánea más reciente.
    expect(wrapper.html()).toMatchSnapshot();

    // actualizar snapshot
    // yarn test -u
  });

  test('escribir en el input no debe de disparar nada (console.log)', async () => {
    const input = wrapper.find('input');
    // establecer valor al input
    await input.setValue('Hi Nuxt');
    // verificar que el spy haya sido llamado
    // expect(spy).toHaveBeenCalled();
    // verificar que el spy haya sido llamado por lo menos 1 vez
    expect(spy).toHaveBeenCalledTimes(1);

    // verificar que la funcion getAnswer no haya sido llamado
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test('escribir el simbolo de "?" debe disparar el getAnswer', async () => {
    const input = wrapper.find('input');
    // establecer valor al input
    await input.setValue("What's up?");

    // verificar que la funcion getAnswer haya sido llamado 1 vez si el input contiene "?"
    expect(getAnswerSpy).toHaveBeenCalledTimes(1);
  });

  test('pruebas en getAnswer', () => {});

  test('pruebas en getAnswer - Fallo en el API', () => {});
});
