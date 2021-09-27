import { graphql } from "babel-plugin-relay/macro"
import { usePaginationFragment } from "react-relay"

import { IconButton, List, ListItem, ListItemButton, ListSubheader } from "@mui/material"
import { Add } from '@mui/icons-material'
import RoomItem from "./RoomItem"

import { RoomList_query$key } from "./__generated__/RoomList_query.graphql"
import { RoomListPaginationQuery } from "./__generated__/RoomListPaginationQuery.graphql"
import CreateRoomDialog from "./CreateRoomDialog"
import { useState } from "react"

type RoomListProps = {
  queryRef: RoomList_query$key
}
const RoomList: React.FC<RoomListProps> = ({ queryRef }) => {
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment<RoomListPaginationQuery, RoomList_query$key>(
    graphql`
      fragment RoomList_query on Query
      @refetchable(queryName: "RoomListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String", defaultValue: null }
      )
      {
        rooms(first: $count, after: $cursor)
        @connection(key: "RoomList_query_rooms")
        {
          edges {
            node {
              id
              ...RoomItem_room
            }
          }
        }
      }
    `,
    queryRef
  )

  const [createRoomDialogOpen, setCreateRoomDialogOpen] = useState(false)
  const handleCreateRoomDialogOpen = () => setCreateRoomDialogOpen(true)
  const handleCreateRoomDialogClose = () => setCreateRoomDialogOpen(false)

  return (
    <List
      subheader={
        <ListSubheader style={{ display: 'flex', alignItems: 'center' }}>
          <span>Rooms</span>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            size='small'
            style={{ height: 28 }}
            title='Create room'
            onClick={handleCreateRoomDialogOpen}
          >
            <Add fontSize='inherit' />
          </IconButton>
          <CreateRoomDialog open={createRoomDialogOpen} handleClose={handleCreateRoomDialogClose} />
        </ListSubheader>
      }
    >
      {data.rooms?.edges.map(({ node }) => <RoomItem key={node.id} roomRef={node} />)}
      {hasNext && !isLoadingNext && (
        <ListItemButton
          onClick={() => loadNext(10)}
          style={{ justifyContent: 'center' }}
        >
          Load more
        </ListItemButton>
      )}
      {isLoadingNext && (
        <ListItem style={{ justifyContent: 'center' }}>
          Loading...
        </ListItem>
      )}
    </List>
  )  
}
export default RoomList
