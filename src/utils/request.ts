import URL from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const pokemonsOnPage = {
  limit: '9',
};

const req = async (endPoint: string, query: object = pokemonsOnPage) => {
  const uri = URL.format(getUrlWithParamsConfig(endPoint, query));
  const result = await fetch(uri).then((res) => res.json());
  return result;
};

export default req;
