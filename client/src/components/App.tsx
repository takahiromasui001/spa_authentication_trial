import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Hello from './Hello/hello'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Hello />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
