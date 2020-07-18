import React, { ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

type AuthProps = {
  children?: ReactElement
}

const Auth: React.FC<AuthProps> = (props) => {
  const history = useHistory()

  useEffect(() => {
    const currentUser = async () => {
      await axios
        .get('http://127.0.0.1:3000/api/v1/current_user', {
          withCredentials: true,
        })
        .catch(() => history.push('/login'))
    }

    currentUser()
  }, [])

  return <>{props.children}</>
}

export default Auth
