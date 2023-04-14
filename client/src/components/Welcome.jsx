import '../styles/info.css'
import React from 'react'
import Tick from '../icons/Tick'
import ActBtn from './ActBtn'

const SignInSignOut = () => {
    const points = [
        'Make comprehensive project timelines',
        'Track progress, budgets and resources',
        'Plan and collaborate with your team'
    ]
  return (
    <>
        <div className='landing'>
            <div className='info'>
                <h1>Job Management Software</h1>
                <h3>Track Jobs, schedules and workload</h3>
                {
                    points.map((point,index)=> {
                        return <div key={index} className='points' >
                                <Tick/>
                                <p>{point}</p>
                            </div>
                    }
                        
                    )
                }
                <ActBtn text={'Start free trial'} />
            </div>
            <div className='login'>

            </div>
        </div>
    </>
  )
}

export default SignInSignOut