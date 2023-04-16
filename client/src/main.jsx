import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import './styles/pages.css'
import Route from './components/Route'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateJob from './pages/CreateJob'
import Settings from './pages/Settings'
import {store} from './app/store';
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Provider store={store}>
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
    <Route path='/create'>
      <CreateJob/>  
    </Route> 
    <Route path='/settings'>
      <Settings/> 
    </Route>
    </Provider>
  </React.StrictMode>,
)
