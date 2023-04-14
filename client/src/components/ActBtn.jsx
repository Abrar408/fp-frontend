import '../styles/actbtn.css'
import React from 'react'
const ActBtn = ({text,endIcon,sx}) => { 
  return (
    <div style={{
      width:sx?.width,
      borderRadius:sx?.borderRadius,
    }} className='act-btn'>
      <span className='act-btn-txt'>{text}</span>
      <div className='end-icon'>{endIcon}</div>
    </div>
  )
}

export default ActBtn