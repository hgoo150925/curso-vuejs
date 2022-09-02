import { describe, test, expect } from 'vitest';

describe('Testing...', () => {
  test('Debe de ser mayor a 10', () => {
    // Arreglar
    let value = 5;

    // Estimulo
    value += 10;
    // Observar el resultado
    expect(value).toBeGreaterThan(10);
  });
});
