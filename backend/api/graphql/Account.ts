import { extendType, objectType } from "nexus";

export const Account = objectType({
  name: 'Account',
  description: 'For development purpose only',
  definition: t => {
    t.nonNull.id('id')
  }
})

export const AccountQuery = extendType({
  type: 'Query',
  definition: t => {
    t.nonNull.list.nonNull.field('accounts', {
      type: 'Account',
      resolve: async (_, __, { getAccounts }) => {
        const accounts: any[] = await getAccounts()

        return accounts.map(account => ({ id: account }))
      }
    })
  }
})