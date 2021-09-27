import { Environment, RecordSource, Store, Observable } from 'relay-runtime'
import { authMiddleware, RelayNetworkLayer, uploadMiddleware, urlMiddleware } from 'react-relay-network-modern'
import { keepRelayErrorMiddleware } from './keepRelayError'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const {
  REACT_APP_API_ENDPOINT = 'http://localhost:4000/graphql',
  REACT_APP_SUBSCRIPTION_ENDPOINT = 'ws://localhost:4000/graphql',
} = process.env

const subscriptionClient = new SubscriptionClient(REACT_APP_SUBSCRIPTION_ENDPOINT, {
  reconnect: true,
})

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
    // @ts-ignore
    subscribeFn: (request, variables) => {
      const subscribeObservable = subscriptionClient.request({
        query: request.text as any,
        operationName: request.name,
        variables,
      })

      return Observable.from(subscribeObservable as any)
    }
  }
)

export default new Environment({
  network,
  store: new Store(new RecordSource()),
})