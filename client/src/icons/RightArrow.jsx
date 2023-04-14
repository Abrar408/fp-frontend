import React from 'react'

const RightArrow = () => {
  return (
    <>  
        <div style={{display:'flex',alignItems:'center',marginTop:'3px'}} >
            <div
            style={{
                width: '10px',
                height: '0px',
                backgroundColor:'transparent',
                borderBottom: '2px solid black',
                marginLeft: '5px'
                }}></div>
            <div
            style={{
                width: '6px',
                height: '6px',
                backgroundColor:'transparent',
                borderBottom: '2px solid black',
                borderRight: '2px solid black',
                marginLeft: '-7px',
                transform: 'rotate(-45deg)'
            }}></div>
        </div>
        
    </>
    
  )
}

export default RightArrow