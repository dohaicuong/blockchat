import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { connectionFromArray } from 'graphql-relay'

export const BlockChatMessage = objectType({
  name: 'BlockChatMessage',
  definition: t => {
    t.nonNull.id('id', {
      resolve: ({ id }: any) => Buffer.from(`BlockChatMessage:${id}`).toString('base64')
    })
    t.nonNull.string('message')
    t.nonNull.string('authorId')
    t.nonNull.string('roomName')
  }
})

export const BlockChatRoomExtendMessages = extendType({
  type: 'BlockChatRoom',
  definition: t => {
    t.connectionField('messages', {
      type: 'BlockChatMessage',
      resolve: async (room, args, { message }) => {
        const messages = await message
          .findAllMessageByRoom(room.name)
          .then(messages => messages.map(message => ({ ...message, id: String(message.id) })))
        
        return connectionFromArray(messages, args)
      }
    })
  }
})

export const MessageSendInput = inputObjectType({
  name: 'MessageSendInput',
  definition: t => {
    t.nonNull.string('room')
    t.nonNull.string('message')
  }
})
export const MessageSendPayload = objectType({
  name: 'MessageSendPayload',
  definition: t => {
    t.nonNull.field('message', { type: 'BlockChatMessage' })
  }
})
export const MessageSendMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('messageSend', {
      type: 'MessageSendPayload',
      args: { input: nonNull('MessageSendInput') },
      resolve: async (_, { input }, { accountId, message, pubsub }) => {
        if(!accountId) throw new Error('Please login!')

        await message.sendMessage(input.room, input.message, { from: accountId })

        const messageCount = await message.getMessageCount(input.room).then(res => res.toNumber())

        const newMessage = await message
          .findMessageByIndex(input.room, messageCount - 1)
          .then(message => ({
            id: String(message.id),
            message: message.message,
            authorId: message.authorId,
            roomName: message.roomName,
          }))

        await pubsub.publish({
          topic: 'MESSAGE_ADDED',
          payload: {
            message: newMessage
          }
        })

        return {
          message: newMessage
        }
      }
    })
  }
})

export const MessageAddedPayload = objectType({
  name: 'MessageAddedPayload',
  definition: t => {
    t.nonNull.field('message', { type: 'BlockChatMessage' })
  }
})
export const MessageAddedSubscription = extendType({
  type: 'Subscription',
  definition: t => {
    t.nonNull.field('messageAdded', {
      type: 'MessageAddedPayload',
      subscribe: async (root, args, { pubsub }) => {
        return pubsub.subscribe('MESSAGE_ADDED')
      },
      resolve: (payload: any) => {
        return {
          message: payload.message
        }
      },
    })
  }
})