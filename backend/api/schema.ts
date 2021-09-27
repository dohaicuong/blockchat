import { makeSchema, connectionPlugin } from 'nexus'
import { join } from 'path'

import * as types from './graphql'

export const schema = makeSchema({
  types,
  plugins: [
    connectionPlugin({
      disableBackwardPagination: true,
      strictArgs: true,
      nonNullDefaults: { input: true, output: true },
    })
  ],
  contextType: {
    module: join(__dirname, 'context', 'index.ts'),
    export: 'Context'
  },
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', '..', 'frontend', 'schema.graphql'),
  },
})
