import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import logo from 'assets/logo.png'
import { useAuth } from 'hooks/useAuth'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={() => navigate('/')}
        >
          <img alt='BlockChat' src={logo} style={{ width: 25 }} />
        </IconButton>
        <Typography variant='h6'>
          Block Chat
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Button onClick={logout}>
          logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
