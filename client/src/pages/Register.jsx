import React, { useEffect, useState } from 'react'
import '../styles/signinsignout.css'
import ActBtn from '../components/ActBtn'
// import Logo from '../components/Logo'
import RightArrow from '../icons/RightArrow'
// import Link from '../components/Link'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logo from '../assets/bank.png'

const Register = () => {
    const [err,setErr] = useState('');
    const [success,setSuccess] = useState('');
    const [cred,setCred] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    
    const checkPass =()=>{
        if(cred.password === cred.confirmPassword){
            setErr('')
            return true
        }
        else{
            setErr('passwords do not match');
            return false
        }
    }
    const registerUser = async (event) => {
        event.preventDefault();
        console.log('Registering user')
        if(checkPass()){
            await axios.post('http://localhost:3000/auth/register',cred)
            .then(res => {
                if(res.status == 200){
                    // console.log(res.data)
                    setSuccess(res.data)
                    setTimeout(() => {
                        setSuccess("")
                    }, 3000);
                    // setTimeout(setSuccess(''),3000)
                    setCred({...cred,
                        name:'',
                        email:'',
                        password:'',
                        confirmPassword:''})
                }
            })
            .catch(err => {
                setErr(err.response.data)
                // console.log(err.response.data)
            })
        }
    }
    
  return ( 
    <>
        <div className='sign-in'>
            <form className='form' type='submit' onSubmit={(e)=>registerUser(e)}>
            <img src={Logo}></img>
                <h2>Create Your Account</h2>
                <p>Sign Up to continue</p>
                <span className='success'>{success}</span>
                <div className='styled-input'>
                    <input className='input' type='text' required value={cred.name} onChange={(e)=>setCred({...cred,name:e.target.value})} placeholder='  Username'></input>
                    <p>Username</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='email' required autoComplete='email' value={cred.email} onChange={(e)=>setCred({...cred,email:e.target.value})} placeholder='  Email address'></input>
                    <p>Email address</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='password' required autoComplete='new-password' value={cred.password} onChange={(e)=>setCred({...cred,password:e.target.value})} placeholder='  Password'></input>
                    <p>Password</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='password' required autoComplete='new-password' value={cred.confirmPassword} onChange={(e)=>setCred({...cred,confirmPassword:e.target.value})} placeholder='  Confirm Password'></input>
                    <p>Confirm password</p>
                </div>
                <span className='error'>{err}</span>
                <ActBtn text={'Register'} endIcon={<RightArrow/>} sx={{width:'100%',borderRadius:'0px'}}></ActBtn>
                
                <div className='no-account'> 
                    <div className='line'></div>
                    <div className='or'>OR</div>                    
                </div>
                <span>Already have an account?</span>
                <Link className='link' to='/login'>Login</Link>
                {/* <span>Login</span> */}
            </form>
        </div>
    </>
  )
}

export default Register