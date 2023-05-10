import { JsonSerializer } from "graphql-request/dist/types.dom";

function tryBase64Decode(input: string) {
  try {
    const decoded = Buffer.from(input, 'base64');
    if (decoded.toString('base64') === input) return decoded;
    return null;
  } catch {
    return null;
  }
}

function parseBlobs(input: any) : any {
  if (Array.isArray(input)) {
    return input.map(i => parseBlobs(i));
  }
  if (input instanceof Object && !Array.isArray(input)) {
    return Object.keys(input).reduce((memo, key) => {
      if (key === 'blob') {
        const decoded = tryBase64Decode(input[key]);
        if (decoded) {
          memo[key] = decoded;
          return memo;
        }
      }
      if (input[key] instanceof Object) {
        memo[key] = parseBlobs(input[key]);
        return memo;
      }
      memo[key] = input[key];
      return memo;
    }, <any>{});
  }

  return input;
}

const jsonSerializer : JsonSerializer = {
  stringify(obj) {
    return JSON.stringify(obj, (key, value) => {
      if (value instanceof Object && !Array.isArray(value)) {
        return Object.keys(value).reduce((memo, key) => {
          if (Buffer.isBuffer(value[key])) {
            memo[key] = value[key].toString('base64');
          } else {
            memo[key] = value[key];
          }
          return memo;
        }, <any>{});
      }
		  return value
    });
  },
  parse(obj: string) {
    return parseBlobs(JSON.parse(obj));
  }
}

export default jsonSerializer;