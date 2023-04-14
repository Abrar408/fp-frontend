import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Landing from './pages/Landing'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    {/* <Landing/> */}
    <Login/>
  </React.StrictMode>,
)
