import test from 'ava';
import fs from 'fs';

import CriiptoSignatures from '../../';
import { DocumentStorageMode } from '../../graphql-sdk';

const sample = fs.readFileSync(__dirname + '/sample.pdf');
const sampleForm = fs.readFileSync(__dirname + '/sample-form.pdf');

const documentFixture = {
  pdf: {
    title: "Node.js Sample",
    blob: sample, // Buffer
    storageMode: <DocumentStorageMode>'Temporary'
  }
};

function arrange() {
  const client = new CriiptoSignatures(
    process.env.CRIIPTO_SIGNATURES_CLIENT_ID!,
    process.env.CRIIPTO_SIGNATURES_CLIENT_SECRET!
  );
  client.client.setHeader('Criipto-Sdk', 'test');

  return {client};
}

test('client credentials', t => {
	t.truthy(process.env.CRIIPTO_SIGNATURES_CLIENT_ID);
  t.truthy(process.env.CRIIPTO_SIGNATURES_CLIENT_SECRET);
});

test('can create signature order with signatory', async t => {
  // ARRANGE
  const {client} = arrange();

  // ACT
  const signatureOrder = await client.createSignatureOrder({
    title: "Node.js sample",
    expiresInDays: 1,
    documents: [documentFixture]
  });

  t.truthy(signatureOrder);
  t.truthy(signatureOrder.id);

  const signatory = await client.addSignatory(signatureOrder!.id);
  t.truthy(signatory);
  t.truthy(signatory.id);

  const fetched = await client.querySignatureOrder(signatureOrder!.id, true);
  t.truthy(fetched);
  t.truthy(fetched!.id);
  t.truthy("documents" in fetched! ? fetched!.documents[0].blob! : null as any);
  t.truthy("documents" in fetched! ? Buffer.isBuffer(fetched!.documents[0].blob!) : null as any);

  await client.cancelSignatureOrder(signatureOrder!.id);
});

test('can create signature order with form enabled', async t => {
  // ARRANGE
  const {client} = arrange();

  // ACT
  const signatureOrder = await client.createSignatureOrder({
    title: "Node.js form sample",
    expiresInDays: 1,
    documents: [
      {
        pdf: {
          title: "Node.js Sample",
          blob: sampleForm, // Buffer
          storageMode: 'Temporary',
          form: {
            enabled: true
          }
        }
      }
    ]
  });

  t.truthy(signatureOrder);
  t.truthy(signatureOrder.id);

  const fetched = await client.querySignatureOrder(signatureOrder!.id, true);
  t.truthy(fetched);
  t.truthy(fetched!.id);
  
  if (!fetched) return t.fail("expected fetched")
  if (!("documents" in fetched)) return t.fail("expected documents");
  if (!fetched.documents[0]) return t.fail("expected non-empty documents");
  if (fetched.documents[0].__typename !== 'PdfDocument') return t.fail("expected PdfDocument");

  t.truthy(fetched.documents[0].form?.enabled);
});

test('can query signatory.signatureOrder.signatories (regression test)', async t => {
  // ARRANGE
  const {client} = arrange();
  const signatureOrder = await client.createSignatureOrder({
    title: "Node.js sample",
    expiresInDays: 1,
    documents: [documentFixture]
  });
  const {id: signatoryId} = await client.addSignatory(signatureOrder!.id);

  // ACT
  const signatory = await client.querySignatory(signatoryId);

  // ASSERT
  t.truthy(signatory?.signatureOrder.signatories);
});