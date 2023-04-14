import React from 'react'
import '../styles/signinsignout.css'
import ActBtn from '../components/ActBtn'
import Logo from '../components/Logo'
import RightArrow from '../icons/RightArrow'
const Login = () => {
  return (
    <>
        <div className='sign-in'>
            <form className='form'>
                <Logo/>
                <h1>Welcome</h1>
                <p>Login to your account below</p>
                <div className='styled-input'>
                    <input className='input' type='email' required></input>
                    <p>Enter email</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='password' required></input>
                    <p>Enter password</p>
                </div>
                <ActBtn text={'Login'} endIcon={<RightArrow/>} sx={{width:'100%',borderRadius:'0px'}} ></ActBtn>
                <div className='linkedin'>
                    <div className='in-logo'>in</div>
                    <span>Continue with LinkedIn</span>
                </div>
                <div className='no-account'>
                    <div className='line'></div>
                    <div className='or'>OR</div>
                </div>
                <span>Don't have an account?</span>
                <span>Signup</span>
            </form>
        </div>
    </>
  )
}

export default Login