import { graphql } from 'babel-plugin-relay/macro'
import ChatMessages from 'components/ChatMessages'
import { useCallback, useEffect, useMemo, useRef } from "react"
import { usePaginationFragment, useSubscription } from 'react-relay'
import MessageForm from './MessageForm'
import { parseMessagesToGroups } from './parseMessagesToGroups'
import { MessageListPaginationQuery } from './__generated__/MessageListPaginationQuery.graphql'
import { MessageListSubscription } from './__generated__/MessageListSubscription.graphql'
import { MessageList_query$key } from './__generated__/MessageList_query.graphql'

type MessageListProps = {
  queryRef: MessageList_query$key
}
const MessageList: React.FC<MessageListProps> = ({ queryRef }) => {
  const currentUserId = localStorage.getItem('accountId')
  const endOfPage = useRef<HTMLDivElement>(null)
  const scrollToBottom = useCallback(() => {
    endOfPage.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const { data } = usePaginationFragment<MessageListPaginationQuery, MessageList_query$key>(
    graphql`
      fragment MessageList_query on Query
      @refetchable(queryName: "MessageListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 99999 }
        cursor: { type: "String", defaultValue: null }
      )
      {
        room(id: $id) {
          id
          ...MessageForm_room
          messages(first: $count, after: $cursor)
          @connection(key: "MessageList_query_room_messages")
          {
            edges {
              node {
                id
                message
                authorId
              }
            }
          }
        }
      }
    `,
    queryRef
  )
  useEffect(() => {
    setTimeout(() => {
      scrollToBottom()
    }, 500)
  }, [data.room.id, scrollToBottom])

  const config = useMemo(() => ({
    subscription,
    variables: {
      connections: [
        `client:${data.room.id}:__MessageList_query_room_messages_connection`
      ]
    },
    onNext: () => {
      scrollToBottom()
    }
  }), [data.room.id, scrollToBottom])
  useSubscription<MessageListSubscription>(config)

  const messageGroups = parseMessagesToGroups(data.room.messages?.edges ?? [])
  return (
    
    <div style={{ position: 'relative' }}>
      <div style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
        {messageGroups?.map((group, index) => (
          <ChatMessages
            key={`${group.authorId}_${index}`}
            side={group.authorId === currentUserId ? 'right' : 'left'}
            messages={group.messages}
          />
        ))}
        <div ref={endOfPage} style={{ height: 75 }} />
      </div>
      <MessageForm roomRef={data.room} scrollToBottom={scrollToBottom} />
    </div>
  )
}
export default MessageList

const subscription = graphql`
  subscription MessageListSubscription($connections: [ID!]!) {
    messageAdded {
      message
      @appendNode(
        edgeTypeName: "BlockChatMessageEdge"
        connections: $connections
      )
      {
        id
        message
        authorId
      }
    }
  }
`