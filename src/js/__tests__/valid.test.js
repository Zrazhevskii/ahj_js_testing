import Luna from '../valid';

const validator = new Luna();

describe('Метод checkNumLength должен сравнивать переданную строку с шаблонами корректно', () => {
  test.each([
    ['Тест 1 false', '1111111', false],
    ['Тест 2 true', '11111111111111', true],
    ['Тест 3 true', '111111111111111', true],
    ['Тест 4 true', '1111111111111111', true],
    ['Тест 5 false', '11111111111111111111', false],
  ])(('Должен быть %s'), (_, input, expected) => {
    expect(validator.checkNumLength(input)).toBe(expected);
  });
});
