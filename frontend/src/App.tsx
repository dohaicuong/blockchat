import { lazy, Suspense } from 'react'

import { RelayEnvironmentProvider } from 'react-relay'
import relay from 'providers/relay'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { theme } from 'providers/theme'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'hooks/useAuth'

const Login = lazy(() => import('pages/Login'))
const Home = lazy(() => import('pages/Home'))
const Counter = lazy(() => import('pages/Counter'))

const App = () => {
  return (
    <RelayEnvironmentProvider environment={relay}>
      <Router>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback='Loading...'>
              <Routes>
                <Route path='/' element={<Home />}>
                  <Route element={<Counter />} />
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
