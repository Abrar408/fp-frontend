import {Routes,Route,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from './pages/Dashboard';
import CreateBill from './pages/CreateBill';
import Loading from './components/Loading'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrUser,setAccessToken} from './features/UserSlice';
import axios from 'axios';
import View_Bills from './pages/View_Bills';
import Statement from './pages/Statement';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [verifying,setVerifying] = useState(false)
  // useEffect(() => {
  //   const verifyToken = async () => {
  //     await axios.get('http://localhost:3000/refresh',{
  //       withCredentials: true,
  //     })
  //     .then(res => {
  //       dispatch(setCurrUser(res.data.resCred))
  //       dispatch(setAccessToken(res.data.accessToken));
  //       setVerifying(false)
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       navigate('/login');
  //     })
  //   }
  //   verifyToken();
  // },[])

  console.log('route')
  return (
    <Routes>
      <Route path='/dashboard' element={verifying?<Loading/>:<Dashboard/>}/>
      <Route path='/create' element={verifying?<Loading/>:<CreateBill/>}/>
      <Route path='/bills' element={verifying?<Loading/>:<View_Bills/>}/>
      <Route path='/statement' element={verifying?<Loading/>:<Statement/>}/>
    </Routes>
  )
}

export default App
