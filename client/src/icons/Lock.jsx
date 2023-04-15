import React from 'react'

const Lock = () => {
  return (
    <>
        <div
        style={{
            width: '8px',
            height: '10px',
            borderRadius:'50%',
            border: '2px solid rgb(17, 22, 36)',
            marginLeft: '1px',
        }}></div>
        <div
        style={{
            width:'10px',
            height:'10px',
            borderRadius:'3px',
            backgroundColor:'rgb(17, 22, 36)', 
            // marginLeft: '5px' ,
            marginTop: '-5px'  
        }}></div>        
    </>
  )
}

export default Lock