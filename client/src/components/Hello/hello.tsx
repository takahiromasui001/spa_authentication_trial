import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Login from '../Login'

const Hello: React.FC = () => {
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' })

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await axios
        .get('http://127.0.0.1:3000/api/v1/current_user', {
          withCredentials: true,
        })
        .catch((e) => e)
      console.log(response)
      setCurrentUser(response.data)
    }

    fetchCurrentUser()
  }, [])

  const logout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await axios.delete('http://127.0.0.1:3000/api/v1/logout', {
      withCredentials: true,
    })
  }

  const fetchCurrentUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const response = await axios
      .get('http://127.0.0.1:3000/api/v1/current_user', {
        withCredentials: true,
      })
      .catch((e) => e)
    console.log(response)
    setCurrentUser(response.data)
  }

  return (
    <div>
      <Login />
      <div>名前: {currentUser?.name}</div>
      <div>email: {currentUser?.email}</div>
      <button onClick={logout}>logout</button>
      <button onClick={fetchCurrentUser}>currentUser</button>
    </div>
  )
}

export default Hello
