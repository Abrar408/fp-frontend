import '../styles/info.css'
import React from 'react'
import Tick from '../icons/Tick'
import ActBtn from './ActBtn'
// import Logo from './Logo'
import NavBtn from './NavBtn'
import DownArrow from '../icons/DownArrow'
// import Link from './Link'
import RightArrow from '../icons/RightArrow'
import { Link } from 'react-router-dom';
import Bank from '../assets/bank.jpg'
import Logo from '../assets/bank.png'

const SignInSignOut = () => {
    const navBtns = ['Products','Solutions','Enterprise']
    const points = [
        'Managing transactions',
        'Keeping track of your bills',
        'Everything is just a click away'
    ]
  return (
    <>
        <div className='landing'>
            <div className="landing-navbar">
                <div className='landing-nav-logo'>
                    <img src={Logo}></img>
                    <p>JMHM Bank</p>
                </div>
                {/* <div className='landing-nav-btns'>
                    {navBtns.map((txt,index)=> 
                    <NavBtn key={index} text={txt} endIcon={<DownArrow/>} />
                    )}
                </div> */}
                <div className='landing-action-btns'>
                    <Link className='link' to={'/login'}>
                        <ActBtn text={'Login'} endIcon={<RightArrow/>}/>
                    </Link>
                </div>
            </div>
            <div className="landing-info">
                <div className='info'>
                    <h1>JMHM Banking Solution</h1>
                    <h3>Our services help in</h3>
                    {
                        points.map((point,index)=> {
                            return <div key={index} className='points' >
                                    <Tick/>
                                    <p>{point}</p>
                                </div>
                        }
                            
                        )
                    }
                    <ActBtn text={'Join Us'} />
                </div>
                <div className='dash'>
                    <img src={Bank} ></img>
                </div>
            </div>            
        </div>
    </>
  )
}

export default SignInSignOut