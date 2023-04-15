import '../styles/info.css'
import React from 'react'
import Tick from '../icons/Tick'
import ActBtn from './ActBtn'
import Logo from './Logo'
import NavBtn from './NavBtn'
import DownArrow from '../icons/DownArrow'
import Link from './Link'
import RightArrow from '../icons/RightArrow'

const SignInSignOut = () => {
    const navBtns = ['Product','Solutions','Enterprise','Pricing']
    const points = [
        'Make comprehensive project timelines',
        'Track progress, budgets and resources',
        'Plan and collaborate with your team'
    ]
  return (
    <>
        <div className='landing'>
            <div className="landing-navbar">
                <div className='landing-nav-logo'>
                    <Logo/>
                    <p>Job Management</p>
                </div>
                <div className='landing-nav-btns'>
                    {navBtns.map((txt,index)=> 
                    <NavBtn key={index} text={txt} endIcon={<DownArrow/>} />
                    )}
                </div>
                <div className='landing-action-btns'>
                    <Link className='link' href='/login'>
                        <ActBtn text={'Login'} endIcon={<RightArrow/>}/>
                    </Link>
                </div>
            </div>
            <div className="landing-info">
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
        </div>
    </>
  )
}

export default SignInSignOut