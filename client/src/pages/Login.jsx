import React, { useState } from 'react'
import '../styles/signinsignout.css'
import ActBtn from '../components/ActBtn'
// import Logo from '../components/Logo'
import RightArrow from '../icons/RightArrow'
// import Link from '../components/Link'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { setCurrUser, setAccessToken} from '../features/UserSlice'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/bank.png'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [err,setErr] = useState('');
    const [cred,setCred] = useState({
        email:'',
        password:''
    })
    const loginUser = async () => {
        event.preventDefault();
        console.log('Logging user')
        await axios.post('http://localhost:3000/auth/login',cred)
        .then(res =>{
            if(res.status == 200){
                dispatch(setCurrUser(res.data.resCred));
                navigate('/dashboard');
                console.log('user logged in')
            }
        })
        .catch(err => {
            setErr(err.response.data);
            // console.log(err);
        })
    }
  return (
    <>
        <div className='sign-in'>
            <form className='form' type='submit' onSubmit={(e)=>loginUser(e)}>
                <img src={Logo}></img>
                <h2>Welcome</h2>
                <p>Login to your account below</p>
                <div className='styled-input'>
                    <input autoFocus className='input' type='email' required autoComplete='email' value={cred.email} onChange={(e)=>setCred({...cred,email:e.target.value})} placeholder='  Email address'></input>
                    <p>Email address</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='password' required autoComplete='current-password' value={cred.password} onChange={(e)=>setCred({...cred,password:e.target.value})} placeholder='  Password'></input>
                    <p>Password</p>
                </div>
                <span className='error'>{err}</span>
                <ActBtn text={'Login'} endIcon={<RightArrow/>} sx={{width:'100%',borderRadius:'0px'}} ></ActBtn>
                {/* <div tabIndex={0} className='linkedin' onClick={()=>{linkedinLogin()}}>
                    <div className='in-logo'>in</div>
                    <span>Continue with LinkedIn</span>
                </div> */}
                <div className='no-account'>
                    <div className='line'></div>
                    <div className='or'>OR</div>                    
                </div>
                <span>Don't have an account?</span>
                <Link className='link' to='/register'>Sign Up</Link>
            </form>
        </div>
    </>
  )
}

export default Login