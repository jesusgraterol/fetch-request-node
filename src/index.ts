/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-console */
import {
  IRequestInput,
  IRequestMethod,
  IRequestOptions,
  IResponseDataType,
  IOptions,
  IRequestResponse,
} from './shared/types.js';
import {
  buildOptions,
  buildRequest,
  extractResponseData,
} from './utils/utils.js';
import { validateResponse } from './validations/validations.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Builds and sends an HTTP Request based on the provided input and options.
 * @param input
 * @param options?
 * @returns Promise<IRequestResponse<T>>
 * @throws
 * - INVALID_REQUEST_URL: if the provided input URL cannot be parsed
 * - INVALID_REQUEST_HEADERS: if invalid headers are passed in object format
 * - INVALID_REQUEST_OPTIONS: if the Request Instance cannot be instantiated due to the passed opts
 * - UNEXPECTED_RESPONSE_STATUS_CODE: if the code doesn't meet the requirements set in the options
 * - INVALID_RESPONSE_CONTENT_TYPE: if the res lacks the Content-Type Header or is an empty string
 * - CONTENT_TYPE_MISSMATCH: if the Content-Type Headers don't match
 * - INVALID_RESPONSE_DTYPE: if the data type is not supported by the Response Instance
 */
const send = async <T>(
  input: IRequestInput,
  options?: Partial<IOptions>,
): Promise<IRequestResponse<T>> => {
  // build the options
  const opts = buildOptions(options);

  // build the request
  const req = buildRequest(input, opts.requestOptions);

  // send the request
  const res = await fetch(req);

  // validate the response
  validateResponse(req, res, opts);

  // print a warning in case the request was redirected
  if (res.redirected) {
    console.warn(`The request sent to '${req.url}' was redirected. Please update the implementation to avoid future redirections.`);
  }

  // return the request's response
  return {
    code: res.status,
    headers: res.headers,
    data: await extractResponseData<T>(res, opts.responseDataType),
  };
};

/**
 * Builds and sends a GET HTTP Request based on the provided input and options.
 * @param input
 * @param options?
 * @returns Promise<IRequestResponse<T>>
 * @throws
 * - INVALID_REQUEST_URL: if the provided input URL cannot be parsed
 * - INVALID_REQUEST_HEADERS: if invalid headers are passed in object format
 * - INVALID_REQUEST_OPTIONS: if the Request Instance cannot be instantiated due to the passed opts
 * - UNEXPECTED_RESPONSE_STATUS_CODE: if the code doesn't meet the requirements set in the options
 * - INVALID_RESPONSE_CONTENT_TYPE: if the res lacks the Content-Type Header or is an empty string
 * - CONTENT_TYPE_MISSMATCH: if the Content-Type Headers don't match
 * - INVALID_RESPONSE_DTYPE: if the data type is not supported by the Response Instance
 */
const sendGET = <T>(
  input: IRequestInput,
  options?: Partial<IOptions>,
): Promise<IRequestResponse<T>> => send<T>(
  input,
  {
    ...options,
    requestOptions: {
      ...options?.requestOptions,
      method: 'GET',
    },
  },
);

/**
 * Builds and sends a POST HTTP Request based on the provided input and options.
 * @param input
 * @param options?
 * @returns Promise<IRequestResponse<T>>
 * @throws
 * - INVALID_REQUEST_URL: if the provided input URL cannot be parsed
 * - INVALID_REQUEST_HEADERS: if invalid headers are passed in object format
 * - INVALID_REQUEST_OPTIONS: if the Request Instance cannot be instantiated due to the passed opts
 * - UNEXPECTED_RESPONSE_STATUS_CODE: if the code doesn't meet the requirements set in the options
 * - INVALID_RESPONSE_CONTENT_TYPE: if the res lacks the Content-Type Header or is an empty string
 * - CONTENT_TYPE_MISSMATCH: if the Content-Type Headers don't match
 * - INVALID_RESPONSE_DTYPE: if the data type is not supported by the Response Instance
 */
const sendPOST = <T>(
  input: IRequestInput,
  options?: Partial<IOptions>,
): Promise<IRequestResponse<T>> => send<T>(
  input,
  {
    ...options,
    requestOptions: {
      ...options?.requestOptions,
      method: 'POST',
    },
  },
);

/**
 * Builds and sends a PUT HTTP Request based on the provided input and options.
 * @param input
 * @param options?
 * @returns Promise<IRequestResponse<T>>
 * @throws
 * - INVALID_REQUEST_URL: if the provided input URL cannot be parsed
 * - INVALID_REQUEST_HEADERS: if invalid headers are passed in object format
 * - INVALID_REQUEST_OPTIONS: if the Request Instance cannot be instantiated due to the passed opts
 * - UNEXPECTED_RESPONSE_STATUS_CODE: if the code doesn't meet the requirements set in the options
 * - INVALID_RESPONSE_CONTENT_TYPE: if the res lacks the Content-Type Header or is an empty string
 * - CONTENT_TYPE_MISSMATCH: if the Content-Type Headers don't match
 * - INVALID_RESPONSE_DTYPE: if the data type is not supported by the Response Instance
 */
const sendPUT = <T>(
  input: IRequestInput,
  options?: Partial<IOptions>,
): Promise<IRequestResponse<T>> => send<T>(
  input,
  {
    ...options,
    requestOptions: {
      ...options?.requestOptions,
      method: 'PUT',
    },
  },
);

/**
 * Builds and sends a PATCH HTTP Request based on the provided input and options.
 * @param input
 * @param options?
 * @returns Promise<IRequestResponse<T>>
 * @throws
 * - INVALID_REQUEST_URL: if the provided input URL cannot be parsed
 * - INVALID_REQUEST_HEADERS: if invalid headers are passed in object format
 * - INVALID_REQUEST_OPTIONS: if the Request Instance cannot be instantiated due to the passed opts
 * - UNEXPECTED_RESPONSE_STATUS_CODE: if the code doesn't meet the requirements set in the options
 * - INVALID_RESPONSE_CONTENT_TYPE: if the res lacks the Content-Type Header or is an empty string
 * - CONTENT_TYPE_MISSMATCH: if the Content-Type Headers don't match
 * - INVALID_RESPONSE_DTYPE: if the data type is not supported by the Response Instance
 */
const sendPATCH = <T>(
  input: IRequestInput,
  options?: Partial<IOptions>,
): Promise<IRequestResponse<T>> => send<T>(
  input,
    {
    ...options,
    requestOptions: {
      ...options?.requestOptions,
      method: 'PATCH',
    },
  },
);

/**
 * Builds and sends a DELETE HTTP Request based on the provided input and options.
 * @param input
 * @param options?
 * @returns Promise<IRequestResponse<T>>
 * @throws
 * - INVALID_REQUEST_URL: if the provided input URL cannot be parsed
 * - INVALID_REQUEST_HEADERS: if invalid headers are passed in object format
 * - INVALID_REQUEST_OPTIONS: if the Request Instance cannot be instantiated due to the passed opts
 * - UNEXPECTED_RESPONSE_STATUS_CODE: if the code doesn't meet the requirements set in the options
 * - INVALID_RESPONSE_CONTENT_TYPE: if the res lacks the Content-Type Header or is an empty string
 * - CONTENT_TYPE_MISSMATCH: if the Content-Type Headers don't match
 * - INVALID_RESPONSE_DTYPE: if the data type is not supported by the Response Instance
 */
const sendDELETE = <T>(
  input: IRequestInput,
  options?: Partial<IOptions>,
): Promise<IRequestResponse<T>> => send<T>(
  input,
  {
    ...options,
    requestOptions: {
      ...options?.requestOptions,
      method: 'DELETE',
    },
  },
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IRequestInput,
  type IRequestMethod,
  type IRequestOptions,
  type IResponseDataType,
  type IOptions,
  type IRequestResponse,

  // implementation
  send,
  sendGET,
  sendPOST,
  sendPUT,
  sendPATCH,
  sendDELETE,
};
