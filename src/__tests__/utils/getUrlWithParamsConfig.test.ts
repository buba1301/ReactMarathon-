import getUrlWithParamsConfig from '../../utils/getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Вызов функции без query параметров', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'https',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Вызов функции с query параметрами', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'https',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('Вызов функции c query парметрами, кторые добавляются в pathname и удаляются из query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });
    expect(url).toEqual({
      protocol: 'https',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
