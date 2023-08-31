import Luna from '../valid';

const validator = new Luna();

describe('тест по валидности карты', () => {
  test.each([
    ['Тест 1 true', '4539148803436467', true],
    ['Тест 2 false', '8273123273520569', false],
    ['Тест 3', '6762976812058473', true],
  ])(('Должен быть %s'), (_, input, expected) => {
    expect(validator.checkCard(input)).toBe(expected);
  });
});

describe('тест по длине карты', () => {
  test.each([
    ['Тест 1 false', '1111111', false],
    ['Тест 2 false', '2222222222222222222222', false],
  ])(('Должен быть %s'), (_, input, expected) => {
    expect(validator.checkCard(input)).toBe(expected);
  });
});


