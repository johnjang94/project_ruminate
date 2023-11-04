import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../firebase/firebase'

type TestState = {
  email: string
  password: string
  userInfo: any
}

type TestAction = {
  payload?: any
  type: string
}

type Cell = {
  AuthState: TestState
  AuthDispatch: React.Dispatch<TestAction>
  auth: any
}

const AuthContext = createContext<Cell | null>(null)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const initialState: TestState = {
    email: '',
    password: '',
    userInfo: {},
  }

  const AuthReducer = (state: TestState, action: TestAction) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload }
      case 'SET_PASSWORD':
        return { ...state, password: action.payload }
      case 'SET_USER':
        return { ...state, userInfo: action.payload }
      default:
        return state
    }
  }
  const [AuthState, AuthDispatch] = useReducer(AuthReducer, initialState)
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      AuthDispatch({ type: 'SET_USER', payload: currentUser })
      console.log(currentUser)
    })
  }, [])
  return (
    <AuthContext.Provider value={{ AuthState, AuthDispatch, auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const UseAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('Context Not Wrapped Reload Page')
  }

  return context
}
