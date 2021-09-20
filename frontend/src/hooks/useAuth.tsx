import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export const authContext = createContext<ReturnType<typeof ContextValue>>({} as any)
export const useAuth = () => {
  return useContext(authContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const auth = ContextValue()

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

const ContextValue = () => {
  const [authed, setAuthed] = useState(false)
  
  useEffect(() => {
    const accountId = localStorage.getItem('accountId')

    if(accountId) setAuthed(true)
  }, [])

  const login = useCallback((accountId: string) => {
    localStorage.setItem('accountId', accountId)

    return new Promise<void>((res) => {
      setAuthed(true)
      res()
    })
  }, [])

  const logout = useCallback(() => {
    localStorage.clear()

    return new Promise<void>((res) => {
      setAuthed(false)
      res()
    })
  }, [])

  return { authed, login, logout }
}