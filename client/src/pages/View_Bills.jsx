import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrUser,setAccessToken} from '../features/UserSlice';
import axios from 'axios'

const View_Bills = () => {
  const dispatch = useDispatch()
  const [bills,setBills] = useState([])
  const [render,setRender] = useState(false)
  const currUser = useSelector((state)=> state.user.currUser)
  const getBills = async () => {
    await axios.post('http://localhost:3000/bill/get',{createdBy: currUser.email})
    .then(res => { console.log(res.data.bills)
      setBills(res.data.bills)
    // console.log(typeof(bills))
  })
    .catch(err => console.log(err.message))
  }
  useEffect(()=>{
    getBills()
  },[render])

  const handleBill = async (id,amount,name) => {
    await axios.post('http://localhost:3000/bill/update',{id})
    .then(res => {
      console.log(res)
      setRender(!render)
    })
    .catch(err => console.log(err.message))

    const newBalance = Math.floor(currUser.balance)-Math.floor(amount)
    await axios.post('http://localhost:3000/user/updateBalance',{id:currUser.id,balance:newBalance})
    .then(res => {
      console.log(res)
      // setRender(!render)
      dispatch(setCurrUser({...currUser,balance:newBalance}))
    })
    .catch(err => console.log(err))

    await axios.post('http://localhost:3000/transaction/create',{userId:currUser.id,description:`Bill paid for ${name}`,withdraw:amount,credit:0,balance:newBalance})
    .then(res => {
      console.log(res)
      // setRender(!render)
      dispatch(setCurrUser({...currUser,balance:newBalance}))
    })
    .catch(err => console.log(err))
  }
  return (
    <>
        <div className='container'>
            <Navbar/>
            <div className='card settings'>
                <h1>All Bills</h1>
                <div className='rem-balance'><h3>Remainig balance: {currUser.balance}</h3></div>
                <div className='view-bill'>
                  <div><h3>Name</h3></div>
                  <div><h3>Type</h3></div>
                  <div><h3>Amount</h3></div>
                  <div><h3>Due date</h3></div>
                  <div><h3>Action</h3></div>
                </div>
                {bills.map((bill)=>{
                  return <div key={bill.rowid} className='view-bill'>
                    <div>{bill.name}</div>
                    <div>{bill.type}</div>
                    <div>{bill.amount}</div>
                    <div>{bill.dueDate}</div>
                    {bill.status == 'pending' ? <div><button className='pay-btn' onClick={()=>handleBill(bill.rowid,bill.amount,bill.name)}>Pay Bill</button></div> : <div><button className='paid-btn'>Paid</button></div>}
                    
                  </div>
                })}
            </div>
        </div>
        
    </>
  )
}

export default View_Bills