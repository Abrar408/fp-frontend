import React from 'react'

const Settings = () => {
  return (
    <>
        <div style={{position:'relative',width:'24px',height:'24px'}}>
            <div style={{
                width: '6px',
                height: '8px',
                backgroundColor:'white',
                position:'absolute',
                top:'0px',
                left:'9px',
            }}></div>
            <div style={{
                width: '6px',
                height: '8px',
                backgroundColor:'white',
                position:'absolute',
                top:'16px',
                left:'9px',
            }}></div>
            <div style={{
                width: '6px',
                height: '8px',
                backgroundColor:'white',
                position:'absolute',
                top:'4px',
                left:'17px',
                transform: 'rotate(60deg)'
            }}></div>
            <div style={{
                width: '6px',
                height: '8px',
                backgroundColor:'white',
                position:'absolute',
                top:'13px',
                left:'1px',
                transform: 'rotate(60deg)'
            }}></div>
            <div style={{
                width: '6px',
                height: '8px',
                backgroundColor:'white',
                position:'absolute',
                top:'4px',
                left:'1px',
                transform: 'rotate(-60deg)'
            }}></div>
            <div style={{
                width: '6px',
                height: '8px',
                backgroundColor:'white',
                position:'absolute',
                top:'13px',
                right:'1px',
                transform: 'rotate(-60deg)'
            }}></div>
            <div style={{
                width:'18px',
                height:'18px',
                borderRadius:'50%',
                backgroundColor:'white',
                position:'relative',
                top:'50%',
                left:'50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <div style={{
                    width:'10px',
                    height:'10px',
                    borderRadius:'50%',
                    backgroundColor:'#b3f604',
                    top:'50%',
                    left:'50%',
                    position:'absolute',
                    transform: 'translate(-50%, -50%)',
                }}></div>
            </div>
        </div>
    </>
  )
}

export default Settings