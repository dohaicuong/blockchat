import { lazy, Suspense } from 'react'

import { RelayEnvironmentProvider } from 'react-relay'
import relay from 'providers/relay'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { theme } from 'providers/theme'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'hooks/useAuth'

const Login = lazy(() => import('pages/Login'))
const Home = lazy(() => import('pages/Home'))
const Counter = lazy(() => import('pages/Counter'))
const RoomsPage = lazy(() => import('pages/RoomsPage'))
const RoomPage = lazy(() => import('pages/RoomPage'))

const App = () => {
  return (
    <RelayEnvironmentProvider environment={relay}>
      <Router>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles styles={{
              '*::-webkit-scrollbar': {
                width: '0.4em'
              },
              '*::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
              },
              '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: '1px solid slategrey'
              }
            }} />
            <Suspense fallback='Loading...'>
              <Routes>
                <Route path='/' element={<Home />}>
                  <Route element={<RoomsPage />}>
                    <Route path='/:roomId' element={<RoomPage />} />
                  </Route>
                  <Route path='counter' element={<Counter />} />
                </Route>
                <Route path='/login' element={<Login />} />
              </Routes>
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
      </Router>
    </RelayEnvironmentProvider>
  )
}

export default App
