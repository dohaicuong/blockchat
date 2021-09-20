import { extendType, objectType } from "nexus";

export const Counter = objectType({
  name: 'Counter',
  definition: t => {
    t.nonNull.id('id')
    t.nonNull.int('count')
  }
})

export const CounterQuery = extendType({
  type: 'Query',
  definition: t => {
    t.nonNull.field('getCount', {
      type: 'Counter',
      resolve: async (_, __, { counter }) => {
        const countRes = await counter.read()

        return {
          id: 'counter_1',
          count: countRes.toNumber()
        }
      }
    })
  }
})

export const CounterIncreaseMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('increaseCount', {
      type: 'Counter',
      resolve: async (_, __, { accountId, counter }) => {
        await counter
          .increase({ from: accountId })
          .catch((err: any) => {
            throw new Error(err.message)
          })

        const countRes = await counter.read()

        return {
          id: 'counter_1',
          count: countRes.toNumber()
        }
      }
    })
  }
})

export const CounterDecreaseMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('decreaseCount', {
      type: 'Counter',
      resolve: async (_, __, { accountId, counter }) => {
        await counter
          .decrease({ from: accountId })
          .catch((err: any) => {
            throw new Error(err.message)
          })

        const countRes = await counter.read()

        return {
          id: 'counter_1',
          count: countRes.toNumber()
        }
      }
    })
  }
})

export const CounterResetMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('resetCount', {
      type: 'Counter',
      resolve: async (_, __, { accountId, counter }) => {
        await counter
          .reset({ from: accountId })
          .catch((err: any) => {
            throw new Error(err.message)
          })

        const countRes = await counter.read()

        return {
          id: 'counter_1',
          count: countRes.toNumber()
        }
      }
    })
  }
})