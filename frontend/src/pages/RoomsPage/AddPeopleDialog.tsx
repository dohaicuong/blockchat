import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Snackbar, TextField } from '@mui/material'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFragment, useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { AddPeopleDialog_room$key } from './__generated__/AddPeopleDialog_room.graphql'
import { AddPeopleDialogMutation, RoomAddUserInput } from './__generated__/AddPeopleDialogMutation.graphql'
import { AddPeopleDialogQuery } from './__generated__/AddPeopleDialogQuery.graphql'

type AddPeopleDialogProps = {
  open: boolean
  handleClose: () => void
  roomRef: AddPeopleDialog_room$key
}
const AddPeopleDialog: React.FC<AddPeopleDialogProps> = ({ open, handleClose, roomRef }) => {
  const data = useLazyLoadQuery<AddPeopleDialogQuery>(
    graphql`
      query AddPeopleDialogQuery {
        accounts {
          id
        }
      }
    `,
    {}
  )

  const room = useFragment(
    graphql`
      fragment AddPeopleDialog_room on BlockChatRoom {
        name
      }
    `,
    roomRef
  )
  const [addPeopleCommit] = useMutation<AddPeopleDialogMutation>(graphql`
    mutation AddPeopleDialogMutation($input: RoomAddUserInput!) {
      roomAddUser(input: $input) {
        ...RoomItem_room
      }
    }
  `)

  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [message, setMessage] = useState('')
  const { register, handleSubmit } = useForm<RoomAddUserInput>()
  const onSubmit: SubmitHandler<RoomAddUserInput> = data => {
    addPeopleCommit({
      variables: { 
        input: {
          roomName: room.name,
          userId: data.userId,
        }
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
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ style: { minWidth: 500 } }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Add user to chat room</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            label='User ID'
            select
            fullWidth
            required
            sx={{ '& .MuiInputBase-root': { color: '#fff' } }}
            {...register('userId')}
            >
              {data.accounts.map(({ id }, index) => (
                <MenuItem key={id} value={id}>
                  {index === 0 ? 'Owner' : `Guest ${index}`}
                </MenuItem>
              ))}
            </TextField>
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
export default AddPeopleDialog
