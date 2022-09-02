import { describe, test, expect, beforeEach, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Indecision from '../../../src/components/Indecision.vue';

describe('Indecision component', () => {
  let wrapper;
  let spy; // Spy son espias que estan pendientes de cualquier suceso

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    spy = vi.spyOn(console, 'log');
  });

  test('debe de ser identico con el snapshot', () => {
    // toMatchSnapshot() garantiza que un valor coincida con la instantánea más reciente.
    expect(wrapper.html()).toMatchSnapshot();

    // actualizar snapshot
    // yarn test -u
  });

  test('escribir en el input no debe de disparar nada (console.log)', async () => {
    // vm -> https://v1.test-utils.vuejs.org/api/wrapper/
    const getAnswerSpy = vi.spyOn(wrapper.vm, 'getAnswer');
    const input = wrapper.find('input');
    // establecer valor al input
    await input.setValue('Hola mundo');
    // verificar que el spy haya sido llamado
    // expect(spy).toHaveBeenCalled();
    // verificar que el spy haya sido llamado por lo menos 1 vez
    expect(spy).toHaveBeenCalledTimes(1);

    // verificar que la funcion getAnswer no haya sido llamado
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test('escribir el simbolo de "?" debe disparar el fetch', () => {});

  test('pruebas en getAnswer', () => {});

  test('pruebas en getAnswer - Fallo en el API', () => {});
});
