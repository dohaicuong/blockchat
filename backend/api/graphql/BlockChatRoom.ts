import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { connectionFromArray } from 'graphql-relay'

export const BlockChatRoom = objectType({
  name: 'BlockChatRoom',
  definition: t => {
    t.nonNull.id('id', {
      resolve: ({ name }) => Buffer.from(`BlockChatRoom:${name}`).toString('base64')
    })
    t.nonNull.string('name')
    t.nonNull.id('hostId')
    t.nonNull.list.nonNull.id('participantIds')
  }
})

export const RoomQuery = extendType({
  type: 'Query',
  definition: t => {
    t.nonNull.field('room', {
      type: 'BlockChatRoom',
      args: {
        id: nonNull('ID')
      },
      resolve: async (_, { id }, { room }) => {
        const [type, name] = Buffer.from(id, 'base64').toString('ascii').split(':')
        const thisRoom = await room.findByName(name)
        return {
          name: thisRoom.room.name,
          hostId: thisRoom.room.host,
          participantIds: thisRoom.participants,
        }
      }
    })
  }
})

export const RoomsQuery = extendType({
  type: 'Query',
  definition: t => {
    t.connectionField('rooms', {
      type: 'BlockChatRoom',
      resolve: async (_, args, { room }) => {
        const rooms = await room
          .findMany()
          .then(rooms => rooms.map(room => {
            return {
              name: room.room.name,
              hostId: room.room.host,
              participantIds: room.participants,
            }
          }))

        return connectionFromArray(rooms, args)
      }
    })
  }
})

export const RoomCreateInput = inputObjectType({
  name: 'RoomCreateInput',
  definition: t => {
    t.nonNull.string('name')
  }
})
export const RoomCreatePayload = objectType({
  name: 'RoomCreatePayload',
  definition: t => {
    t.nonNull.field('room', { type: 'BlockChatRoom' })
  }
})
export const RoomCreateMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('roomCreate', {
      type: 'RoomCreatePayload',
      args: {
        input: nonNull('RoomCreateInput')
      },
      resolve: async (_, { input }, { accountId, room }) => {
        if(!accountId) throw new Error('Please login!')

        await room.create(input.name, { from: accountId })
        const newRoom = await room.findByName(input.name)

        return {
          room: {
            name: newRoom.room.name,
            hostId: newRoom.room.host,
            participantIds: newRoom.participants,
          }
        }
      }
    })
  }
})

export const RoomAddUserInput = inputObjectType({
  name: 'RoomAddUserInput',
  definition: t => {
    t.nonNull.string('roomName')
    t.nonNull.id('userId')
  }
})
export const RoomAddUserMutation = extendType({
  type: 'Mutation',
  definition: t => {
    t.nonNull.field('roomAddUser', {
      type: 'BlockChatRoom',
      args: {
        input: nonNull('RoomAddUserInput')
      },
      resolve: async (_, { input }, { accountId, room }) => {
        if(!accountId) throw new Error('Please login!')

        await room.addPeople(input.roomName, input.userId, { from: accountId })
        const updatedRoom = await room.findByName(input.roomName)

        return {
          name: updatedRoom.room.name,
          hostId: updatedRoom.room.host,
          participantIds: updatedRoom.participants,
        }
      }
    })
  }
})