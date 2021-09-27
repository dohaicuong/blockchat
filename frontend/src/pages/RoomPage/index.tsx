import { graphql } from "babel-plugin-relay/macro"
import { useLazyLoadQuery } from "react-relay"
import { useParams } from "react-router"
import MessageList from "./MessageList"
import { RoomPageQuery } from "./__generated__/RoomPageQuery.graphql"

const RoomPage = () => {
  const { roomId } = useParams()

  const data = useLazyLoadQuery<RoomPageQuery>(
    graphql`
      query RoomPageQuery($id: ID!) {
        ...MessageList_query
      }
    `,
    { id: roomId as any }
  )

  return <MessageList queryRef={data} />
}
export default RoomPage
