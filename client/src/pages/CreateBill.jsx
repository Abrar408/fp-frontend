import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ActBtn from '../components/ActBtn'
import Pencil from '../icons/Pencil'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const CreateBill = () => {
  const currUser = useSelector((state)=> state.user.currUser.email)
  const [err,setErr] = useState('')
  const [success,setSuccess] = useState('')

  const [bill,setBill] = useState({
    name:'',
    type:'',
    amount: '',
    dueDate: '',
    createdBy:''
  })
 
  const createBill= async () => {
    event.preventDefault();
    
    console.log('creating bill')
    await axios.post('http://localhost:3000/bill/add',{...bill,createdBy:currUser})
    .then(res =>{
        if(res.status == 200){
            // console.log(res)
            setSuccess(res.data)
            setErr('');
            setBill({
              name:'',
              type:'',
              amount: '',
              dueDate: '',
              createdBy:''
            })
        }
    })
    .catch(err => {
        setErr(err.response.data);
        // console.log(err);
    })
}

  return (
    <>
      <div className='container'>
            <Navbar/>
            <div className='card create-task'>
                <h1>Add Bill</h1>
                <form className='form' type='submit' onSubmit={(e)=>createBill(e)}>
                  
                  <span className='success'>{success}</span>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Bill name' required 
                     value={bill.name} onChange={(e)=>setBill({...bill,name:e.target.value})}></input>
                    <p>Bill name</p>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Bill type' required value={bill.type} onChange={(e)=>setBill({...bill,type:e.target.value})} ></input>
                    <p>Bill type</p>
                    
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='number' placeholder='  Amount'  required value={bill.amount} onChange={(e)=>setBill({...bill,amount:e.target.value})}></input>
                    <p>Amount</p>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='date' placeholder='  Due date' required value={bill.dueDate} onChange={(e)=>setBill({...bill,dueDate:e.target.value})}></input>
                    <p>Due date</p>
                  </div>
                  <span className='error'>{err}</span>
                  <ActBtn text={'Add'} endIcon={<Pencil/>}/>
                </form>
            </div>
            <div></div>
        </div>
    </>
  )
}

export default CreateBill