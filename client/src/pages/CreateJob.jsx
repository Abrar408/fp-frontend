import React from 'react'
import Navbar from '../components/Navbar'
import ActBtn from '../components/ActBtn'
import Pencil from '../icons/Pencil'
import axios from 'axios'
import { useState } from 'react'

const CreateJob = () => {

  const [task,setTask] = useState({
    jobName:'',
    assignedTo:'',
    dueDate: '',
    assignedBy: '',
    task:''
  })
  const [err,setErr] = useState('')
  const [success,setSuccess] = useState('')
  // console.log(task)
  const createJob = async () => {
    event.preventDefault();
    console.log('creating task')
    await axios.post('http://localhost:3000/job/create',task)
    .then(res =>{
        if(res.status == 200){
            // console.log(res)
            setSuccess(res.data)
            setErr('');
            setTask({
              jobName:'',
              assignedTo:'',
              dueDate: '',
              assignedBy: '',
              task:''
            })
        }
    })
    .catch(err => {
        setErr(err.response.data);
        // console.log(err);
    })
}
const handleChange = (event) => {
  const result = document.getElementById('search-result')
  result.classList.add('show-search')
}
const hideResult = (event) => {
  const result = document.getElementById('search-result')
  result.classList.remove('show-search')
}
  return (
    <>
      <div className='container'>
            <Navbar/>
            <div className='card'>
                <h1>Create New Job</h1>
                <form className='form' type='submit' onSubmit={(e)=>createJob(e)}>
                  
                  <span className='success'>{success}</span>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Job name' required onChange={(e)=>setTask({...task,jobName:e.target.value})}></input>
                    <p>Job name</p>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Assigned to' required onChange={(e)=>handleChange(e)} onBlur={hideResult}></input>
                    <p>Assigned to</p>
                    <div id='search-result'></div>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='date' placeholder='  Due date' required onChange={(e)=>setTask({...task,dueDate:e.target.value})}></input>
                    <p>Due date</p>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Assigned by' required onChange={(e)=>setTask({...task,assignedBy:e.target.value})}></input>
                    <p>Assigned by</p>
                  </div>
                  <div className='styled-input'>
                    <textarea className='input' type='text' placeholder='  Task'  required onChange={(e)=>setTask({...task,task:e.target.value})}></textarea>
                    <p>Task</p>
                  </div>
                  <span className='error'>{err}</span>
                  <ActBtn text={'Create'} endIcon={<Pencil/>}/>
                </form>
            </div>
            <div></div>
        </div>
    </>
  )
}

export default CreateJob