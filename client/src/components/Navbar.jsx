import '../styles/navbar.css'
import React from 'react'
import Logo from './Logo'
import NavBtn from './NavBtn'
import ActBtn from './ActBtn'
import DownArrow from '../icons/DownArrow'
import RightArrow from '../icons/RightArrow'
import Link from './Link'
import Lock from '../icons/Lock'
import Dashboard from '../icons/Dashboard'
import Add from '../icons/Add'
import Settings from '../icons/Settings'

const Navbar = () => {
  const navBtns = [{text:'Dashboard',icon:<Dashboard/>,href: '/dashboard'},
                   {text:'Create Job',icon:<Add/>,href: '/create'},
                   {text:'Settings',icon:<Settings/>,href: '/settings'}]
  const toggleNavbar = () => {
    const nav = document.getElementById('navbar')
    nav.classList.toggle('toggle-navbar')
  }
  return (
    <div id='navbar' className='navbar'>
        <div className='nav-logo' onClick={toggleNavbar}>
            <Logo/>
            <span>Job Management</span>
        </div>
        <div className='nav-btns'>
            {navBtns.map((btn,index)=> 
              <Link key={index} className='link' href={btn.href} >
                <NavBtn  text={btn.text} startIcon={btn.icon} />
              </Link>
            )}
        </div>
        <div className='action-btns'>
          <Link className='link' href='/'>
            <ActBtn text={'Logout'} endIcon={<Lock/>}/>
          </Link>
        </div>
    </div>
  )
}

export default Navbar