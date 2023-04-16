import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import ActBtn from '../components/ActBtn'
import RightArrow from '../icons/RightArrow'

const Dashboard = () => {
  const [tasks,setTasks] = useState([])
  useEffect(() => {
    const getJobs = async () => {
      await axios.post('http://localhost:3000/job/get',{assignedTo:'talha'})
      .then((res) => {
        console.log(res.data)
        setTasks(res.data)
      })
      .catch((err) => console.error(err))
    }
    getJobs()
  },[])
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