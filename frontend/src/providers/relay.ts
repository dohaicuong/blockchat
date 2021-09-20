import {
  Environment,
  Network,
  RecordSource,
  Store,

  RequestParameters,
  Variables,
  CacheConfig,
  UploadableMap,
} from 'relay-runtime'

function fetchQuery(
  operation: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: UploadableMap | null | undefined,
) {
  const accountId = localStorage.getItem('accountId')

  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${accountId}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })
  .then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)
const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store
})

export default environment
