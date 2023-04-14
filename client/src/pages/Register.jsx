import React from 'react'
import '../styles/signinsignout.css'
import ActBtn from '../components/ActBtn'
import Logo from '../components/Logo'
import RightArrow from '../icons/RightArrow'
import Link from '../components/Link'
const Register = () => {
  return (
    <>
        <div className='sign-in'>
            <form className='form'>
                <Logo/>
                <h2>Create Your Account</h2>
                <p>Sign Up to continue</p>
                <div className='styled-input'>
                    <input className='input' type='text' required></input>
                    <p>Username</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='email' required></input>
                    <p>Email address</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='password' required></input>
                    <p>Password</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='password' required></input>
                    <p>Confirm password</p>
                </div>
                <ActBtn text={'Register'} endIcon={<RightArrow/>} sx={{width:'100%',borderRadius:'0px'}} ></ActBtn>
                <div className='linkedin'>
                    <div className='in-logo'>in</div>
                    <span>Continue with LinkedIn</span>
                </div>
                <div className='no-account'>
                    <div className='line'></div>
                    <div className='or'>OR</div>                    
                </div>
                <span>Already have an account?</span>
                <Link className='link' href='/login'>Login</Link>
                {/* <span>Login</span> */}
            </form>
        </div>
    </>
  )
}

export default Register