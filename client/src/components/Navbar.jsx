import '../styles/navbar.css'
import React from 'react'
import Logo from './Logo'
import NavBtn from './NavBtn'
import ActBtn from './ActBtn'
import DownArrow from '../icons/DownArrow'
import RightArrow from '../icons/RightArrow'
// import Link from './Link'
import Lock from '../icons/Lock'
import Dashboard from '../icons/Dashboard'
import Add from '../icons/Add'
import Settings from '../icons/Settings'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const admin = useSelector((state)=> state.user.currUser.admin)
  let navBtns = []
  if(admin){
    navBtns = [{text:'Dashboard',icon:<Dashboard/>,to: '/dashboard'},
    {text:'Create Job',icon:<Add/>,to: '/create'},
    {text:'Settings',icon:<Settings/>,to: '/settings'}]
  } else {
    navBtns = [{text:'Dashboard',icon:<Dashboard/>,to: '/dashboard'}]
  }
  
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
              <Link key={index} className='link' to={btn.to} >
                <NavBtn  text={btn.text} startIcon={btn.icon} />
              </Link>
            )}
        </div>
        <div className='action-btns'>
          <Link className='link' to='/'>
            <ActBtn text={'Logout'} endIcon={<Lock/>}/>
          </Link>
        </div>
    </div>
  )
}

export default Navbar