import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div style={{
            display: 'flex',
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            border: '1px solid white',
            borderRadius: '2px',
        }}>
            <div style={{
                width:'0px',
                height: '100%',
                borderRight: '1px solid white',
                marginLeft: '4px',
            }}></div>
            <div style={{
                display:'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    width: '95%',
                    height: '10px',
                    backgroundColor: '#b3f604',
                    margin: '2px 4px'
                }}></div>
                <div style={{
                    width: '95%',
                    height: '10px',
                    border: '1px solid white',
                    margin: '2px 4px'
                }}></div>
            </div>
        </div>
    </>
  )
}

export default Dashboard