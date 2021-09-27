import { FastifyRequest, FastifyReply } from "fastify"
import { PubSub } from "mercurius"
import { getContracts, getAccounts, RoomContract, MessageContract } from "./getContracts"

export type Context = {
  accountId: string | undefined
  getAccounts: () => Promise<string[]>

  counter: any
  room: RoomContract
  message: MessageContract
  pubsub: PubSub
}

export const context = async (request: FastifyRequest, reply: FastifyReply) => {
  const contracts = await getContracts()
  const accountId = request.headers.authorization?.replace('Bearer ', '')

  return {
    getAccounts,
    accountId,
    ...contracts
  }
}
