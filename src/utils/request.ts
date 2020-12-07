/* eslint-disable no-console */
import URL from "url";
import { IQuery } from "../pages/Pockedex";
import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const req = async <T>(endPoint: string, query: IQuery): Promise<any> => {
  const uri = URL.format(getUrlWithParamsConfig(endPoint, query));
  console.log("URL", uri);

  const result = await fetch(uri).then((res) => res.json());
  return result;
};

export default req;
