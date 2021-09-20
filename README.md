# This is setup for Smart Contract application


## Tech Stack
 - Frontend: React, Relay
 - Backend: GraphQL
 - Smart Contract: Truffle, Ganache

## Getting Start


### Blockchain network and smart contract

#### Install ganache-cli and truffle
```
yarn global add ganache-cli truffle
```

#### Start blockchain network
```
cd contracts && yarn start
```

#### Deploy smart contracts
```
cd contracts && yarn deploy
```


### Start up backend server

#### Install dependencies
```
cd backend
yarn
```

#### Start backend
```
yarn start
```

It's ready if you can see
```
🚀 Playground ready at http://127.0.0.1:4000/graphiql
🚀 Server ready at http://127.0.0.1:4000/graphql
```

You can open your browser and goto `http://127.0.0.1:4000/graphiql` to interact with the GraphQL API


### Start up frontend application

#### Install dependencies
```
cd frontend
yarn
```

#### Start frontend
```
yarn start
```

It's ready when you see something similar to
```
You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.102:3000
```

it will automatically open the webpage on your default browser or you can open that address to see the app