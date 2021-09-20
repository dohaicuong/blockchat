import { FastifyRequest, FastifyReply } from "fastify"
import { getContracts, getAccounts } from "./getContracts"

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T

export type Context = ThenArg<ReturnType<typeof context>>

export const context = async (request: FastifyRequest, reply: FastifyReply) => {
  // const accounts = await getAccounts()
  const contracts = await getContracts()
  const accountId = request.headers.authorization?.replace('Bearer ', '')

  return {
    getAccounts,
    accountId,
    // accounts,
    ...contracts
  }
}
