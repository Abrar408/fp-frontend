import React from 'react'

const Tick = () => {
  return (
    <>
        <div style={{position:'relative'}} >
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    borderBottom: '5px solid cyan',
                    transform: 'rotate(45deg)',
                }} ></div>
            <div
            style={{
                width: '30px',
                height: '30px',
                borderBottom: '5px solid cyan',
                transform: 'rotate(-45deg)',
                position: 'absolute',
                top:'-23px',
                left:'-8px',
            }} ></div>
        </div>
    </>
  )
}

export default Tick