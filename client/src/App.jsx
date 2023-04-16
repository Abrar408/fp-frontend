import {Routes,Route,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import CreateJob from './pages/CreateJob';
import Settings from './pages/Settings';
import Loading from './components/Loading'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrUser,setAccessToken} from './features/UserSlice';
import axios from 'axios';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [verifying,setVerifying] = useState(true)
  useEffect(() => {
    const verifyToken = async () => {
      await axios.get('http://localhost:3000/refresh',{
        withCredentials: true,
      })
      .then(res => {
        dispatch(setCurrUser(res.data.resCred))
        dispatch(setAccessToken(res.data.accessToken));
        setVerifying(false)
      })
      .catch(err => {
        console.error(err);
        navigate('/login');
      })
    }
    verifyToken();
  },[])

  console.log('route')
  return (
    <Routes>
      <Route path='/dashboard' element={verifying?<Loading/>:<Dashboard/>}/>
      <Route path='/create' element={verifying?<Loading/>:<CreateJob/>}/>
      <Route path='/settings' element={verifying?<Loading/>:<Settings/>}/>
    </Routes>
  )
}

export default App
