import React, { useState } from 'react'
import axios from 'axios'

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const login = async () => {
      await axios
        .post(
          'http://127.0.0.1:3000/api/v1/login',
          {
            name: 'user1',
            password: '1111',
          },
          { withCredentials: true }
        )
        .catch(() => console.log('error'))
    }

    login()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </label>
      <label>
        パスワード:
        <input
          name="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </label>
      <input type="submit" value="ログイン" />
    </form>
  )
}

export default Login
