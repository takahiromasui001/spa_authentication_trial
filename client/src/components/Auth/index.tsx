import React, { useContext, ReactElement } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../App'

type AuthProps = {
  children?: ReactElement
}

const Auth: React.FC<AuthProps> = (props) => {
  const { authResult } = useContext(AuthContext)
  return (
    <>
      {authResult.message === 'login succeed' ? (
        props.children
      ) : (
        <Redirect to={'/login'} />
      )}
    </>
  )
}

export default Auth
