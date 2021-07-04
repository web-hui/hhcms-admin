import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from './pages/login'
import Users from './pages/users'
import './App.less'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
