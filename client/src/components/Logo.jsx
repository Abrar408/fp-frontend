import React from 'react'

const Logo = () => {
  return (
    <button 
      style={{
        backgroundColor: 'transparent',
        border: '2px solid #b3f604',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        // marginRight:'15px',
        color: 'white',
      }} >
          <div 
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              margin: 'auto',
            }}>
              JM
          </div>
    </button>
  )
}

export default Logo