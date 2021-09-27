import { Avatar, Grid, Typography } from "@mui/material"

export type ChatMessagesProps = {
  avatar?: string
  messages: string[]
  side?: 'right' | 'left'
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  avatar,
  messages,
  side = 'left',
}) => {

  return (
    <Grid
      container
      spacing={2}
      justifyContent={side === 'right' ? 'flex-end' : 'flex-start'}
      sx={{ margin: 0, width: '100%', paddingRight: 2 }}
    >
      {side === 'left' && (
        <Grid item>
          <Avatar src={avatar} />
        </Grid>
      )}
      <Grid item xs={8}>
        {messages.map((msg, i) => {
          const edge =
            i === 0 ? 'first' :
            i === messages.length - 1 ? 'last' :
            undefined
          const edgeSide = `${edge}_${side}`

          return (
            <div
              key={i} 
              style={{ textAlign: side === 'left' ? 'left' : 'right' }}
            >
              <Typography
                align='left'
                sx={{
                  padding: theme => theme.spacing(1, 2),
                  borderRadius: 1.5,
                  marginBottom: 0.5,
                  display: 'inline-block',
                  wordBreak: 'break-word',
                  fontSize: '14px',

                  ...(side === 'left'
                    ? {
                      borderTopRightRadius: theme => theme.spacing(2.5),
                      borderBottomRightRadius: theme => theme.spacing(2.5),
                      backgroundColor: theme => theme.palette.grey[700],
                    }
                    : {
                      borderTopLeftRadius: theme => theme.spacing(2.5),
                      borderBottomLeftRadius: theme => theme.spacing(2.5),
                      backgroundColor: theme => theme.palette.primary.dark,
                      color: theme => theme.palette.primary.contrastText,
                    }
                  ),

                  ...(edgeSide === 'first_left' && {
                    borderTopLeftRadius: theme => theme.spacing(2.5),
                  }),
                  ...(edgeSide === 'first_right' && {
                    borderTopRightRadius: theme => theme.spacing(2.5),
                  }),
                  ...(edgeSide === 'last_left' && {
                    borderBottomLeftRadius: theme => theme.spacing(2.5),
                  }),
                  ...(edgeSide === 'last_right' && {
                    borderBottomRightRadius: theme => theme.spacing(2.5),
                  }),
                }}
              >
                {msg}
              </Typography>
            </div>
          )
        })}
      </Grid>
    </Grid>
  )
}
export default ChatMessages
