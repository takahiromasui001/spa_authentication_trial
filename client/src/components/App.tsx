import React, { useState } from 'react'
import axios from 'axios'

const App: React.FC = () => {
  const [loginResult, setLoginResult] = useState({ message: '' })
  const [currentUser, setCurrentUser] = useState({ name: '' })
  const client = axios.create({ withCredentials: true })

  const login = async () => {
    const response = await client.post('http://127.0.0.1:3000/api/v1/login', {
      name: 'user2',
      password: '1111',
    })
    setLoginResult(response.data)
  }

  const fetchCurrentUser = async () => {
    const response = await client.get(
      'http://127.0.0.1:3000/api/v1/current_user'
    )
    setCurrentUser(response.data)
    console.log(response.data)
  }

  return (
    <div className="App">
      <div>Learn React</div>
      <button onClick={login}>login</button>
      <div>loginResult={loginResult.message}</div>
      <button onClick={fetchCurrentUser}>currentUser</button>
      <div>currentUser={currentUser.name}</div>
    </div>
  )
}

export default App
