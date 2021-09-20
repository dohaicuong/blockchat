import { useLazyLoadQuery, useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { CounterQuery } from './__generated__/CounterQuery.graphql'
import { Button, ButtonGroup, Container, Paper, Typography } from '@mui/material'
import { CounterIncreaseMutation } from './__generated__/CounterIncreaseMutation.graphql'
import { CounterDecreaseMutation } from './__generated__/CounterDecreaseMutation.graphql'
import { CounterResetMutation } from './__generated__/CounterResetMutation.graphql'

const Counter = () => {
  const data = useLazyLoadQuery<CounterQuery>(
    graphql`
      query CounterQuery {
        getCount { count }
      }
    `,
    {}
  )

  const [commitIncrease] = useMutation<CounterIncreaseMutation>(graphql`
    mutation CounterIncreaseMutation {
      increaseCount { count }
    }
  `)
  const handleIncrease = () => commitIncrease({ variables: {} })

  const [commitDecrease] = useMutation<CounterDecreaseMutation>(graphql`
    mutation CounterDecreaseMutation {
      decreaseCount { count }
    }
  `)
  const handleDecrease = () => commitDecrease({ variables: {} })


  const [commitReset] = useMutation<CounterResetMutation>(graphql`
    mutation CounterResetMutation {
      resetCount { count }
    }
  `)
  const handleReset = () => commitReset({ variables: {} })

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 64px)', alignItems: 'center' }}>
      <Container maxWidth='xs'>
        <Paper style={{ padding: 32 }}>
          <Typography variant='h4' align='center' gutterBottom>
            Counter
          </Typography>
          <Typography variant='h6' align='center' gutterBottom>
            {data.getCount.count}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonGroup variant='outlined'>
              <Button onClick={handleIncrease}>+</Button>
              <Button onClick={handleDecrease}>-</Button>
              <Button onClick={handleReset}>reset</Button>
            </ButtonGroup>
          </div>
        </Paper>
      </Container>
    </div>
  )
}
export default Counter
