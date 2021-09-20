import { useAuth } from 'hooks/useAuth'
import { Navigate, Outlet } from 'react-router'
import Navbar from './Navbar'

const Home = () => {
  const { authed } = useAuth()
  if(!authed) return <Navigate to='/login' replace />

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default Home
