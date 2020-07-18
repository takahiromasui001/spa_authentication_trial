import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Logout: React.FC = () => {
  const history = useHistory()

  const logout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await axios.delete('http://127.0.0.1:3000/api/v1/logout', {
      withCredentials: true,
    })
    history.push('/login')
  }

  return <button onClick={logout}>logout</button>
}

export default Logout
