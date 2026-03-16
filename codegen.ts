import type { CodegenConfig } from '@graphql-codegen/cli'

const graphqlEndpoint = 'https://graphqlplaceholder.vercel.app/graphql'

const config: CodegenConfig = {
  schema: graphqlEndpoint,
  documents: ['src/**/*.graphql', 'src/**/*.ts', 'src/**/*.tsx'],
  generates: {
    './src/lib/gql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'graphql',
      },
    },
  },
}

export default config
