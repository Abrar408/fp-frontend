import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/pages.css'
import {store} from './app/store';
import {Provider} from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App'
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/*' element={<App/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
)
