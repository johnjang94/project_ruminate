import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../components/api/firebase/index'
import useStatusMessages from '../hooks/StatusHook'

type TestState = {
  email: string
  password: string
  userInfo: any
}

type TestAction = {
  payload?: any
  type: string
}

type StatusStateType = {
  error: string
  success: string
}

type Cell = {
  AuthState: TestState
  AuthDispatch: React.Dispatch<TestAction>
  auth: any
  // auth
  googleAuth: () => void
  Register: () => void
  LogIn: () => void
  logOut: () => void
  //status
  setSuccess: (message: string) => void
  setError: (message: string) => void
  statusState: StatusStateType
}

const AuthContext = createContext<Cell | null>(null)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  //  status handling
  const { statusState, setError, setSuccess } = useStatusMessages({
    error: '',
    success: '',
  })
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
  //  after page reload we are getting user information from session and updating the global state of AuthState.userInfo with it
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      AuthDispatch({ type: 'SET_USER', payload: currentUser })
    })
  }, [])

  // authentication functionality
  // google auth

  const provider = new GoogleAuthProvider()
  //   this authentication functions would be better to be inside of the each respective component instad of context API

  const googleAuth = async () => {
    try {
      const user = await signInWithPopup(auth, provider)
      AuthDispatch({ type: 'SET_USER', payload: user.user })
      setSuccess('User Has Been Authenticated')
      console.log(user)
    } catch (error) {
      const err: any = error
      console.log(err.code)
      setError(err.code)
    }
  }

  // register
  const Register = async () => {
    const { email, password } = AuthState
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      onAuthStateChanged(auth, (currentUser) => {
        AuthDispatch({ type: 'SET_USER', payload: currentUser })
      })
      setSuccess('User Has Been Created')
    } catch (error) {
      const err: any = error
      console.log(err.code)
      setError(err.code)
    }
  }
  // login
  const LogIn = async () => {
    const { email, password } = AuthState
    try {
      await signInWithEmailAndPassword(auth, email, password)
      onAuthStateChanged(auth, (currentUser) => {
        AuthDispatch({ type: 'SET_USER', payload: currentUser })
        console.log(currentUser)
      })
      setSuccess('User Has Logged In')
    } catch (error) {
      const err: any = error
      console.log(err.code)
      setError(err.code)
    }
  }
  // logout
  const logOut = async () => {
    await signOut(auth)
    AuthDispatch({ type: 'SET_USER', payload: {} })
    window.location.reload()
  }

  return (
    <AuthContext.Provider
      value={{
        AuthState,
        AuthDispatch,
        auth,
        logOut,
        Register,
        LogIn,
        googleAuth,
        statusState,
        setError,
        setSuccess,
      }}
    >
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
