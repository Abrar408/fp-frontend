import React from 'react'

const Pencil = () => {
  return (
    <>
        <div style={{
            height: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transform: 'rotate(45deg)',
            marginLeft: '5px'
        }}>
            <div style={{
                width:'6px',
                height:'5px',
                borderTopRightRadius:'50%',
                borderTopLeftRadius:'50%',
                backgroundColor:'black'
            }}></div>
            <div style={{
                width:'6px',
                height:'12px',
                backgroundColor:'black',
            }}></div>
            <div style={{
                width:'0px',
                height:'0px',
                border:'3px solid transparent',
                borderBottom:'0',
                borderTop:'5px solid black',
            }}></div>
        </div>
    </>
  )
}

export default Pencil