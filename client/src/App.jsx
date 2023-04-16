import {Routes,Route,useNavigate} from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import CreateJob from './pages/CreateJob';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/create' element={<CreateJob/>}/>
      <Route path='/setting' element={<Settings/>}/>
    </Routes>
  )
}

export default App
