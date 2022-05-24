import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import routes from './config/routes'
import Navbar from './components/Navbar/Navbar'
import AppRoute from './components/AppRoute/AppRoute'
import { AuthProvider } from './context/index'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar history={[]} />
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                isPrivate={route.isPrivate}
                Component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
