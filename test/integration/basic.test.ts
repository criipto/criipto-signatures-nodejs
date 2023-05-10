import test from 'ava';
import fs from 'fs';

import CriiptoSignatures from '../../';

const sample = fs.readFileSync(__dirname + '/sample.pdf');

test('client credentials', t => {
	t.truthy(process.env.CRIIPTO_SIGNATURES_CLIENT_ID);
  t.truthy(process.env.CRIIPTO_SIGNATURES_CLIENT_SECRET);
});

test('can create signature order with signatory', async t => {
  // ARRANGE
  const client = new CriiptoSignatures(
    process.env.CRIIPTO_SIGNATURES_CLIENT_ID!,
    process.env.CRIIPTO_SIGNATURES_CLIENT_SECRET!
  );
  client.client.setHeader('Criipto-Sdk', 'test');

  // ACT
  const signatureOrder = await client.createSignatureOrder({
    title: "Node.js sample",
    expiresInDays: 1,
    documents: [
      {
        pdf: {
          title: "Node.js Sample",
          blob: sample.toString('base64'), // Buffer
          storageMode: 'Temporary'
        }
      }
    ]
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

  await client.cancelSignatureOrder(signatureOrder!.id);
});