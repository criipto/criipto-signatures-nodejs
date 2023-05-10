# criipto-signatures-nodejs

A Node.js SDK for Criipto Signatures

[Examples](https://docs.criipto.com/signatures/graphql/examples/)

## Getting started

### Requirements

This library supports Node 16 and later.

### Installation

The SDK is available on [NPM](https://npmjs.com/package/@criipto/signaturess):

```
npm install --save @criipto/signatures
yarn add @criipto/signatures
```

### Configure the SDK

```javascript
import CriiptoSignatures from '@criipto/signatures';
const client = new CriiptoSignatures("{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}");
```

## Basic example

```javascript
import CriiptoSignatures from '@criipto/signatures';
const client = new CriiptoSignatures("{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}");

// Create signature order
const signatureOrder = await client.createSignatureOrder({
  titl: "Node.js sample",
  documents: [
    {
      pdf: {
        title: "Node.js Sample",
        blob: pdf, // Buffer
        storageMode: 'Temporary'
      }
    }
  ]
});

// Add signatory to signature order
const signatory = await client.addSignatory(signatureOrder.id);
console.log(signatory.href);

const closed = await client.closeSignatureOrder(signatureOrder.id);
```