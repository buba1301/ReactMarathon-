import { omit } from 'lodash';
import config from '../config';
import { IQuery } from '../pages/Pockedex';

type IAcc = {
  url: string;
  query: IQuery;
};

const getUrlWithParamsConfig = (endPointConfig: string, query: IQuery): object => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint].uri,
    query: {
      ...query,
    },
  };

  const pathNameAndQuery = Object.keys(query).reduce(
    (acc: IAcc, key: string) => {
      const subStr = `{${key}}`;

      const queryValueForUrl = query[key];

      if (acc.url.indexOf(subStr) !== -1) {
        const newUrl = acc.url.replace(subStr, queryValueForUrl as string);
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
