import '../styles/navbar.css'
import React from 'react'
import Logo from './Logo'
import NavBtn from './NavBtn'
import ActBtn from './ActBtn'
import DownArrow from '../icons/DownArrow'
import RightArrow from '../icons/RightArrow'
import Link from './Link'

const Navbar = () => {
  const navBtns = ['Product','Solutions','Enterprise','Pricing']
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Logo onClick={console.log('1')}/>
            <span>Job Management</span>
        </div>
        <div className='nav-btns'>
            {navBtns.map((txt,index)=> 
              <NavBtn key={index} text={txt} startIcon={<DownArrow/>} />
            )}
        </div>
        <div className='action-btns'>
          <Link className='link' href='/'>
            <ActBtn text={'Logout'} endIcon={<RightArrow/>}/>
          </Link>
        </div>
    </div>
  )
}

export default Navbar