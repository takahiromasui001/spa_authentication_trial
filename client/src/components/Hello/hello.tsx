import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

const Hello: React.FC = () => {
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' })

  const client = useMemo(() => axios.create({ withCredentials: true }), [])
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await client
        .get('http://127.0.0.1:3000/api/v1/current_user')
        .catch((e) => e)
      console.log(response)
      setCurrentUser(response.data)
    }

    fetchCurrentUser()
  }, [client])

  const logout = async () => {
    await client.delete('http://127.0.0.1:3000/api/v1/logout')
  }

  return (
    <div>
      <div>名前: {currentUser?.name}</div>
      <div>email: {currentUser?.email}</div>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Hello
