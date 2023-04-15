import '../styles/navbtn.css'
import React from 'react'
import downArrow from '../icons/DownArrow'

const NavBtn = ({text,startIcon}) => {
  return (
    <div className='nav-btn'>
      <div className='end-icon'>{startIcon}</div>
      <span className='nav-btn-txt'>{text}</span>
      
    </div>
  )
}

export default NavBtn