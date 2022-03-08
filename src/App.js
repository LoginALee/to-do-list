import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './config/routes'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default App
