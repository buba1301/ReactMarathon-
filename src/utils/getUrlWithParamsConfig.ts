import config from '../config';

const getUrlWithParamsConfig = (endPointConfig: string, query: object): object => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint].uri,
    query,
  };
  return url;
};

export default getUrlWithParamsConfig;
