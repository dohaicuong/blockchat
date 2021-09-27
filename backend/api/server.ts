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
  subscription: true,
  context,
  errorFormatter: (execution, context) => {
    execution.errors?.map(error => {
      // @ts-ignore
      if(error.originalError?.reason) error.message = error.originalError.reason
      
      return error
    })

    return {
      statusCode: 500,
      response: execution
    }
  }
})

// cors
import cors from 'fastify-cors'
server.register(cors)