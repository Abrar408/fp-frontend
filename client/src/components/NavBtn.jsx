import '../styles/navbtn.css'
import React from 'react'
import downArrow from '../icons/DownArrow'

const NavBtn = ({text,endIcon}) => {
  return (
    <div className='nav-btn'>
      <span className='nav-btn-txt'>{text}</span>
      <div className='end-icon'>{endIcon}</div>
    </div>
  )
}

export default NavBtn