import { IRequestInput, IRequestOptions } from './shared/types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

const sendRequest = async (input: IRequestInput) => {
  //const res = await fetch(input, );
};


const sendGET = (input: IRequestInput) => {
  //const req = new Request(input, );
};




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  IRequestInput,
  IRequestOptions,

  // implementation
  sendRequest,
  sendGET,
};
