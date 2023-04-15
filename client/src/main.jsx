import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Route from './components/Route'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Route path='/'>
      <Landing/>  
    </Route> 
    <Route path='/login'>
      <Login/>  
    </Route>
    <Route path='/register'>
      <Register/>  
    </Route> 
    <Route path='/dashboard'>
      <Dashboard/>  
    </Route> 
    {/* <Landing/> */}
    {/* <Login/> */}
    {/* <Register/> */}
  </React.StrictMode>,
)
