import { Environment, RecordSource, Store } from 'relay-runtime'
import { authMiddleware, RelayNetworkLayer, uploadMiddleware, urlMiddleware } from 'react-relay-network-modern'
import { keepRelayErrorMiddleware } from './keepRelayError'

const {
  REACT_APP_API_ENDPOINT = 'http://localhost:4000/graphql',
} = process.env

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () => Promise.resolve(REACT_APP_API_ENDPOINT),
    }),
    authMiddleware({
      token: () => localStorage.getItem('accountId') || '',
    }),
    uploadMiddleware(),
    keepRelayErrorMiddleware()
  ],
  {
    noThrow: true,
  }
)

export default new Environment({
  network,
  store: new Store(new RecordSource()),
})