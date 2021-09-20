import { makeSchema } from 'nexus'
import { join } from 'path'

import * as types from './graphql'

export const schema = makeSchema({
  types,
  contextType: {
    module: join(__dirname, 'context', 'index.ts'),
    export: 'Context'
  },
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', '..', 'frontend', 'schema.graphql'),
  },
})
