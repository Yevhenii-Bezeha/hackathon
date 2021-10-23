import qs from 'qs';
import { API_ROOT, HttpMethods } from 'common';

type TBody =
  | {
      [key: string]: string | number;
    }
  | string
  | number;

type THeader = Headers | string[][] | Record<string, string> | undefined;

interface IRequestArgs {
  endpoint: string;
  method?: string;
  query?: {
    [key: string]: string | number;
  };
  body?: TBody;
}

interface IRequestInit {
  method: string;
  headers: THeader;
  body?: FormData | string;
}

async function callApi(args: IRequestArgs): Promise<Response> {
  return fetch(getUrl(args), getArgs(args));
}

const getUrl = ({ endpoint, query }: IRequestArgs): RequestInfo =>
  API_ROOT + endpoint + (query ? `?${qs.stringify(query)}` : '');

const getArgs = (args: IRequestArgs): RequestInit => {
  const headers: THeader = {};
  let body: TBody | null = null;

  if (args.body) {
    if (args.method === 'GET') {
      throw new Error('GET request does not support request body.');
    }
    if (args.body instanceof FormData) {
      body = args.body;
    } else {
      body = JSON.stringify(args.body);
      headers['Content-Type'] = 'application/json';
    }
    headers.Accept = 'application/json';
  }

  return {
    method: args.method || HttpMethods.GET,
    headers,
    ...(args.method === 'POST' && body ? { body } : {}),
  } as IRequestInit;
};

export default callApi;
