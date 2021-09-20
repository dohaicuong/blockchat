// setup server
import Fastify from 'fastify'
export const server = Fastify()

// graphql
import mercurius from 'mercurius'
import { schema } from './schema'
import { context } from './context'
server.register(mercurius, {
  schema,
  graphiql: true,
  context
})

// cors
import cors from 'fastify-cors'
server.register(cors)