import React from 'react'

const DownArrow = () => {
  return (
    <div
    style={{
      width: '6px',
      height: '6px',
      backgroundColor:'transparent',
      borderBottom: '2px solid white',
      borderRight: '2px solid white',
      transform: 'rotate(45deg)',
      marginRight: '5px',
    }}></div>
  )
}

export default DownArrow