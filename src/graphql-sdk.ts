import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Blob: Buffer;
  Date: string;
  DateTime: string;
  URI: string;
};

export type AddSignatoriesInput = {
  signatories: Array<CreateSignatureOrderSignatoryInput>;
  signatureOrderId: Scalars['ID'];
};

export type AddSignatoriesOutput = {
  __typename?: 'AddSignatoriesOutput';
  signatories: Array<Signatory>;
  signatureOrder: SignatureOrder;
};

export type AddSignatoryInput = {
  /** Define a subset of documents for the signatory. Must be a non-empty list. Leave null for all documents. */
  documents?: InputMaybe<Array<SignatoryDocumentInput>>;
  /** Selectively enable evidence providers for this signatory. */
  evidenceProviders?: InputMaybe<Array<SignatoryEvidenceProviderInput>>;
  evidenceValidation?: InputMaybe<Array<SignatoryEvidenceValidationInput>>;
  /** Will not be displayed to signatories, can be used as a reference to your own system. */
  reference?: InputMaybe<Scalars['String']>;
  /** Define a role for the signatory, i.e. 'Chairman'. Will be visible in the document output. */
  role?: InputMaybe<Scalars['String']>;
  signatureAppearance?: InputMaybe<SignatureAppearanceInput>;
  signatureOrderId: Scalars['ID'];
};

export type AddSignatoryOutput = {
  __typename?: 'AddSignatoryOutput';
  signatory: Signatory;
  signatureOrder: SignatureOrder;
};

export type AllOfEvidenceProviderInput = {
  providers: Array<SingleEvidenceProviderInput>;
};

export type AllOfSignatureEvidenceProvider = SignatureEvidenceProvider & {
  __typename?: 'AllOfSignatureEvidenceProvider';
  id: Scalars['ID'];
  providers: Array<SingleSignatureEvidenceProvider>;
};

export type AnonymousViewer = Viewer & {
  __typename?: 'AnonymousViewer';
  authenticated: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type Application = Viewer & {
  __typename?: 'Application';
  apiKeys: Array<ApplicationApiKey>;
  id: Scalars['ID'];
  name: Scalars['String'];
  signatureOrders: SignatureOrderConnection;
  /** Tenants are only accessable from user viewers */
  tenant?: Maybe<Tenant>;
  verifyApplication: VerifyApplication;
  webhookLogs: Array<WebhookInvocation>;
};


export type ApplicationSignatureOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<SignatureOrderStatus>;
};


export type ApplicationWebhookLogsArgs = {
  from: Scalars['String'];
  succeeded?: InputMaybe<Scalars['Boolean']>;
  to: Scalars['String'];
};

export type ApplicationApiKey = {
  __typename?: 'ApplicationApiKey';
  clientId: Scalars['String'];
  clientSecret?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mode: ApplicationApiKeyMode;
  note?: Maybe<Scalars['String']>;
};

export type ApplicationApiKeyMode =
  | 'READ_ONLY'
  | 'READ_WRITE'
  | '%future added value';

export type CancelSignatureOrderInput = {
  signatureOrderId: Scalars['ID'];
};

export type CancelSignatureOrderOutput = {
  __typename?: 'CancelSignatureOrderOutput';
  signatureOrder: SignatureOrder;
};

export type ChangeSignatoryInput = {
  /** Define a subset of documents for the signatory. Must be a non-empty list. Leave null for all documents. */
  documents?: InputMaybe<Array<SignatoryDocumentInput>>;
  /** Selectively enable evidence providers for this signatory. */
  evidenceProviders?: InputMaybe<Array<SignatoryEvidenceProviderInput>>;
  evidenceValidation?: InputMaybe<Array<SignatoryEvidenceValidationInput>>;
  /** Will not be displayed to signatories, can be used as a reference to your own system. */
  reference?: InputMaybe<Scalars['String']>;
  /** Define a role for the signatory, i.e. 'Chairman'. Will be visible in the document output. */
  role?: InputMaybe<Scalars['String']>;
  signatoryId: Scalars['ID'];
  signatureAppearance?: InputMaybe<SignatureAppearanceInput>;
};

export type ChangeSignatoryOutput = {
  __typename?: 'ChangeSignatoryOutput';
  signatory: Signatory;
  signatureOrder: SignatureOrder;
};

export type CleanupSignatureOrderInput = {
  signatureOrderId: Scalars['ID'];
};

export type CleanupSignatureOrderOutput = {
  __typename?: 'CleanupSignatureOrderOutput';
  signatureOrder: SignatureOrder;
};

export type CloseSignatureOrderInput = {
  /** Retains documents on Criipto servers after closing a signature order. You MUST manually call the cleanupSignatureOrder mutation when you are sure you have downloaded the blobs. Maximum value is 7 days. */
  retainDocumentsForDays?: InputMaybe<Scalars['Int']>;
  signatureOrderId: Scalars['ID'];
};

export type CloseSignatureOrderOutput = {
  __typename?: 'CloseSignatureOrderOutput';
  signatureOrder: SignatureOrder;
};

export type CompositeSignature = Signature & {
  __typename?: 'CompositeSignature';
  signatory?: Maybe<Signatory>;
  signatures: Array<SingleSignature>;
};

export type CreateApplicationApiKeyInput = {
  applicationId: Scalars['ID'];
  mode?: InputMaybe<ApplicationApiKeyMode>;
  note?: InputMaybe<Scalars['String']>;
};

export type CreateApplicationApiKeyOutput = {
  __typename?: 'CreateApplicationApiKeyOutput';
  apiKey: ApplicationApiKey;
  application: Application;
};

export type CreateApplicationInput = {
  name: Scalars['String'];
  tenantId: Scalars['ID'];
  verifyApplicationDomain: Scalars['String'];
  verifyApplicationEnvironment: VerifyApplicationEnvironment;
  verifyApplicationRealm: Scalars['String'];
};

export type CreateApplicationOutput = {
  __typename?: 'CreateApplicationOutput';
  apiKey: ApplicationApiKey;
  application: Application;
  tenant: Tenant;
};

export type CreateSignatureOrderInput = {
  /** By default signatories will be prompted to sign with a Criipto Verify based e-ID, this setting disables it. */
  disableVerifyEvidenceProvider?: InputMaybe<Scalars['Boolean']>;
  documents: Array<DocumentInput>;
  /** Define evidence providers for signature order if not using built-in Criipto Verify for e-IDs */
  evidenceProviders?: InputMaybe<Array<EvidenceProviderInput>>;
  /** Defines when a signatory must be validated, default is when signing, but can be expanded to also be required when viewing documents. */
  evidenceValidationStages?: InputMaybe<Array<EvidenceValidationStage>>;
  /** When this signature order will auto-close/expire at exactly in one of the following ISO-8601 formats: yyyy-MM-ddTHH:mm:ssZ, yyyy-MM-ddTHH:mm:ss.ffZ, yyyy-MM-ddTHH:mm:ss.fffZ, yyyy-MM-ddTHH:mm:ssK, yyyy-MM-ddTHH:mm:ss.ffK, yyyy-MM-ddTHH:mm:ss.fffK. Cannot be provided with `expiresInDays`. */
  expiresAt?: InputMaybe<Scalars['String']>;
  /** When this signature order will auto-close/expire. Default 90 days. Cannot be provided with `expiresAt` */
  expiresInDays?: InputMaybe<Scalars['Int']>;
  /** Attempt to automatically fix document formatting errors if possible. Default 'true'. */
  fixDocumentFormattingErrors?: InputMaybe<Scalars['Boolean']>;
  /** Max allowed signatories (as it influences pages needed for seals). Default 14. */
  maxSignatories?: InputMaybe<Scalars['Int']>;
  signatories?: InputMaybe<Array<CreateSignatureOrderSignatoryInput>>;
  /** Configure appearance of signatures inside documents */
  signatureAppearance?: InputMaybe<SignatureAppearanceInput>;
  /** Timezone to render signature seals in, default UTC. */
  timezone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** Various settings for how the UI is presented to the signatory. */
  ui?: InputMaybe<CreateSignatureOrderUiInput>;
  /** Signature order webhook settings */
  webhook?: InputMaybe<CreateSignatureOrderWebhookInput>;
};

export type CreateSignatureOrderOutput = {
  __typename?: 'CreateSignatureOrderOutput';
  application: Application;
  signatureOrder: SignatureOrder;
};

export type CreateSignatureOrderSignatoryInput = {
  /** Define a subset of documents for the signatory. Must be a non-empty list. Leave null for all documents. */
  documents?: InputMaybe<Array<SignatoryDocumentInput>>;
  /** Selectively enable evidence providers for this signatory. */
  evidenceProviders?: InputMaybe<Array<SignatoryEvidenceProviderInput>>;
  evidenceValidation?: InputMaybe<Array<SignatoryEvidenceValidationInput>>;
  /** Will not be displayed to signatories, can be used as a reference to your own system. */
  reference?: InputMaybe<Scalars['String']>;
  /** Define a role for the signatory, i.e. 'Chairman'. Will be visible in the document output. */
  role?: InputMaybe<Scalars['String']>;
  signatureAppearance?: InputMaybe<SignatureAppearanceInput>;
};

export type CreateSignatureOrderUiInput = {
  /** Removes the UI options to reject a document or signature order. */
  disableRejection?: InputMaybe<Scalars['Boolean']>;
  /** The language of texts rendered to the signatory. */
  language?: InputMaybe<Language>;
  /** Define a logo to be shown in the signatory UI. */
  logo?: InputMaybe<SignatureOrderUiLogoInput>;
  /** The signatory will be redirected to this URL after signing or rejected the signature order. */
  signatoryRedirectUri?: InputMaybe<Scalars['String']>;
  /** Add stylesheet/css via an absolute HTTPS URL. */
  stylesheet?: InputMaybe<Scalars['String']>;
};

export type CreateSignatureOrderWebhookInput = {
  /** Webhook url. POST requests will be executed towards this URL on certain signatory events. */
  url: Scalars['String'];
  /** Validates webhook connectivity by triggering a WEBHOOK_VALIDATION event, your webhook must respond within 5 seconds with 200/OK or the signature order creation will fail. */
  validateConnectivity?: InputMaybe<Scalars['Boolean']>;
};

/** Criipto Verify based evidence for signatures. */
export type CriiptoVerifyProviderInput = {
  acrValues?: InputMaybe<Array<Scalars['String']>>;
  alwaysRedirect?: InputMaybe<Scalars['Boolean']>;
  /** Set a custom login_hint for the underlying authentication request. */
  loginHint?: InputMaybe<Scalars['String']>;
  /** Messages displayed when performing authentication (only supported by DKMitID currently). */
  message?: InputMaybe<Scalars['String']>;
  /** Set a custom scope for the underlying authentication request. */
  scope?: InputMaybe<Scalars['String']>;
  /** Enforces that signatories sign by unique evidence by comparing the values of previous evidence on the key you define. For Criipto Verify you likely want to use `sub` which is a unique pseudonym value present in all e-ID tokens issued. */
  uniqueEvidenceKey?: InputMaybe<Scalars['String']>;
};

export type CriiptoVerifySignatureEvidenceProvider = SignatureEvidenceProvider & SingleSignatureEvidenceProvider & {
  __typename?: 'CriiptoVerifySignatureEvidenceProvider';
  acrValues: Array<Scalars['String']>;
  alwaysRedirect: Scalars['Boolean'];
  clientID: Scalars['String'];
  domain: Scalars['String'];
  id: Scalars['ID'];
  loginHint?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  scope?: Maybe<Scalars['String']>;
};

export type DeleteApplicationApiKeyInput = {
  apiKeyId: Scalars['ID'];
  applicationId: Scalars['ID'];
};

export type DeleteApplicationApiKeyOutput = {
  __typename?: 'DeleteApplicationApiKeyOutput';
  application: Application;
};

export type DeleteSignatoryInput = {
  signatoryId: Scalars['ID'];
  signatureOrderId: Scalars['ID'];
};

export type DeleteSignatoryOutput = {
  __typename?: 'DeleteSignatoryOutput';
  signatureOrder: SignatureOrder;
};

export type Document = {
  blob?: Maybe<Scalars['Blob']>;
  id: Scalars['ID'];
  originalBlob?: Maybe<Scalars['Blob']>;
  reference?: Maybe<Scalars['String']>;
  signatoryViewerStatus?: Maybe<SignatoryDocumentStatus>;
  signatures?: Maybe<Array<Signature>>;
  title: Scalars['String'];
};

export type DocumentIdLocation =
  | 'BOTTOM'
  | 'LEFT'
  | 'RIGHT'
  | 'TOP'
  | '%future added value';

export type DocumentInput = {
  pdf?: InputMaybe<PadesDocumentInput>;
  /** When enabled, will remove any existing signatures from the document before storing. (PDF only) */
  removePreviousSignatures?: InputMaybe<Scalars['Boolean']>;
  /** XML signing is coming soon, reach out to learn more. */
  xml?: InputMaybe<XadesDocumentInput>;
};

/** Document storage mode. Temporary documents will be deleted once completed. */
export type DocumentStorageMode =
  /** Temporary documents will be deleted once completed. */
  | 'Temporary'
  | '%future added value';

export type DownloadVerificationCriiptoVerifyInput = {
  jwt: Scalars['String'];
};

export type DownloadVerificationInput = {
  criiptoVerify?: InputMaybe<DownloadVerificationCriiptoVerifyInput>;
  oidc?: InputMaybe<DownloadVerificationOidcInput>;
};

export type DownloadVerificationOidcInput = {
  jwt: Scalars['String'];
};

/** Hand drawn signature evidence for signatures. */
export type DrawableEvidenceProviderInput = {
  /** Required minimum height of drawed area in pixels. */
  minimumHeight?: InputMaybe<Scalars['Int']>;
  /** Required minimum width of drawed area in pixels. */
  minimumWidth?: InputMaybe<Scalars['Int']>;
  requireName?: InputMaybe<Scalars['Boolean']>;
};

export type DrawableSignature = Signature & SingleSignature & {
  __typename?: 'DrawableSignature';
  image: Scalars['Blob'];
  name?: Maybe<Scalars['String']>;
  signatory?: Maybe<Signatory>;
};

export type DrawableSignatureEvidenceProvider = SignatureEvidenceProvider & SingleSignatureEvidenceProvider & {
  __typename?: 'DrawableSignatureEvidenceProvider';
  id: Scalars['ID'];
  minimumHeight?: Maybe<Scalars['Int']>;
  minimumWidth?: Maybe<Scalars['Int']>;
  requireName: Scalars['Boolean'];
};

export type EmptySignature = Signature & SingleSignature & {
  __typename?: 'EmptySignature';
  signatory?: Maybe<Signatory>;
};

/** Must define a evidence provider subsection. */
export type EvidenceProviderInput = {
  allOf?: InputMaybe<AllOfEvidenceProviderInput>;
  /** Criipto Verify based evidence for signatures. */
  criiptoVerify?: InputMaybe<CriiptoVerifyProviderInput>;
  /** Hand drawn signature evidence for signatures. */
  drawable?: InputMaybe<DrawableEvidenceProviderInput>;
  /** Determined if this evidence provider should be enabled by signatories by default. Default true */
  enabledByDefault?: InputMaybe<Scalars['Boolean']>;
  /** TEST environment only. Does not manipulate the PDF, use for integration or webhook testing. */
  noop?: InputMaybe<NoopEvidenceProviderInput>;
  /** OIDC/JWT based evidence for signatures. */
  oidc?: InputMaybe<OidcEvidenceProviderInput>;
};

export type EvidenceValidationStage =
  | 'SIGN'
  /** Require the signatory to be validated before viewing documents */
  | 'VIEW'
  | '%future added value';

export type ExtendSignatureOrderInput = {
  /** Expiration to add to order, in days, max 30. */
  additionalExpirationInDays: Scalars['Int'];
  signatureOrderId: Scalars['ID'];
};

export type ExtendSignatureOrderOutput = {
  __typename?: 'ExtendSignatureOrderOutput';
  signatureOrder: SignatureOrder;
};

export type JwtSignature = Signature & SingleSignature & {
  __typename?: 'JWTSignature';
  jwks: Scalars['String'];
  jwt: Scalars['String'];
  signatory?: Maybe<Signatory>;
};

export type Language =
  | 'DA_DK'
  | 'EN_US'
  | 'NB_NO'
  | 'SV_SE'
  | '%future added value';

export type Mutation = {
  __typename?: 'Mutation';
  /** Add multiple signatures to your signature order. */
  addSignatories?: Maybe<AddSignatoriesOutput>;
  /** Add a signatory to your signature order. */
  addSignatory?: Maybe<AddSignatoryOutput>;
  /** Cancels the signature order without closing it, use if you no longer need a signature order. Documents are deleted from storage after cancelling. */
  cancelSignatureOrder?: Maybe<CancelSignatureOrderOutput>;
  /** Change an existing signatory */
  changeSignatory?: Maybe<ChangeSignatoryOutput>;
  /** Cleans up the signature order and removes any saved documents from the servers. */
  cleanupSignatureOrder?: Maybe<CleanupSignatureOrderOutput>;
  /** Finalizes the documents in the signature order and returns them to you as blobs. Documents are deleted from storage after closing. */
  closeSignatureOrder?: Maybe<CloseSignatureOrderOutput>;
  /** Creates a signature application for a given tenant. */
  createApplication?: Maybe<CreateApplicationOutput>;
  /** Creates a new set of api credentials for an existing application. */
  createApplicationApiKey?: Maybe<CreateApplicationApiKeyOutput>;
  /** Creates a signature order to be signed. */
  createSignatureOrder?: Maybe<CreateSignatureOrderOutput>;
  /** Deletes a set of API credentials for an application. */
  deleteApplicationApiKey?: Maybe<DeleteApplicationApiKeyOutput>;
  /** Delete a signatory from a signature order */
  deleteSignatory?: Maybe<DeleteSignatoryOutput>;
  /** Extends the expiration of the signature order. */
  extendSignatureOrder?: Maybe<ExtendSignatureOrderOutput>;
  /** Refreshes the client secret for an existing set of API credentials. Warning: The old client secret will stop working immediately. */
  refreshApplicationApiKey?: Maybe<RefreshApplicationApiKeyOutput>;
  /** Used by Signatory frontends to reject a signature order in full. */
  rejectSignatureOrder?: Maybe<RejectSignatureOrderOutput>;
  retrySignatureOrderWebhook?: Maybe<RetrySignatureOrderWebhookOutput>;
  /** Used by Signatory frontends to sign the documents in a signature order. */
  sign?: Maybe<SignOutput>;
  /** Sign with API credentials acting as a specific signatory. The signatory MUST be preapproved in this case. */
  signActingAs?: Maybe<SignActingAsOutput>;
  /** Signatory frontend use only. */
  signatoryBeacon?: Maybe<SignatoryBeaconOutput>;
  /** Signatory frontend use only. */
  trackSignatory?: Maybe<TrackSignatoryOutput>;
  /** Used by Signatory frontends to mark documents as opened, approved or rejected. */
  updateSignatoryDocumentStatus?: Maybe<UpdateSignatoryDocumentStatusOutput>;
  validateDocument?: Maybe<ValidateDocumentOutput>;
};


export type MutationAddSignatoriesArgs = {
  input: AddSignatoriesInput;
};


export type MutationAddSignatoryArgs = {
  input: AddSignatoryInput;
};


export type MutationCancelSignatureOrderArgs = {
  input: CancelSignatureOrderInput;
};


export type MutationChangeSignatoryArgs = {
  input: ChangeSignatoryInput;
};


export type MutationCleanupSignatureOrderArgs = {
  input: CleanupSignatureOrderInput;
};


export type MutationCloseSignatureOrderArgs = {
  input: CloseSignatureOrderInput;
};


export type MutationCreateApplicationArgs = {
  input: CreateApplicationInput;
};


export type MutationCreateApplicationApiKeyArgs = {
  input: CreateApplicationApiKeyInput;
};


export type MutationCreateSignatureOrderArgs = {
  input: CreateSignatureOrderInput;
};


export type MutationDeleteApplicationApiKeyArgs = {
  input: DeleteApplicationApiKeyInput;
};


export type MutationDeleteSignatoryArgs = {
  input: DeleteSignatoryInput;
};


export type MutationExtendSignatureOrderArgs = {
  input: ExtendSignatureOrderInput;
};


export type MutationRefreshApplicationApiKeyArgs = {
  input: RefreshApplicationApiKeyInput;
};


export type MutationRejectSignatureOrderArgs = {
  input: RejectSignatureOrderInput;
};


export type MutationRetrySignatureOrderWebhookArgs = {
  input: RetrySignatureOrderWebhookInput;
};


export type MutationSignArgs = {
  input: SignInput;
};


export type MutationSignActingAsArgs = {
  input: SignActingAsInput;
};


export type MutationSignatoryBeaconArgs = {
  input: SignatoryBeaconInput;
};


export type MutationTrackSignatoryArgs = {
  input: TrackSignatoryInput;
};


export type MutationUpdateSignatoryDocumentStatusArgs = {
  input: UpdateSignatoryDocumentStatusInput;
};


export type MutationValidateDocumentArgs = {
  input: ValidateDocumentInput;
};

/** TEST only. Allows empty signatures for testing. */
export type NoopEvidenceProviderInput = {
  name: Scalars['String'];
};

export type NoopSignatureEvidenceProvider = SignatureEvidenceProvider & SingleSignatureEvidenceProvider & {
  __typename?: 'NoopSignatureEvidenceProvider';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** OIDC/JWT based evidence for signatures. */
export type OidcEvidenceProviderInput = {
  acrValues?: InputMaybe<Array<Scalars['String']>>;
  alwaysRedirect?: InputMaybe<Scalars['Boolean']>;
  audience: Scalars['String'];
  clientID: Scalars['String'];
  domain: Scalars['String'];
  name: Scalars['String'];
  /** Enforces that signatories sign by unique evidence by comparing the values of previous evidence on the key you define. */
  uniqueEvidenceKey?: InputMaybe<Scalars['String']>;
};

export type OidcJwtSignatureEvidenceProvider = SignatureEvidenceProvider & SingleSignatureEvidenceProvider & {
  __typename?: 'OidcJWTSignatureEvidenceProvider';
  acrValues: Array<Scalars['String']>;
  alwaysRedirect: Scalars['Boolean'];
  clientID: Scalars['String'];
  domain: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PadesDocumentFormInput = {
  enabled: Scalars['Boolean'];
};

export type PadesDocumentInput = {
  blob: Scalars['Blob'];
  /** Will add a unique identifier for the document to the specified margin of each page. Useful when printing signed documents. */
  displayDocumentID?: InputMaybe<DocumentIdLocation>;
  form?: InputMaybe<PadesDocumentFormInput>;
  /** Will not be displayed to signatories, can be used as a reference to your own system. */
  reference?: InputMaybe<Scalars['String']>;
  storageMode: DocumentStorageMode;
  title: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PdfDocument = Document & {
  __typename?: 'PdfDocument';
  blob?: Maybe<Scalars['Blob']>;
  form?: Maybe<PdfDocumentForm>;
  id: Scalars['ID'];
  originalBlob?: Maybe<Scalars['Blob']>;
  reference?: Maybe<Scalars['String']>;
  signatoryViewerStatus?: Maybe<SignatoryDocumentStatus>;
  signatures?: Maybe<Array<Signature>>;
  title: Scalars['String'];
};

export type PdfDocumentForm = {
  __typename?: 'PdfDocumentForm';
  enabled: Scalars['Boolean'];
};

export type PdfSealPosition = {
  page: Scalars['Int'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  application?: Maybe<Application>;
  document?: Maybe<Document>;
  /** Query a signatory by id. Useful when using webhooks. */
  signatory?: Maybe<Signatory>;
  signatureOrder?: Maybe<SignatureOrder>;
  /** Tenants are only accessable from user viewers */
  tenant?: Maybe<Tenant>;
  timezones: Array<Scalars['String']>;
  viewer: Viewer;
};


export type QueryApplicationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  verifyApplication?: InputMaybe<VerifyApplicationQueryInput>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID'];
};


export type QuerySignatoryArgs = {
  id: Scalars['ID'];
};


export type QuerySignatureOrderArgs = {
  id: Scalars['ID'];
};


export type QueryTenantArgs = {
  id: Scalars['ID'];
};

export type RefreshApplicationApiKeyInput = {
  apiKeyId: Scalars['ID'];
  applicationId: Scalars['ID'];
};

export type RefreshApplicationApiKeyOutput = {
  __typename?: 'RefreshApplicationApiKeyOutput';
  apiKey: ApplicationApiKey;
  application: Application;
};

export type RejectSignatureOrderInput = {
  dummy: Scalars['Boolean'];
  reason?: InputMaybe<Scalars['String']>;
};

export type RejectSignatureOrderOutput = {
  __typename?: 'RejectSignatureOrderOutput';
  viewer: Viewer;
};

export type RetrySignatureOrderWebhookInput = {
  retryPayload: Scalars['String'];
  signatureOrderId: Scalars['ID'];
};

export type RetrySignatureOrderWebhookOutput = {
  __typename?: 'RetrySignatureOrderWebhookOutput';
  invocation: WebhookInvocation;
};

export type SignActingAsInput = {
  evidence: SignInput;
  signatoryId: Scalars['ID'];
};

export type SignActingAsOutput = {
  __typename?: 'SignActingAsOutput';
  signatory: Signatory;
  signatureOrder: SignatureOrder;
};

export type SignAllOfInput = {
  criiptoVerify?: InputMaybe<SignCriiptoVerifyInput>;
  drawable?: InputMaybe<SignDrawableInput>;
  noop?: InputMaybe<Scalars['Boolean']>;
  oidc?: InputMaybe<SignOidcInput>;
};

export type SignCriiptoVerifyInput = {
  jwt: Scalars['String'];
};

export type SignDocumentFormFieldInput = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export type SignDocumentFormInput = {
  fields: Array<SignDocumentFormFieldInput>;
};

export type SignDocumentInput = {
  form?: InputMaybe<SignDocumentFormInput>;
  id: Scalars['ID'];
};

export type SignDrawableInput = {
  image: Scalars['Blob'];
  name?: InputMaybe<Scalars['String']>;
};

export type SignInput = {
  allOf?: InputMaybe<SignAllOfInput>;
  criiptoVerify?: InputMaybe<SignCriiptoVerifyInput>;
  documents?: InputMaybe<Array<SignDocumentInput>>;
  drawable?: InputMaybe<SignDrawableInput>;
  /** EvidenceProvider id */
  id: Scalars['ID'];
  noop?: InputMaybe<Scalars['Boolean']>;
  oidc?: InputMaybe<SignOidcInput>;
};

export type SignOidcInput = {
  jwt: Scalars['String'];
};

export type SignOutput = {
  __typename?: 'SignOutput';
  viewer: Viewer;
};

export type Signatory = {
  __typename?: 'Signatory';
  documents: SignatoryDocumentConnection;
  /** A download link for signatories to download their signed documents. Signatories must verify their identity before downloading. Can be used when signature order is closed with document retention. */
  downloadHref?: Maybe<Scalars['String']>;
  evidenceProviders: Array<SignatureEvidenceProvider>;
  /** A link to the signatures frontend, you can send this link to your users to enable them to sign your documents. */
  href: Scalars['String'];
  id: Scalars['ID'];
  reference?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  /** Signature order for the signatory. */
  signatureOrder: SignatureOrder;
  /** The current status of the signatory. */
  status: SignatoryStatus;
  /** The reason for the signatory status (rejection reason when rejected). */
  statusReason?: Maybe<Scalars['String']>;
  /** The signature frontend authentication token, only required if you need to build a custom url. */
  token: Scalars['String'];
};

export type SignatoryBeaconInput = {
  lastActionAt: Scalars['DateTime'];
};

export type SignatoryBeaconOutput = {
  __typename?: 'SignatoryBeaconOutput';
  viewer: Viewer;
};

export type SignatoryDocumentConnection = {
  __typename?: 'SignatoryDocumentConnection';
  edges: Array<SignatoryDocumentEdge>;
};

export type SignatoryDocumentEdge = {
  __typename?: 'SignatoryDocumentEdge';
  node: Document;
  status?: Maybe<SignatoryDocumentStatus>;
};

export type SignatoryDocumentInput = {
  id: Scalars['ID'];
  /** Define custom position for PDF seal. Uses PDF coordinate system (bottom-left as 0,0). If defined for one signatory/document, must be defined for all. */
  pdfSealPosition?: InputMaybe<PdfSealPosition>;
  preapproved?: InputMaybe<Scalars['Boolean']>;
};

export type SignatoryDocumentStatus =
  | 'APPROVED'
  | 'OPENED'
  | 'PREAPPROVED'
  | 'REJECTED'
  | 'SIGNED'
  | '%future added value';

export type SignatoryEvidenceProviderInput = {
  allOf?: InputMaybe<AllOfEvidenceProviderInput>;
  /** Criipto Verify based evidence for signatures. */
  criiptoVerify?: InputMaybe<CriiptoVerifyProviderInput>;
  /** Hand drawn signature evidence for signatures. */
  drawable?: InputMaybe<DrawableEvidenceProviderInput>;
  id: Scalars['ID'];
  /** TEST environment only. Does not manipulate the PDF, use for integration or webhook testing. */
  noop?: InputMaybe<NoopEvidenceProviderInput>;
  /** OIDC/JWT based evidence for signatures. */
  oidc?: InputMaybe<OidcEvidenceProviderInput>;
};

export type SignatoryEvidenceValidationInput = {
  boolean?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SignatoryFrontendEvent =
  | 'DOWNLOAD_LINK_OPENED'
  | 'SIGN_LINK_OPENED'
  | '%future added value';

export type SignatoryStatus =
  | 'DELETED'
  | 'ERROR'
  | 'OPEN'
  | 'REJECTED'
  | 'SIGNED'
  | '%future added value';

export type SignatoryViewer = Viewer & {
  __typename?: 'SignatoryViewer';
  authenticated: Scalars['Boolean'];
  documents: SignatoryDocumentConnection;
  download?: Maybe<SignatoryViewerDownload>;
  evidenceProviders: Array<SignatureEvidenceProvider>;
  id: Scalars['ID'];
  signatoryId: Scalars['ID'];
  signatureOrderStatus: SignatureOrderStatus;
  signer: Scalars['Boolean'];
  status: SignatoryStatus;
  ui: SignatureOrderUi;
};


export type SignatoryViewerDownloadArgs = {
  verification?: InputMaybe<DownloadVerificationInput>;
};

export type SignatoryViewerDownload = {
  __typename?: 'SignatoryViewerDownload';
  documents?: Maybe<SignatoryDocumentConnection>;
  expired: Scalars['Boolean'];
  verificationEvidenceProvider?: Maybe<SignatureEvidenceProvider>;
  verificationRequired: Scalars['Boolean'];
};

/** Represents a signature on a document. */
export type Signature = {
  signatory?: Maybe<Signatory>;
};

export type SignatureAppearanceInput = {
  displayName?: InputMaybe<Array<SignatureAppearanceTemplateInput>>;
  footer?: InputMaybe<Array<SignatureAppearanceTemplateInput>>;
  headerLeft?: InputMaybe<Array<SignatureAppearanceTemplateInput>>;
  /** Render evidence claim as identifier in the signature appearance inside the document. You can supply multiple keys and they will be tried in order. If no key is found a GUID will be rendered. */
  identifierFromEvidence: Array<Scalars['String']>;
};

export type SignatureAppearanceTemplateInput = {
  replacements?: InputMaybe<Array<SignatureAppearanceTemplateReplacementInput>>;
  template: Scalars['String'];
};

export type SignatureAppearanceTemplateReplacementInput = {
  fromEvidence: Array<Scalars['String']>;
  placeholder: Scalars['String'];
};

export type SignatureEvidenceProvider = {
  id: Scalars['ID'];
};

export type SignatureOrder = {
  __typename?: 'SignatureOrder';
  application?: Maybe<Application>;
  closedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  documents: Array<Document>;
  evidenceProviders: Array<SignatureEvidenceProvider>;
  expiresAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** List of signatories for the signature order. */
  signatories: Array<Signatory>;
  status: SignatureOrderStatus;
  /** Tenants are only accessable from user viewers */
  tenant?: Maybe<Tenant>;
  timezone: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  ui: SignatureOrderUi;
  webhook?: Maybe<SignatureOrderWebhook>;
};

/** A connection from an object to a list of objects of type SignatureOrder */
export type SignatureOrderConnection = {
  __typename?: 'SignatureOrderConnection';
  /** Information to aid in pagination. */
  edges: Array<SignatureOrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A count of the total number of objects in this connection, ignoring pagination. This allows a client to fetch the first five objects by passing \"5\" as the argument to `first`, then fetch the total count so it could display \"5 of 83\", for example. In cases where we employ infinite scrolling or don't have an exact count of entries, this field will return `null`. */
  totalCount?: Maybe<Scalars['Int']>;
};

/** An edge in a connection from an object to another object of type SignatureOrder */
export type SignatureOrderEdge = {
  __typename?: 'SignatureOrderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge. Must NOT be an enumerable collection. */
  node: SignatureOrder;
};

export type SignatureOrderStatus =
  | 'CANCELLED'
  | 'CLOSED'
  | 'EXPIRED'
  | 'OPEN'
  | '%future added value';

export type SignatureOrderUi = {
  __typename?: 'SignatureOrderUI';
  disableRejection: Scalars['Boolean'];
  language: Language;
  logo?: Maybe<SignatureOrderUiLogo>;
  signatoryRedirectUri?: Maybe<Scalars['String']>;
  stylesheet?: Maybe<Scalars['String']>;
};

export type SignatureOrderUiLogo = {
  __typename?: 'SignatureOrderUILogo';
  href?: Maybe<Scalars['String']>;
  src: Scalars['String'];
};

export type SignatureOrderUiLogoInput = {
  /** Turns your logo into a link with the defined href. */
  href?: InputMaybe<Scalars['String']>;
  /** The image source for the logo. Must be an absolute HTTPS URL or a valid data: url */
  src: Scalars['String'];
};

export type SignatureOrderWebhook = {
  __typename?: 'SignatureOrderWebhook';
  logs: Array<WebhookInvocation>;
  url: Scalars['String'];
};


export type SignatureOrderWebhookLogsArgs = {
  from: Scalars['String'];
  succeeded?: InputMaybe<Scalars['Boolean']>;
  to: Scalars['String'];
};

/** Must define a evidence provider subsection. */
export type SingleEvidenceProviderInput = {
  /** Criipto Verify based evidence for signatures. */
  criiptoVerify?: InputMaybe<CriiptoVerifyProviderInput>;
  /** Hand drawn signature evidence for signatures. */
  drawable?: InputMaybe<DrawableEvidenceProviderInput>;
  /** TEST environment only. Does not manipulate the PDF, use for integration or webhook testing. */
  noop?: InputMaybe<NoopEvidenceProviderInput>;
  /** OIDC/JWT based evidence for signatures. */
  oidc?: InputMaybe<OidcEvidenceProviderInput>;
};

export type SingleSignature = {
  signatory?: Maybe<Signatory>;
};

export type SingleSignatureEvidenceProvider = {
  id: Scalars['ID'];
};

export type Tenant = {
  __typename?: 'Tenant';
  applications: Array<Application>;
  id: Scalars['ID'];
  webhookLogs: Array<WebhookInvocation>;
};


export type TenantApplicationsArgs = {
  domain?: InputMaybe<Scalars['String']>;
};


export type TenantWebhookLogsArgs = {
  from: Scalars['String'];
  succeeded?: InputMaybe<Scalars['Boolean']>;
  to: Scalars['String'];
};

export type TrackSignatoryInput = {
  event: SignatoryFrontendEvent;
};

export type TrackSignatoryOutput = {
  __typename?: 'TrackSignatoryOutput';
  viewer: Viewer;
};

export type UnvalidatedSignatoryViewer = Viewer & {
  __typename?: 'UnvalidatedSignatoryViewer';
  authenticated: Scalars['Boolean'];
  download?: Maybe<SignatoryViewerDownload>;
  evidenceProviders: Array<SignatureEvidenceProvider>;
  id: Scalars['ID'];
  signatoryId: Scalars['ID'];
  ui: SignatureOrderUi;
};


export type UnvalidatedSignatoryViewerDownloadArgs = {
  verification?: InputMaybe<DownloadVerificationInput>;
};

export type UpdateSignatoryDocumentStatusInput = {
  documentId: Scalars['ID'];
  status: SignatoryDocumentStatus;
};

export type UpdateSignatoryDocumentStatusOutput = {
  __typename?: 'UpdateSignatoryDocumentStatusOutput';
  documentEdge: SignatoryDocumentEdge;
  viewer: Viewer;
};

export type UserViewer = Viewer & {
  __typename?: 'UserViewer';
  authenticated: Scalars['Boolean'];
  id: Scalars['ID'];
  tenants: Array<Tenant>;
};

export type ValidateDocumentInput = {
  pdf?: InputMaybe<Scalars['Blob']>;
  xml?: InputMaybe<Scalars['Blob']>;
};

export type ValidateDocumentOutput = {
  __typename?: 'ValidateDocumentOutput';
  errors?: Maybe<Array<Scalars['String']>>;
  /** Whether or not the errors are fixable using 'fixDocumentFormattingErrors' */
  fixable?: Maybe<Scalars['Boolean']>;
  valid: Scalars['Boolean'];
};

export type VerifyApplication = {
  __typename?: 'VerifyApplication';
  domain: Scalars['String'];
  environment: VerifyApplicationEnvironment;
  realm: Scalars['String'];
};

export type VerifyApplicationEnvironment =
  | 'PRODUCTION'
  | 'TEST'
  | '%future added value';

export type VerifyApplicationQueryInput = {
  domain: Scalars['String'];
  realm: Scalars['String'];
  tenantId: Scalars['ID'];
};

export type Viewer = {
  id: Scalars['ID'];
};

export type WebhookExceptionInvocation = WebhookInvocation & {
  __typename?: 'WebhookExceptionInvocation';
  correlationId: Scalars['String'];
  event?: Maybe<WebhookInvocationEvent>;
  exception: Scalars['String'];
  requestBody: Scalars['String'];
  responseBody?: Maybe<Scalars['String']>;
  retryPayload: Scalars['String'];
  retryingAt?: Maybe<Scalars['String']>;
  signatureOrderId?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  url: Scalars['String'];
};

export type WebhookHttpErrorInvocation = WebhookInvocation & {
  __typename?: 'WebhookHttpErrorInvocation';
  correlationId: Scalars['String'];
  event?: Maybe<WebhookInvocationEvent>;
  requestBody: Scalars['String'];
  responseBody?: Maybe<Scalars['String']>;
  responseStatusCode: Scalars['Int'];
  retryPayload: Scalars['String'];
  retryingAt?: Maybe<Scalars['String']>;
  signatureOrderId?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  url: Scalars['String'];
};

export type WebhookInvocation = {
  correlationId: Scalars['String'];
  event?: Maybe<WebhookInvocationEvent>;
  requestBody: Scalars['String'];
  responseBody?: Maybe<Scalars['String']>;
  signatureOrderId?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  url: Scalars['String'];
};

export type WebhookInvocationEvent =
  | 'SIGNATORY_DOCUMENT_STATUS_CHANGED'
  | 'SIGNATORY_DOWNLOAD_LINK_OPENED'
  | 'SIGNATORY_REJECTED'
  | 'SIGNATORY_SIGNED'
  | 'SIGNATORY_SIGN_ERROR'
  | 'SIGNATORY_SIGN_LINK_OPENED'
  | 'SIGNATURE_ORDER_EXPIRED'
  | '%future added value';

export type WebhookSuccessfulInvocation = WebhookInvocation & {
  __typename?: 'WebhookSuccessfulInvocation';
  correlationId: Scalars['String'];
  event?: Maybe<WebhookInvocationEvent>;
  requestBody: Scalars['String'];
  responseBody?: Maybe<Scalars['String']>;
  responseStatusCode: Scalars['Int'];
  signatureOrderId?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  url: Scalars['String'];
};

export type WebhookTimeoutInvocation = WebhookInvocation & {
  __typename?: 'WebhookTimeoutInvocation';
  correlationId: Scalars['String'];
  event?: Maybe<WebhookInvocationEvent>;
  requestBody: Scalars['String'];
  responseBody?: Maybe<Scalars['String']>;
  responseTimeout: Scalars['Int'];
  retryPayload: Scalars['String'];
  retryingAt?: Maybe<Scalars['String']>;
  signatureOrderId?: Maybe<Scalars['String']>;
  timestamp: Scalars['String'];
  url: Scalars['String'];
};

export type XadesDocumentInput = {
  blob: Scalars['Blob'];
  /** Will not be displayed to signatories, can be used as a reference to your own system. */
  reference?: InputMaybe<Scalars['String']>;
  storageMode: DocumentStorageMode;
  title: Scalars['String'];
};

export type XmlDocument = Document & {
  __typename?: 'XmlDocument';
  blob?: Maybe<Scalars['Blob']>;
  id: Scalars['ID'];
  originalBlob?: Maybe<Scalars['Blob']>;
  reference?: Maybe<Scalars['String']>;
  signatoryViewerStatus?: Maybe<SignatoryDocumentStatus>;
  signatures?: Maybe<Array<Signature>>;
  title: Scalars['String'];
};

type BasicDocument_PdfDocument_Fragment = { __typename: 'PdfDocument', id: string, title: string, form?: { __typename?: 'PdfDocumentForm', enabled: boolean } | null };

type BasicDocument_XmlDocument_Fragment = { __typename: 'XmlDocument', id: string, title: string };

export type BasicDocumentFragment = BasicDocument_PdfDocument_Fragment | BasicDocument_XmlDocument_Fragment;

type SignedDocument_PdfDocument_Fragment = { __typename?: 'PdfDocument', id: string, title: string, blob?: Buffer | null, signatures?: Array<{ __typename: 'CompositeSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'DrawableSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'EmptySignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'JWTSignature', jwt: string, jwks: string, signatory?: { __typename?: 'Signatory', id: string } | null }> | null };

type SignedDocument_XmlDocument_Fragment = { __typename?: 'XmlDocument', id: string, title: string, blob?: Buffer | null, signatures?: Array<{ __typename: 'CompositeSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'DrawableSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'EmptySignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'JWTSignature', jwt: string, jwks: string, signatory?: { __typename?: 'Signatory', id: string } | null }> | null };

export type SignedDocumentFragment = SignedDocument_PdfDocument_Fragment | SignedDocument_XmlDocument_Fragment;

export type BasicSignatoryFragment = { __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } };

export type BasicSignatureOrderFragment = { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> };

export type CreateSignatureOrderMutationVariables = Exact<{
  input: CreateSignatureOrderInput;
}>;


export type CreateSignatureOrderMutation = { __typename?: 'Mutation', createSignatureOrder?: { __typename?: 'CreateSignatureOrderOutput', signatureOrder: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, documents: Array<{ __typename: 'PdfDocument', id: string, title: string, form?: { __typename?: 'PdfDocumentForm', enabled: boolean } | null } | { __typename: 'XmlDocument', id: string, title: string }>, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } } | null };

export type CleanupSignatureOrderMutationVariables = Exact<{
  input: CleanupSignatureOrderInput;
}>;


export type CleanupSignatureOrderMutation = { __typename?: 'Mutation', cleanupSignatureOrder?: { __typename?: 'CleanupSignatureOrderOutput', signatureOrder: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, documents: Array<{ __typename: 'PdfDocument', id: string, title: string, form?: { __typename?: 'PdfDocumentForm', enabled: boolean } | null } | { __typename: 'XmlDocument', id: string, title: string }>, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } } | null };

export type AddSignatoryMutationVariables = Exact<{
  input: AddSignatoryInput;
}>;


export type AddSignatoryMutation = { __typename?: 'Mutation', addSignatory?: { __typename?: 'AddSignatoryOutput', signatory: { __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } } } | null };

export type AddSignatoriesMutationVariables = Exact<{
  input: AddSignatoriesInput;
}>;


export type AddSignatoriesMutation = { __typename?: 'Mutation', addSignatories?: { __typename?: 'AddSignatoriesOutput', signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }> } | null };

export type ChangeSignatoryMutationVariables = Exact<{
  input: ChangeSignatoryInput;
}>;


export type ChangeSignatoryMutation = { __typename?: 'Mutation', changeSignatory?: { __typename?: 'ChangeSignatoryOutput', signatory: { __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } } } | null };

export type CloseSignatureOrderMutationVariables = Exact<{
  input: CloseSignatureOrderInput;
}>;


export type CloseSignatureOrderMutation = { __typename?: 'Mutation', closeSignatureOrder?: { __typename?: 'CloseSignatureOrderOutput', signatureOrder: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, documents: Array<{ __typename: 'PdfDocument', id: string, title: string, blob?: Buffer | null, form?: { __typename?: 'PdfDocumentForm', enabled: boolean } | null, signatures?: Array<{ __typename: 'CompositeSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'DrawableSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'EmptySignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'JWTSignature', jwt: string, jwks: string, signatory?: { __typename?: 'Signatory', id: string } | null }> | null } | { __typename: 'XmlDocument', id: string, title: string, blob?: Buffer | null, signatures?: Array<{ __typename: 'CompositeSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'DrawableSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'EmptySignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'JWTSignature', jwt: string, jwks: string, signatory?: { __typename?: 'Signatory', id: string } | null }> | null }>, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } } | null };

export type CancelSignatureOrderMutationVariables = Exact<{
  input: CancelSignatureOrderInput;
}>;


export type CancelSignatureOrderMutation = { __typename?: 'Mutation', cancelSignatureOrder?: { __typename?: 'CancelSignatureOrderOutput', signatureOrder: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, documents: Array<{ __typename: 'PdfDocument', id: string, title: string, form?: { __typename?: 'PdfDocumentForm', enabled: boolean } | null } | { __typename: 'XmlDocument', id: string, title: string }>, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } } | null };

export type SignActingAsMutationVariables = Exact<{
  input: SignActingAsInput;
}>;


export type SignActingAsMutation = { __typename?: 'Mutation', signActingAs?: { __typename?: 'SignActingAsOutput', signatory: { __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } } } | null };

export type ValidateDocumentMutationVariables = Exact<{
  input: ValidateDocumentInput;
}>;


export type ValidateDocumentMutation = { __typename?: 'Mutation', validateDocument?: { __typename?: 'ValidateDocumentOutput', valid: boolean, errors?: Array<string> | null, fixable?: boolean | null } | null };

export type DeleteSignatoryMutationVariables = Exact<{
  input: DeleteSignatoryInput;
}>;


export type DeleteSignatoryMutation = { __typename?: 'Mutation', deleteSignatory?: { __typename?: 'DeleteSignatoryOutput', signatureOrder: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } } | null };

export type SignatureOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SignatureOrderQuery = { __typename?: 'Query', signatureOrder?: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } | null };

export type SignatureOrderWithDocumentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SignatureOrderWithDocumentsQuery = { __typename?: 'Query', signatureOrder?: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, documents: Array<{ __typename: 'PdfDocument', id: string, title: string, blob?: Buffer | null, form?: { __typename?: 'PdfDocumentForm', enabled: boolean } | null, signatures?: Array<{ __typename: 'CompositeSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'DrawableSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'EmptySignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'JWTSignature', jwt: string, jwks: string, signatory?: { __typename?: 'Signatory', id: string } | null }> | null } | { __typename: 'XmlDocument', id: string, title: string, blob?: Buffer | null, signatures?: Array<{ __typename: 'CompositeSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'DrawableSignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'EmptySignature', signatory?: { __typename?: 'Signatory', id: string } | null } | { __typename: 'JWTSignature', jwt: string, jwks: string, signatory?: { __typename?: 'Signatory', id: string } | null }> | null }>, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } | null };

export type SignatoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SignatoryQuery = { __typename?: 'Query', signatory?: { __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } } | null };

export type SignatureOrdersQueryVariables = Exact<{
  status?: InputMaybe<SignatureOrderStatus>;
  first: Scalars['Int'];
  after?: InputMaybe<Scalars['String']>;
}>;


export type SignatureOrdersQuery = { __typename?: 'Query', viewer: { __typename: 'AnonymousViewer' } | { __typename: 'Application', signatureOrders: { __typename?: 'SignatureOrderConnection', edges: Array<{ __typename?: 'SignatureOrderEdge', node: { __typename?: 'SignatureOrder', id: string, status: SignatureOrderStatus, title?: string | null, signatories: Array<{ __typename?: 'Signatory', id: string, status: SignatoryStatus, href: string, downloadHref?: string | null, reference?: string | null, role?: string | null, signatureOrder: { __typename?: 'SignatureOrder', id: string }, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }>, documents: { __typename?: 'SignatoryDocumentConnection', edges: Array<{ __typename?: 'SignatoryDocumentEdge', status?: SignatoryDocumentStatus | null, node: { __typename: 'PdfDocument', id: string } | { __typename: 'XmlDocument', id: string } }> } }>, evidenceProviders: Array<{ __typename: 'AllOfSignatureEvidenceProvider', id: string } | { __typename: 'CriiptoVerifySignatureEvidenceProvider', id: string } | { __typename: 'DrawableSignatureEvidenceProvider', id: string } | { __typename: 'NoopSignatureEvidenceProvider', id: string } | { __typename: 'OidcJWTSignatureEvidenceProvider', id: string }> } }> } } | { __typename: 'SignatoryViewer' } | { __typename: 'UnvalidatedSignatoryViewer' } | { __typename: 'UserViewer' } };

export const BasicDocumentFragmentDoc = gql`
    fragment BasicDocument on Document {
  __typename
  id
  title
  ... on PdfDocument {
    form {
      enabled
    }
  }
}
    `;
export const SignedDocumentFragmentDoc = gql`
    fragment SignedDocument on Document {
  id
  title
  blob
  signatures {
    __typename
    signatory {
      id
    }
    ... on JWTSignature {
      jwt
      jwks
    }
  }
}
    `;
export const BasicSignatoryFragmentDoc = gql`
    fragment BasicSignatory on Signatory {
  id
  status
  href
  downloadHref
  reference
  role
  signatureOrder {
    id
  }
  evidenceProviders {
    __typename
    id
  }
  documents {
    edges {
      status
      node {
        __typename
        id
      }
    }
  }
}
    `;
export const BasicSignatureOrderFragmentDoc = gql`
    fragment BasicSignatureOrder on SignatureOrder {
  id
  status
  title
  signatories {
    ...BasicSignatory
  }
  evidenceProviders {
    __typename
    id
  }
}
    ${BasicSignatoryFragmentDoc}`;
export const CreateSignatureOrderDocument = gql`
    mutation createSignatureOrder($input: CreateSignatureOrderInput!) {
  createSignatureOrder(input: $input) {
    signatureOrder {
      ...BasicSignatureOrder
      documents {
        ...BasicDocument
      }
    }
  }
}
    ${BasicSignatureOrderFragmentDoc}
${BasicDocumentFragmentDoc}`;
export const CleanupSignatureOrderDocument = gql`
    mutation cleanupSignatureOrder($input: CleanupSignatureOrderInput!) {
  cleanupSignatureOrder(input: $input) {
    signatureOrder {
      ...BasicSignatureOrder
      documents {
        ...BasicDocument
      }
    }
  }
}
    ${BasicSignatureOrderFragmentDoc}
${BasicDocumentFragmentDoc}`;
export const AddSignatoryDocument = gql`
    mutation addSignatory($input: AddSignatoryInput!) {
  addSignatory(input: $input) {
    signatory {
      ...BasicSignatory
    }
  }
}
    ${BasicSignatoryFragmentDoc}`;
export const AddSignatoriesDocument = gql`
    mutation addSignatories($input: AddSignatoriesInput!) {
  addSignatories(input: $input) {
    signatories {
      ...BasicSignatory
    }
  }
}
    ${BasicSignatoryFragmentDoc}`;
export const ChangeSignatoryDocument = gql`
    mutation changeSignatory($input: ChangeSignatoryInput!) {
  changeSignatory(input: $input) {
    signatory {
      ...BasicSignatory
    }
  }
}
    ${BasicSignatoryFragmentDoc}`;
export const CloseSignatureOrderDocument = gql`
    mutation closeSignatureOrder($input: CloseSignatureOrderInput!) {
  closeSignatureOrder(input: $input) {
    signatureOrder {
      ...BasicSignatureOrder
      documents {
        ...BasicDocument
        ...SignedDocument
      }
    }
  }
}
    ${BasicSignatureOrderFragmentDoc}
${BasicDocumentFragmentDoc}
${SignedDocumentFragmentDoc}`;
export const CancelSignatureOrderDocument = gql`
    mutation cancelSignatureOrder($input: CancelSignatureOrderInput!) {
  cancelSignatureOrder(input: $input) {
    signatureOrder {
      ...BasicSignatureOrder
      documents {
        ...BasicDocument
      }
    }
  }
}
    ${BasicSignatureOrderFragmentDoc}
${BasicDocumentFragmentDoc}`;
export const SignActingAsDocument = gql`
    mutation signActingAs($input: SignActingAsInput!) {
  signActingAs(input: $input) {
    signatory {
      ...BasicSignatory
    }
  }
}
    ${BasicSignatoryFragmentDoc}`;
export const ValidateDocumentDocument = gql`
    mutation validateDocument($input: ValidateDocumentInput!) {
  validateDocument(input: $input) {
    valid
    errors
    fixable
  }
}
    `;
export const DeleteSignatoryDocument = gql`
    mutation deleteSignatory($input: DeleteSignatoryInput!) {
  deleteSignatory(input: $input) {
    signatureOrder {
      ...BasicSignatureOrder
    }
  }
}
    ${BasicSignatureOrderFragmentDoc}`;
export const SignatureOrderDocument = gql`
    query signatureOrder($id: ID!) {
  signatureOrder(id: $id) {
    ...BasicSignatureOrder
  }
}
    ${BasicSignatureOrderFragmentDoc}`;
export const SignatureOrderWithDocumentsDocument = gql`
    query signatureOrderWithDocuments($id: ID!) {
  signatureOrder(id: $id) {
    ...BasicSignatureOrder
    documents {
      ...BasicDocument
      ...SignedDocument
    }
  }
}
    ${BasicSignatureOrderFragmentDoc}
${BasicDocumentFragmentDoc}
${SignedDocumentFragmentDoc}`;
export const SignatoryDocument = gql`
    query signatory($id: ID!) {
  signatory(id: $id) {
    signatureOrder {
      ...BasicSignatureOrder
    }
    ...BasicSignatory
  }
}
    ${BasicSignatureOrderFragmentDoc}
${BasicSignatoryFragmentDoc}`;
export const SignatureOrdersDocument = gql`
    query signatureOrders($status: SignatureOrderStatus, $first: Int!, $after: String) {
  viewer {
    __typename
    ... on Application {
      signatureOrders(status: $status, first: $first, after: $after) {
        edges {
          node {
            ...BasicSignatureOrder
          }
        }
      }
    }
  }
}
    ${BasicSignatureOrderFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createSignatureOrder(variables: CreateSignatureOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSignatureOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateSignatureOrderMutation>(CreateSignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createSignatureOrder', 'mutation');
    },
    cleanupSignatureOrder(variables: CleanupSignatureOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CleanupSignatureOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CleanupSignatureOrderMutation>(CleanupSignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cleanupSignatureOrder', 'mutation');
    },
    addSignatory(variables: AddSignatoryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddSignatoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddSignatoryMutation>(AddSignatoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addSignatory', 'mutation');
    },
    addSignatories(variables: AddSignatoriesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddSignatoriesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddSignatoriesMutation>(AddSignatoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addSignatories', 'mutation');
    },
    changeSignatory(variables: ChangeSignatoryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeSignatoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeSignatoryMutation>(ChangeSignatoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeSignatory', 'mutation');
    },
    closeSignatureOrder(variables: CloseSignatureOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CloseSignatureOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CloseSignatureOrderMutation>(CloseSignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'closeSignatureOrder', 'mutation');
    },
    cancelSignatureOrder(variables: CancelSignatureOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CancelSignatureOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CancelSignatureOrderMutation>(CancelSignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cancelSignatureOrder', 'mutation');
    },
    signActingAs(variables: SignActingAsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignActingAsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignActingAsMutation>(SignActingAsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signActingAs', 'mutation');
    },
    validateDocument(variables: ValidateDocumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateDocumentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ValidateDocumentMutation>(ValidateDocumentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'validateDocument', 'mutation');
    },
    deleteSignatory(variables: DeleteSignatoryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSignatoryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteSignatoryMutation>(DeleteSignatoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteSignatory', 'mutation');
    },
    signatureOrder(variables: SignatureOrderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignatureOrderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignatureOrderQuery>(SignatureOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signatureOrder', 'query');
    },
    signatureOrderWithDocuments(variables: SignatureOrderWithDocumentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignatureOrderWithDocumentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignatureOrderWithDocumentsQuery>(SignatureOrderWithDocumentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signatureOrderWithDocuments', 'query');
    },
    signatory(variables: SignatoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignatoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignatoryQuery>(SignatoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signatory', 'query');
    },
    signatureOrders(variables: SignatureOrdersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SignatureOrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignatureOrdersQuery>(SignatureOrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signatureOrders', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;