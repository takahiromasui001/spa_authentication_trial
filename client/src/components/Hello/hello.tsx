import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hello: React.FC = () => {
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' })

  const client = axios.create({ withCredentials: true })
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await client.get(
        'http://127.0.0.1:3000/api/v1/current_user'
      )
      setCurrentUser(response.data)
    }

    fetchCurrentUser()
  }, [])

  return (
    <div>
      <div>名前: {currentUser.name}</div>
      <div>email: {currentUser.email}</div>
    </div>
  )
}

export default Hello
