import { server } from './server'

server.listen(4000).then((url) => {
  console.log(`
    🚀 Playground ready at ${url}/graphiql
    🚀 Server ready at ${url}/graphql
  `)
})
