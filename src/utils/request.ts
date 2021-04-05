import URL from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

/* const pokemonsOnPage = {
  limit: '9',
}; */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const req = async <T>(endPoint: string, query: object): Promise<any> => {
  const uri = URL.format(getUrlWithParamsConfig(endPoint, query));
  const result = await fetch(uri).then((res) => res.json());
  return result;
};

export default req;
