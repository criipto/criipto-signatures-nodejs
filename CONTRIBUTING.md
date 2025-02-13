# Contributing

## Codegen

SDK is largely controlled via code generation.
Code generation can be run by `npm run codegen`, which takes the latest GraphQL contract from Signatures API and generates new functions for new queries and mutations.

New mutations and queries needs to be added to [`operations.graphql`](./operations.graphql).

In case of asserting the state of the client SDK, tests can be added in `src/test` in the appropriate unit or integration test directory.
