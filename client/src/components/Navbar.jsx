import '../styles/navbar.css'
import React from 'react'
import Logo from './Logo'
import NavBtn from './NavBtn'
import ActBtn from './ActBtn'
import DownArrow from '../icons/DownArrow'
import RightArrow from '../icons/RightArrow'

const Navbar = () => {
  const navBtns = ['Product','Solutions','Enterprise','Pricing']
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Logo/>
            <span>Job Management</span>
        </div>
        <div className='nav-btns'>
            {navBtns.map((txt,index)=> 
              <NavBtn key={index} text={txt} endIcon={<DownArrow/>} />
            )}
        </div>
        <div className='action-btns'>
            <ActBtn text={'Login'} endIcon={<RightArrow/>}/>
        </div>
    </div>
  )
}

export default Navbar