import React, { useState } from 'react'
import axios from 'axios'
import Logout from '../Logout'

const Hello: React.FC = () => {
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' })

  const fetchCurrentUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const response = await axios
      .get('http://127.0.0.1:3000/api/v1/current_user', {
        withCredentials: true,
      })
      .catch((e) => e)
    setCurrentUser(response.data)
  }

  return (
    <div>
      <div>名前: {currentUser?.name}</div>
      <div>email: {currentUser?.email}</div>
      <Logout />
      <button onClick={fetchCurrentUser}>currentUser</button>
    </div>
  )
}

export default Hello
