import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import '../styles/table.css'
const Statement = () => {
  const [bills,setBills] = useState([])
  const [debit,setDebit] = useState(0)
  const [credit,setCredit] = useState(0)
  let _debit = 0
  let _credit = 0
  if(bills.length >0){
    bills.forEach((row)=>{
      console.log('hi')
      _debit += Math.floor(row.withdraw)
      _credit += Math.floor(row.credit)
      console.log(_debit,_credit)
    })
    // setDebit(_debit)
    // setCredit(_credit)
  }
  // const [render,setRender] = useState(false)
  const currUser = useSelector((state)=> state.user.currUser)
  const getBills = async () => {
    await axios.post('http://localhost:3000/transaction/get',{id: currUser.id})
    .then(res => { console.log(res.data.transactions)
      setBills(res.data.transactions)
      // bills.forEach((row)=>{
      //   console.log('hi')
      //   _debit += Math.floor(row.withdraw)
      //   _credit += Math.floor(row.credit)
      //   console.log(debit,credit)
      // })
      // setDebit(_debit)
      // setCredit(_credit)
    // console.log(typeof(bills))
  })
    .catch(err => console.log(err.message))
  }
  useEffect(()=>{
    getBills()
  },[])
  return (
    <>
    <div className='container'>
            <Navbar/>
            <div className='card settings'>
                <h1>Statement</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bills.map((bill,index)=>{
                      return <tr>
                        <td>{bill.date}</td>
                        <td>{bill.description}</td>
                        <td>{bill.withdraw}</td>
                        <td>{bill.credit}</td>
                        <td>{bill.balance}</td>
                      </tr>
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td></td>
                      <td>**Total**</td>
                      <td>{_debit}</td>
                      <td>{_credit}</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
            </div>
        </div>
    </>
    
  )
}

export default Statement