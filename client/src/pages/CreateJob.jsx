import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ActBtn from '../components/ActBtn'
import Pencil from '../icons/Pencil'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateJob = () => {
  const currUser = useSelector((state)=> state.user.currUser.username)
  const [userList,setUserList] = useState([])
  const [err,setErr] = useState('')
  const [success,setSuccess] = useState('')

  const [task,setTask] = useState({
    jobName:'',
    assignedTo:'',
    dueDate: '',
    assignedBy: '',
    task:''
  })
 
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

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const processChange = debounce((e) => {
  console.log(e)
  handleChange(e)});

useEffect(()=>{    
  const getUserList = async () => {
    if(task.assignedTo){
      await axios.post('http://localhost:3000/userList',{input:task.assignedTo})
      .then(async res => {
        if(res.status == 200){
          setUserList(res.data);
          // console.log(res.data);
        }
      })
      .catch(err => console.log(err))
    }else{
      setUserList([]);
    }
  }
  getUserList();
},[task.assignedTo])

const handleChange = (event) => {
  // console.log(event)
  const result = document.getElementById('search-result')
  result.classList.add('show-search')
  setTask({...task,assignedTo:event.target.value})
}

const hideResult = (event) => {
  const result = document.getElementById('search-result')
  result.classList.remove('show-search')
}
// console.log(task)
  return (
    <>
      <div className='container'>
            <Navbar/>
            <div className='card'>
                <h1>Create New Job</h1>
                <form className='form' type='submit' onSubmit={(e)=>createJob(e)}>
                  
                  <span className='success'>{success}</span>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Job name' required 
                     onChange={(e)=>setTask({...task,jobName:e.target.value})}></input>
                    <p>Job name</p>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Assigned to' required value={task.assignedTo} onChange={(e)=>handleChange(e)} ></input>
                    <p>Assigned to</p>
                    <div tabIndex={0} id='search-result'>
                      {userList.map((user, index)=>{
                        return <div tabIndex={0} key={index} onClick={()=>{
                          console.log('click')
                          setTask({...task,assignedTo:user.username})
                          hideResult()
                          }}>{user.username}</div>
                      })}
                    </div>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='date' placeholder='  Due date' required onChange={(e)=>setTask({...task,dueDate:e.target.value})}></input>
                    <p>Due date</p>
                  </div>
                  <div className='styled-input'>
                    <input className='input' type='text' placeholder='  Assigned by'  required value={currUser}></input>
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