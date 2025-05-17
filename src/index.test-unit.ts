import { describe, afterEach, test, expect, vi, Mock } from 'vitest';
import { buildRequest } from './utils/utils.js';
import { send } from './index.js';

/* ************************************************************************************************
 *                                            HELPERS                                             *
 ************************************************************************************************ */

// retrieves a mocked instance of the global fetch func
const mFetch = (): Mock => fetch as Mock;

// retrieves the args that were passed when fetch was called for a given call index (starts at 0)
const getFetchCallArg = (callIndex: number): any => {
  const mockedFn = mFetch();
  if (mockedFn.mock.calls.length < callIndex + 1) {
    throw new Error(`The mock function was only called ${mockedFn.mock.calls.length} times. Attempted to access call # ${callIndex + 1}`);
  }
  return mockedFn.mock.calls[callIndex][0];
};



/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('fetch-request', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('send', () => {
    test('can send a request with default options', async () => {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const data = { success: true };
      vi.stubGlobal('fetch', vi.fn(async () => ({
        status: 200,
        statusText: 'OK',
        headers,
        json: () => Promise.resolve(data),
      })));
      await expect(send('https://www.google.com')).resolves.toStrictEqual({
        code: 200,
        statusText: 'OK',
        headers,
        data,
      });
      expect(fetch).toHaveBeenCalledOnce();
      expect(getFetchCallArg(0)).toStrictEqual(buildRequest('https://www.google.com'));
    });
  });
});
