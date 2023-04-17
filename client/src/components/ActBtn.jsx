import '../styles/actbtn.css'
import React from 'react'
const ActBtn = ({text,endIcon,disabled=false,sx}) => { 
  return (
    
    <button className={disabled ? 'disabled' : 'act-btn'}
    style={{
      width:sx?.width,
      backgroundColor:sx?.color,
      borderRadius:sx?.borderRadius,
    }} 
     >
      <span className={disabled ? 'dis-act-btn' : 'act-btn-txt'}>{text}</span>
      <div className='end-icon'>{endIcon}</div>
    </button>
  )
}

export default ActBtn