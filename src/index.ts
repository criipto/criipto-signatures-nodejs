import { GraphQLClient } from 'graphql-request';
import { AddSignatoriesInput, AddSignatoryInput, ChangeSignatoryInput, CloseSignatureOrderInput, CreateSignatureOrderInput, getSdk, Sdk, SignActingAsInput } from './graphql-sdk';

import  * as Types from './graphql-sdk';
export {Types};

export class CriiptoSignatures {
  client: GraphQLClient;
  sdk: Sdk;
 
  constructor(clientId: string, clientSecret: string);
  constructor(clientId: string, clientSecret: string, criiptoSdk: string = "criipto-signatures-nodejs") {
    this.client = new GraphQLClient('https://signatures-api.criipto.com/v1/graphql', {
      headers: {
        Authorization: `Basic ${Buffer.from(clientId + ':' + clientSecret).toString('base64')}`,
        "Criipto-Sdk": criiptoSdk
      }
    });
    this.sdk = getSdk(this.client);
  }

  async createSignatureOrder(input: CreateSignatureOrderInput) {
    const response = await this.sdk.createSignatureOrder({
      input
    });
    return response.createSignatureOrder!.signatureOrder;
  }

  async addSignatory(signatureOrderId: string, input: Omit<AddSignatoryInput, 'signatureOrderId'>) {
    const response = await this.sdk.addSignatory({
      input: {
        ...input,
        signatureOrderId
      }
    });
    return response.addSignatory!.signatory;
  }

  async addSignatories(signatureOrderId: string, input: Omit<AddSignatoriesInput, 'signatureOrderId'>) {
    const response = await this.sdk.addSignatories({
      input: {
        ...input,
        signatureOrderId
      }
    });
    return response.addSignatories!.signatories;
  }

  async changeSignatory(signatoryId: string, input: Omit<ChangeSignatoryInput, 'signatoryId'>) {
    const response = await this.sdk.changeSignatory({
      input: {
        ...input,
        signatoryId
      }
    });
    return response.changeSignatory!.signatory;
  }

  async closeSignatureOrder(signatureOrderId: string, input?: Omit<CloseSignatureOrderInput, 'signatureOrderId'>) {
    const response = await this.sdk.closeSignatureOrder({
      input: {
        ...input,
        signatureOrderId
      }
    });
    return response.closeSignatureOrder!.signatureOrder;
  }

  async cancelSignatureOrder(signatureOrderId: string) {
    const response = await this.sdk.cancelSignatureOrder({
      input: {
        signatureOrderId
      }
    });
    return response.cancelSignatureOrder!.signatureOrder;
  }

  async cleanupSignatureOrder(signatureOrderId: string) {
    const response = await this.sdk.cleanupSignatureOrder({
      input: {
        signatureOrderId
      }
    });
    return response.cleanupSignatureOrder!.signatureOrder;
  }

  async signActingAs(signatoryId: string, input: Omit<SignActingAsInput, 'signatoryId'>) {
    const response = await this.sdk.signActingAs({
      input: {
        ...input,
        signatoryId
      }
    });
    return response.signActingAs!.signatory;
  }

  async querySignatureOrder(signatureOrderId: string, includeDocuments: boolean = false) {
    const response = includeDocuments ? await this.sdk.signatureOrderWithDocuments({id: signatureOrderId}) : await this.sdk.signatureOrder({id: signatureOrderId});
    return response.signatureOrder ?? null;
  }

  async querySignatory(signatoryId: string) {
    const response = await this.sdk.signatory({id: signatoryId});
    return response.signatory ?? null;
  }
}

export default CriiptoSignatures;