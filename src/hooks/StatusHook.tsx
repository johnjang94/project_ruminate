import { useReducer, useEffect } from 'react'

type StatusState = {
  error: string
  success: string
}

type StatusAction = {
  type: 'SET_ERROR' | 'SET_SUCCESS'
  payload: string
}

const statusReducer = (
  state: StatusState,
  action: StatusAction,
): StatusState => {
  switch (action.type) {
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_SUCCESS':
      return { ...state, success: action.payload }
    default:
      return state
  }
}

const useStatusMessages = (initialState: StatusState, timeout = 3000) => {
  const [statusState, dispatch] = useReducer(statusReducer, initialState)

  useEffect(() => {
    const errorTimer = setTimeout(() => {
      dispatch({ type: 'SET_ERROR', payload: '' })
    }, timeout)

    const successTimer = setTimeout(() => {
      dispatch({ type: 'SET_SUCCESS', payload: '' })
    }, timeout)

    return () => {
      clearTimeout(errorTimer)
      clearTimeout(successTimer)
    }
  }, [statusState])

  return {
    statusState,
    setError: (message: string) =>
      dispatch({ type: 'SET_ERROR', payload: message }),
    setSuccess: (message: string) =>
      dispatch({ type: 'SET_SUCCESS', payload: message }),
  }
}

export default useStatusMessages
