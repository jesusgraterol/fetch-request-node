# Fetch Request Node

The `fetch-request-node` package makes working with external APIs simple and efficient. This intuitive wrapper leverages the power of the Fetch API, providing a clean and concise interface for your API interactions.

If you are working on a browser-based environment, make use of [fetch-request-browser](https://github.com/jesusgraterol/fetch-request-browser) instead.



<br />

## Getting Started

Install the package:
```bash
npm install -S fetch-request-node
```

## Examples

Send a `GET` request to [HTTPBin](https://httpbin.org/):

```typescript
import { sendGET } from 'fetch-request-node';

await sendGET('https://httpbin.org/get');
// {
//   code: 200,
//   headers: Headers {
//     date: 'Tue, 04 Jun 2024 18:52:29 GMT',
//     'content-type': 'application/json',
//     'content-length': '407',
//     connection: 'keep-alive',
//     server: 'gunicorn/19.9.0',
//     'access-control-allow-origin': '*',
//     'access-control-allow-credentials': 'true'
//   },
//   data: {
//     args: {},
//     headers: {
//       Accept: 'application/json',
//       'Accept-Encoding': 'br, gzip, deflate',
//       'Accept-Language': '*',
//       'Content-Type': 'application/json',
//       Host: 'httpbin.org',
//       'Sec-Fetch-Mode': 'cors',
//       'User-Agent': 'node',
//       'X-Amzn-Trace-Id': '...'
//     },
//     origin: '...',
//     url: 'https://httpbin.org/get'
//   }
// }
```





<br/>

## API Reference

Build and send an HTTP Request (any method):

```typescript
send(
  input: IRequestInput, 
  options?: Partial<IOptions>
): Promise<IRequestResponse>
```

<br />

Build and send a `GET` HTTP Request:
```typescript
sendGET(
  input: IRequestInput,
  options?: Partial<IOptions>
): Promise<IRequestResponse>
```

<br />

Build and send a `POST` HTTP Request:
```typescript
sendPOST(
  input: IRequestInput,
  options?: Partial<IOptions>
): Promise<IRequestResponse>
```

<br />

Build and send a `PUT` HTTP Request:
```typescript
sendPUT(
  input: IRequestInput,
  options?: Partial<IOptions>
): Promise<IRequestResponse>
```

<br />

Build and send a `PATCH` HTTP Request:
```typescript
sendPATCH(
  input: IRequestInput,
  options?: Partial<IOptions>
): Promise<IRequestResponse>
```

<br />

Build and send a `DELETE` HTTP Request:
```typescript
sendDELETE(
  input: IRequestInput,
  options?: Partial<IOptions>
): Promise<IRequestResponse>
```



<br />

## Types





<br />

## Built With

- TypeScript




<br />

## Running the Tests

```bash
# unit tests
npm run test:unit

# integration tests
npm run test:integration
```





<br />

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br />

## Deployment

Install dependencies:
```bash
npm install
```


Build the library:
```bash
npm start
```


Publish to `npm`:
```bash
npm publish
```