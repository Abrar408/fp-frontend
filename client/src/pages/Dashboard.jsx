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
    await axios.post('http://localhost:3000/job/get',{assignedTo:currUser})
    .then((res) => {
      // console.log(res.data)
      setTasks(res.data)
    })
    .catch((err) => console.error(err))
  }

  useEffect(() => {
    getJobs()
  },[render])
  return (
    
    <>
    <div className='container'>
            <Navbar/>
            <div className='card pending-task'>
                <h1 >Pending tasks</h1>
                <div>
                  {tasks.length>0 ? (
                    tasks.map((task)=>{
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
                      </div>
                      <ActBtn text={'Submit'} endIcon={<RightArrow/>} sx={{width:'100%'}}/>
                    </div>
                    })
                      
                  ) : (
                    <p>Hurray! no tasks pending</p>
                  )}
                  
                </div>                
            </div>
            <div className='card completed-task'>
                <h1 >Completed tasks</h1>
            </div>
      </div>      
    </>
  )
}

export default Dashboard