import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import ActBtn from '../components/ActBtn'
import RightArrow from '../icons/RightArrow'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrUser,setAccessToken} from '../features/UserSlice';
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const dispatch = useDispatch()
  const [amount,setAmount] = useState(0)
  const currUser = useSelector((state)=> state.user.currUser)
  const newBalance = Math.floor(currUser.balance) + Math.floor(amount)
  // const [render,setRender] = useState(false)
  // console.log(currUser)
  const handleClick = async () => {
    await axios.post('http://localhost:3000/user/updateBalance',{id:currUser.id,balance:newBalance})
    .then(res => {
      console.log(res)
      // setRender(!render)
      dispatch(setCurrUser({...currUser,balance:newBalance}))
      setAmount(0)
    })
    .catch(err => console.log(err))
    await axios.post('http://localhost:3000/transaction/create',{userId:currUser.id,description:'Amount Deposited',withdraw:0,credit:amount,balance:newBalance})
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }
  
  return (
    
    <>
    <div className='container'>
            <Navbar/>
            <div className="card dashboard">
              <div className="dashboard-data">
                <h1>Welcome</h1>
                <h3>{currUser.name}</h3>
              </div>
              <div className='dashboard-view'>
                <div className="dashboard-data">
                  <h2>Balance</h2>
                  <h2>{currUser.balance}</h2>
                </div>
                <div className="dashboard-data">
                  <h2>Add Credit</h2>
                  <input className='add-input' type='number' placeholder='  Add Credit' required value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
                  <button className='pay-btn' onClick={()=>{handleClick()}}>Add</button>
                </div>
              </div>
              
            </div>            
      </div>      
    </>
  )
}

export default Dashboard