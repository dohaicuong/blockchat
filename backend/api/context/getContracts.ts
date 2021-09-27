import Web3 from 'web3'
const contract = require('@truffle/contract')

const web3 = new Web3('http://localhost:8545')
const provider = new Web3.providers.HttpProvider('http://localhost:8545')

import counterData from '../../contracts/Counter.json'
const Counter = contract(counterData)
Counter.setProvider(provider)

import BlockChatRoomData from '../../contracts/BlockChatRoom.json'
const BlockChatRoom = contract(BlockChatRoomData)
BlockChatRoom.setProvider(provider)

import BlockChatMessageData from '../../contracts/BlockChatMessage.json'
const BlockChatMessage = contract(BlockChatMessageData)
BlockChatMessage.setProvider(provider)

export const getContracts = async () => {
  const [
    counter,
    room,
    message,
  ] = await Promise.all([
    Counter.deployed(),
    BlockChatRoom.deployed(),
    BlockChatMessage.deployed(),
  ]).catch(r => {
    console.log(r)
    return r
  })

  return {
    counter,
    room,
    message,
  }
}

export const getAccounts = async () => {
  return web3.eth.getAccounts()
}

// temporary types

type BNNumber = {
  toNumber: () => number
}

type RequestOptions = {
  from: string // sender address
}

type Room = {
  name: string
  host: string
}
type RoomWithParticipants = {
  room: Room
  participants: string[]
}

export type RoomContract = {
  roomCount: (options?: RequestOptions) => Promise<BNNumber>
  create: (name: string, options?: RequestOptions) => Promise<void>
  find: (index: number, options?: RequestOptions) => Promise<RoomWithParticipants>
  findByName: (name: string, options?: RequestOptions) => Promise<RoomWithParticipants>
  findMany: (options?: RequestOptions) => Promise<RoomWithParticipants[]>
  addPeople: (roomName: string, userId: string, options?: RequestOptions) => Promise<void>
}

type Message = {
  id: number
  message: string
  authorId: string
  roomName: string
}

export type MessageContract = {
  findAllMessageByRoom: (room: string, options?: RequestOptions) => Promise<Message[]>
  sendMessage: (room: string, message: string, option?: RequestOptions) => Promise<void>

  getMessageCount: (room: string) => Promise<BNNumber>
  findMessageByIndex: (room: string, index: number) => Promise<Message>
}
