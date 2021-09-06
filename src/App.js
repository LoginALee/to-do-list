import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewToDo from './pages/NewToDo'
import MyToDos from './pages/MyToDos'
import LandingPage from './pages/LandingPage'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/whyus">
            <div>Missing</div>
          </Route>
          <Route path="/login">
            <div>Missing</div>
          </Route>
          <Route path="/signup">
            <div>Missing</div>
          </Route>
          <Route path="/newtodo">
            <NewToDo />
          </Route>
          <Route path="/todos">
            <MyToDos />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
