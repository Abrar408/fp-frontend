import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import ActBtn from '../components/ActBtn'
import RightArrow from '../icons/RightArrow'
import {io} from 'socket.io-client'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrUser,setAccessToken} from '../features/UserSlice';
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';

const socket = io('http://localhost:5000')
socket.on('connect', () => {
  console.log('Connected to socket')
})
const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [render,setRender] = useState(false)
  const currUser = useSelector((state)=> state.user.currUser.username)
  const admin = useSelector((state)=> state.user.currUser.admin)
  const [tasks,setTasks] = useState([])

  socket.on('dashboard', () => {
    console.log('updating dashboard')
    setRender((render)=>!render)
  })

  const getJobs = async () => {
    if(admin == true){
      await axios.post('http://localhost:3000/job/getAdmin',{assignedBy:currUser})
      .then((res) => {
        console.log(res.data)
        setTasks(res.data)
      })
      .catch((err) => console.error(err))
    } else {
      await axios.post('http://localhost:3000/job/get',{assignedTo:currUser})
      .then((res) => {
        console.log(res.data)
        setTasks(res.data)
      })
      .catch((err) => console.error(err))
    }    
    
  }

  const submitJob = async (jobName) => {
    console.log('submitting')
    await axios.post('http://localhost:3000/job/submit',{jobName})
    .then(()=> socket.emit('dashboard',''))
  }
  const acceptJob = async (jobName) => {
    console.log('submitting')
    await axios.post('http://localhost:3000/job/accept',{jobName})
    .then(()=> socket.emit('dashboard',''))
  }
  const rejectJob = async (jobName) => {
    console.log('submitting')
    await axios.post('http://localhost:3000/job/reject',{jobName})
    .then(()=> socket.emit('dashboard',''))
  }

  useEffect(() => {
    getJobs()
  },[render])
  const filterAdminResults = (data) =>{
    return data.status == 'in Review...' || data.status == 'pending...'
  }
  const filterPendingResults = (data) =>{
    return data.status == 'in Review...' || data.status == 'pending...'
  }
  const filterCompletedResults = (data) =>{
    return data.status == 'Completed' || data.status == 'Rejected'
  }
  return (
    
    <>
    <div className='container'>
            <Navbar/>
            {admin == true ? (
              <div className='card review-task'>
                <h1 >Tasks to review</h1>
                <div>
                  {tasks.length>0 ? (
                    tasks.filter(filterAdminResults).map((task) =>{
                      return <div className='task'>
                        <div className='task-row'>
                        <div>Job Name:</div>
                        <span>{task.jobName}</span>
                      </div>
                      <div className='task-row'>
                        <div>Assigned to:</div>
                        <span>{task.assignedTo}</span>
                      </div>
                      <div className='task-row'>
                        <div>Due date:</div>
                        <span>{task.dueDate}</span>
                      </div>
                      <div className='task-row'>
                        <div>Submitted on:</div>
                        <span>{task.submittedOn}</span>
                      </div>
                      <div className='task-row'>
                        <div>Status:</div>
                        <span>{task.status}</span>
                      </div>
                      <div className='task-row'>
                        <textarea readOnly>{task.task}</textarea>
                      </div >
                      <div className='task-row'> 
                      {task.status === 'in Review...' ? (
                        <>
                        <div onClick={()=>{acceptJob(task.jobName)}}>
                          <ActBtn text={'Accept'} sx={{width:'115px'}}/>
                        </div>
                        <div onClick={()=>{rejectJob(task.jobName)}}>
                          <ActBtn text={'Reject'} sx={{width:'115px',color:'red'}}/>
                        </div>
                        </>
                      ) : (<p></p>)}                       
                        
                      </div >
                      </div>
                    })
                  ) : (<p>No jobs to review</p>)}
                </div>
              </div>
            ) : (
              <>
            <div className='card pending-task'>
                <h1 >Pending tasks</h1>
                <div>
                  {tasks.length>0 ? (
                    tasks.filter(filterPendingResults).map((task)=>{
                      return <div className='task'>
                      <div className='task-row'>
                        <div>Job Name:</div>
                        <span>{task.jobName}</span>
                      </div>
                      <div className='task-row'>
                        <div>Assigned by:</div>
                        <span>{task.assignedBy}</span>
                      </div>
                      <div className='task-row'>
                        <div>Due date:</div>
                        <span>{task.dueDate}</span>
                      </div>
                      <div className='task-row'>
                        <div>Status:</div>
                        <span>{task.status}</span>
                      </div>
                      <div className='task-row'>
                        <textarea readOnly>{task.task}</textarea>
                      </div >
                      {task.status === 'pending...' ? (
                        <div onClick={()=>{submitJob(task.jobName)}}>
                        <ActBtn text={'Submit'} endIcon={<RightArrow/>} sx={{width:'100%'}}/>
                        </div>
                      ) : (
                        <ActBtn id='actBtn' text={'Submitted'} disabled={'true'} sx={{width:'100%'}}/>
                      )}
                      {/* <div onClick={()=>{submitJob(task.jobName)}}>
                      <ActBtn text={'Submit'} endIcon={<RightArrow/>} sx={{width:'100%'}}/>
                      </div> */}
                    </div>
                    })
                      
                  ) : (
                    <p>Hurray! no tasks pending</p>
                  )}
                  
                </div>                
            </div>
            <div className='card completed-task'>
                <h1 >Completed tasks</h1>
                <div>
                  {tasks.length>0 ? (
                    tasks.filter(filterCompletedResults).map((task)=>{
                      return <div className='task'>
                      <div className='task-row'>
                        <div>Job Name:</div>
                        <span>{task.jobName}</span>
                      </div>
                      <div className='task-row'>
                        <div>Assigned by:</div>
                        <span>{task.assignedBy}</span>
                      </div>
                      <div className='task-row'>
                        <div>Due date:</div>
                        <span>{task.dueDate}</span>
                      </div>
                      <div className='task-row'>
                        <div>Status:</div>
                        <span>{task.status}</span>
                      </div>
                      <div className='task-row'>
                        <textarea readOnly>{task.task}</textarea>
                      </div >
                      {task.status === 'pending...' ? (
                        <div onClick={()=>{submitJob(task.jobName)}}>
                        <ActBtn text={'Submit'} endIcon={<RightArrow/>} sx={{width:'100%'}}/>
                        </div>
                      ) : (
                        <ActBtn id='actBtn' text={'Submitted'} disabled={'true'} sx={{width:'100%'}}/>
                      )}
                      {/* <div onClick={()=>{submitJob(task.jobName)}}>
                      <ActBtn text={'Submit'} endIcon={<RightArrow/>} sx={{width:'100%'}}/>
                      </div> */}
                    </div>
                    })
                      
                  ) : (
                    <p></p>
                  )}
                  
                </div>
            </div>
            </>
            )}
            
      </div>      
    </>
  )
}

export default Dashboard