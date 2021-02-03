import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { NavbarNoAuth } from './components/NavbarNoAuth'
import { Navbar } from './components/Navbar'
import 'materialize-css'
 


function App() {
  const { login, logout, token, userId, root } = useAuth()
  const isAuthenticated = !!token
  const isMentor = root
  const routes = useRoutes(isAuthenticated, isMentor)
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>
      <Router>
        { !isAuthenticated && <NavbarNoAuth /> }
        { isAuthenticated && <Navbar /> }
        <div className="wrap">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
    
  )
}

export default App;
