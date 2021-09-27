import { IconButton, InputAdornment, Paper, TextField } from '@mui/material'
import { Send } from '@mui/icons-material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { MessageFormMutation, MessageSendInput } from './__generated__/MessageFormMutation.graphql'
import { MessageForm_room$key } from './__generated__/MessageForm_room.graphql'

type MessageFormProps = {
  roomRef: MessageForm_room$key
  scrollToBottom: () => void
}
const MessageForm: React.FC<MessageFormProps> = ({ roomRef, scrollToBottom }) => {
  const room = useFragment(
    graphql`
      fragment MessageForm_room on BlockChatRoom {
        id
        name
      }
    `,
    roomRef
  )

  const [sendMessageCommit] = useMutation<MessageFormMutation>(graphql`
    mutation MessageFormMutation($input: MessageSendInput!, $connections: [ID!]!) {
      messageSend(input: $input) {
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
  `)

  const { register, handleSubmit, reset } = useForm<MessageSendInput>()
  const onSubmit: SubmitHandler<MessageSendInput> = data => {
    sendMessageCommit({
      variables: {
        input: {
          room: room.name,
          message: data.message
        },
        connections: [
          `client:${room.id}:__MessageList_query_room_messages_connection`
        ]
      },
      onCompleted: (res, errors) => {
        if(errors) return console.log(errors)

        reset()
        scrollToBottom()
      }
    })
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 70,
        background: 'rgb(12, 11, 11, 0.7)',
      }}
    >
      <Paper style={{ width: 'calc(100% - 100px)' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant='outlined'
            fullWidth
            autoFocus
            autoComplete='new-message'
            sx={{ '& .MuiInputBase-root': { color: '#fff' } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type='submit'>
                    <Send />
                  </IconButton>
                </InputAdornment>
              )
            }}
            {...register('message')}
          />
        </form>
      </Paper>
    </div>
  )
}
export default MessageForm
