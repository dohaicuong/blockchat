import Web3 from 'web3'

import contract from '@truffle/contract'
import counterData from '../../contracts/Counter.json'

const web3 = new Web3('http://localhost:8545')
const provider = new Web3.providers.HttpProvider('http://localhost:8545')

// @ts-ignore
const Counter = contract(counterData)
Counter.setProvider(provider)

export const getContracts = async () => {
  const [
    counter
  ] = await Promise.all([
    Counter.deployed(),
  ])

  return { counter }
}

export const getAccounts = async () => {
  return web3.eth.getAccounts()
}