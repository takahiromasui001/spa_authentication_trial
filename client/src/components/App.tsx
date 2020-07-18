import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Hello from './Hello/hello'
import Login from './Login'
import Auth from './Auth'

type TAuth = {
  authResult: { message: string }
  setAuth: (response: { message: string }) => void
}

export const AuthContext = createContext({} as TAuth)

const App: React.FC = () => {
  const [authResult, setAuthResult] = useState({ message: '' })
  const setAuth = (response: { message: string }) => setAuthResult(response)

  return (
    <div className="App">
      <AuthContext.Provider value={{ authResult, setAuth }}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Auth>
              <Route path="/" component={Hello} />
            </Auth>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
