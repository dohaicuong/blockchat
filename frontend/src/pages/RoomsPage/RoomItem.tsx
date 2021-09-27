import { graphql } from "babel-plugin-relay/macro"
import { useFragment } from "react-relay"

import { IconButton, ListItem, ListItemText } from "@mui/material"
import { Add } from '@mui/icons-material'
import { RoomItem_room$key } from "./__generated__/RoomItem_room.graphql"
import { useMatch, useNavigate } from "react-router"
import AddPeopleDialog from "./AddPeopleDialog"
import { useState } from "react"

type RoomItemProps = {
  roomRef: RoomItem_room$key
}
const RoomItem: React.FC<RoomItemProps> = ({ roomRef }) => {
  const match = useMatch<"roomId">("/:roomId")
  const selectedRoomId = match?.params.roomId

  const room = useFragment(
    graphql`
      fragment RoomItem_room on BlockChatRoom {
        id
        name
        participantIds
        ...AddPeopleDialog_room
      }
    `,
    roomRef
  )

  const navigate = useNavigate()
  const handleRoomClick = (id: string) => navigate(`/${id}`)

  const [dialogOpen, setDialogOpen] = useState(false)
  const handleCreateRoomDialogOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setDialogOpen(true)
  }
  const handleCreateRoomDialogClose = () => setDialogOpen(false)
 
  return (
    <ListItem
      key={room.id}
      button
      onClick={() => handleRoomClick(room.id)}
      selected={room.id === selectedRoomId}
      secondaryAction={
        <>
          <IconButton
            onClick={handleCreateRoomDialogOpen}
            title='Add people to room'
          >
            <Add />
          </IconButton>
          <AddPeopleDialog
            open={dialogOpen}
            handleClose={handleCreateRoomDialogClose}
            roomRef={room}
          />
        </>
      }
    >
      <ListItemText
        primary={room.name}
        secondary={`${room.participantIds.length} people here`}
      />
    </ListItem>
  )
}
export default RoomItem
