import { omit } from 'lodash';

import config from '../config';

type IAcc = {
  url: string;
  query: object;
};

const getUrlWithParamsConfig = (endPointConfig: string, query: object): object => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
    },
  };

  const pathNameAndQuery = Object.keys(query).reduce(
    (acc: IAcc, key) => {
      const subStr = `{${key}}`;

      if (acc.url.indexOf(subStr) !== -1) {
        const newUrl = acc.url.replace(subStr, query[key as keyof typeof query]);
        const newQuery = omit(query, key);
        return { ...acc, url: newUrl, query: newQuery };
      }
      return acc;
    },
    {
      url: url.pathname,
      query,
    },
  );

  url.pathname = pathNameAndQuery.url;
  url.query = {
    ...pathNameAndQuery.query,
  };

  return url;
};

export default getUrlWithParamsConfig;
