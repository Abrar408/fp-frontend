import '../styles/actbtn.css'
import React from 'react'
const ActBtn = ({text,endIcon,sx}) => { 
  return (
    <button style={{
      width:sx?.width,
      borderRadius:sx?.borderRadius,
    }} className='act-btn'>
      <span className='act-btn-txt'>{text}</span>
      <div className='end-icon'>{endIcon}</div>
    </button>
  )
}

export default ActBtn