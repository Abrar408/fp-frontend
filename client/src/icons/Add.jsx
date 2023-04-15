import React from 'react'

const Add = () => {
  return (
    <>
        <div style={{
            width:'24px',
            height:'24px',
            borderRadius:'50%',
            border: '1px solid white',
            position:'relative',
        }}>
            <div style={{
                position:'absolute',
                top: '50%',
                left: '50%',
                width:'60%',
                border: '1px solid #b3f604',
                transform: 'translate(-50%, -50%)',
            }}></div>
            <div style={{
                position:'absolute',
                top: '50%',
                left: '50%',
                width:'60%',
                border: '1px solid #b3f604',
                transform: 'translate(-50%, -50%) rotate(90deg)',
            }}></div>
        </div>
    </>
  )
}

export default Add