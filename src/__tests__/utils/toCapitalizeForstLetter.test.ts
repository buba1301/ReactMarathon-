import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

describe('Test capitalize function', () => {
  test('Function return capitalize string', () => {
    const str = 'test';
    const result = 'Test';
    expect(toCapitalizeFirstLetter(str)).toBe(result);
  });
});
