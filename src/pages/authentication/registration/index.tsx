import React from 'react'
import { UseAuthContext } from '../../../contexts/AuthContext'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'

export default function Registration() {
  const { AuthState, AuthDispatch, auth } = UseAuthContext()

  const Register = async () => {
    const { email, password } = AuthState
    await createUserWithEmailAndPassword(auth, email, password)
    onAuthStateChanged(auth, (currentUser) => {
      AuthDispatch({ type: 'SET_USER', payload: currentUser })
    })
  }

  return (
    <div
      onClick={() => console.log(AuthState.userInfo)}
      className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg "
    >
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            onChange={(e) =>
              AuthDispatch({ type: 'SET_EMAIL', payload: e.target.value })
            }
            type="email"
            id="email"
            className="w-full border rounded p-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            onChange={(e) =>
              AuthDispatch({ type: 'SET_PASSWORD', payload: e.target.value })
            }
            type="password"
            id="password"
            className="w-full border rounded p-2"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={Register}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </div>
  )
}