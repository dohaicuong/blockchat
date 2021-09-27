import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField } from '@mui/material'
import { graphql } from 'babel-plugin-relay/macro'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-relay'
import { CreateRoomDialogMutation, RoomCreateInput } from './__generated__/CreateRoomDialogMutation.graphql'

type CreateRoomDialogProps = {
  open: boolean
  handleClose: () => void
}
const CreateRoomDialog: React.FC<CreateRoomDialogProps> = ({ open, handleClose }) => {
  const [createRoomCommit] = useMutation<CreateRoomDialogMutation>(graphql`
    mutation CreateRoomDialogMutation($input: RoomCreateInput!, $connection: [ID!]!) {
      roomCreate(input: $input) {
        room
        @appendNode(
          edgeTypeName: "BlockChatRoomEdge"
          connections: $connection
        )
        {
          ...RoomItem_room
        }
      }
    }
  `)

  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [message, setMessage] = useState('')
  const { register, handleSubmit } = useForm<RoomCreateInput>()
  const onSubmit: SubmitHandler<RoomCreateInput> = data => {
    createRoomCommit({
      variables: {
        input: data,
        connection: [
          'client:root:__RoomList_query_rooms_connection',
        ]
      },
      onCompleted: (_res, errors) => {
        if(errors) {
          setMessage(errors[0].message)
          setOpenSnackbar(true)

          return
        }
        
        handleClose()
      }
    })
  }

  return (
    <Dialog open={open} onClose={handleClose}
      PaperProps={{
        style: { minWidth: 500 }
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Create a new chat room</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='Room Name'
            fullWidth
            required
            sx={{ '& .MuiInputBase-root': { color: '#fff' } }}
            {...register('name')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit'>Create</Button>
        </DialogActions>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert severity='error' sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Dialog>
  )
}
export default CreateRoomDialog
