import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'https://signatures-api.criipto.com/v1/graphql',
  generates: {
    'src/graphql-sdk.ts': {
      documents: './src/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        strictScalars: true,
        namingConvention: {
          enumValues: 'keep'
        },
        enumsAsTypes: true,
        scalars: {
          Blob: 'Buffer',
          Date: 'string',
          DateTime: 'string',
          URI: 'string'
        }
      }
    }
  }
}
export default config;