import test from 'ava';

import jsonSerializer from '../../json-serializer';


test('jsonSerializer is pass through', t => {
  const expected = {"title": "title"};

  const actual = jsonSerializer.parse(jsonSerializer.stringify(expected));
  
  t.deepEqual(expected, actual);
});

test('jsonSerializer stringifies blobs', t => {
  const blob = Buffer.from('abc');
  const input = {
    blob
  };

  const actual = jsonSerializer.stringify(input);

  t.is(JSON.stringify({
    blob: blob.toString('base64')
  }), actual);
});

test('jsonSerializer stringifies nested blobs', t => {
  const blob = Buffer.from('abc');
  const input = {
    document: {
      blob
    }
  };

  const actual = jsonSerializer.stringify(input);

  t.is(JSON.stringify({
    document: {
      blob: blob.toString('base64')
    }
  }), actual);
});

test('jsonSerializer parses nested base64 blobs', t => {
  const blob = Buffer.from('abc');
  const input = JSON.stringify({
    document: {
      blob: blob.toString('base64')
    }
  });

  const actual = jsonSerializer.parse(input);

  const expected = {
    document: {
      blob
    }
  };
  t.deepEqual(expected, actual);
});

test('jsonSerializer parses array of nested base64 blobs', t => {
  const blob = Buffer.from('abc');
  const input = JSON.stringify({
    documents: [{
      blob: blob.toString('base64')
    }]
  });

  const actual = jsonSerializer.parse(input);

  const expected = {
    documents: [{
      blob
    }]
  };
  t.deepEqual(expected, actual);
});