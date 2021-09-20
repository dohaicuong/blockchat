import { Button, Container, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { useAuth } from 'hooks/useAuth'
import { Navigate, useLocation, useNavigate } from 'react-router'
import logo from 'assets/logo.png'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { LoginAccountQuery } from './__generated__/LoginAccountQuery.graphql'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  account: string
}

const Login = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { authed, login } = useAuth()
  
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    login(data.account).then(() =>  void navigate((state as any)?.path || '/'))
  }

  const data = useLazyLoadQuery<LoginAccountQuery>(
    graphql`
      query LoginAccountQuery {
        accounts {
          id
        }
      }
    `,
    {}
  )

  if(authed) return <Navigate to='/' replace />

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
      <Container maxWidth='xs'>
        <Paper style={{ padding: 32 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h4' align='center' gutterBottom>
              Sign in
            </Typography>
            {/* <Typography variant='h6' align='center' gutterBottom>
              to your Block Chat
            </Typography> */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
              <img src={logo} style={{ width: 160 }} alt='BlockChat' />
            </div>

            <TextField
              label='Login as'
              focused
              select
              fullWidth
              style={{ marginBottom: 16 }}
              sx={{
                '& .MuiSelect-root': {
                  color: '#fff'
                },
              }}
              required
              {...register('account')}
            >
              {data.accounts.map(({ id }, index) => (
                <MenuItem key={id} value={id}>
                  {index === 0 ? 'Owner' : `Guest ${index}`}
                </MenuItem>
              ))}
            </TextField>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type='submit' variant='contained'>
                Log in
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  )
}

export default Login
