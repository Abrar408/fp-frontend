import React, { useState } from 'react'
import '../styles/signinsignout.css'
import ActBtn from '../components/ActBtn'
import Logo from '../components/Logo'
import RightArrow from '../icons/RightArrow'
import Link from '../components/Link'
const Register = () => {
    const [emptyErr,setEmptyErr] = useState('');
    const [emailErr,setEmailErr] = useState('');
    const [passwordErr,setPasswordErr] = useState('');
    const [cred,setCred] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    // const checkIfEmpty =()=>{
    //     if(cred.username == '' || cred.email == '' || cred.password == '' || cred.confirmPassword == ''){
    //         setEmptyErr('required fields cannot be blank');
    //         return false
    //     }
    //     else{
    //         setEmptyErr('')
    //         return true
    //     }
    // }
    // const checkEmail =()=>{
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cred.email))
    //     {
    //         setEmailErr('');
    //         return true
    //     }else{
    //         setEmailErr('email is not a valid email address');
    //         return false
    //     }            
    // }
    const checkPass =()=>{
        if(cred.password === cred.confirmPassword){
            setPasswordErr('')
            return true
        }
        else{
            setPasswordErr('passwords do not match');
            return false
        }
    }
    // const validate = () => {
    //     if(checkIfEmpty()){
    //         if(checkEmail()){
    //             checkPass()
    //         }
    //     }        
    // }
    const registerUser = (event) => {
        event.preventDefault();
        console.log('Registering user')
        if(checkPass()){
            // axios.post('http://localhost:3000/auth/register',cred)
            // .then(res => {
            //     if(res.status == 200){
            //         console.log(res.data)
            //         setSuccess(res.data)
            //         setCred({...cred,
            //             user:'',
            //             email:'',
            //             pass:'',
            //             confirmPass:''})
            //         setCheckBox(false)
            //     }
            // })
            // .catch(err => {
            //     setErr(err.response.data)
            //     console.log(err.response.data)
            // })
        }
    }
  return ( 
    <>
        <div className='sign-in'>
            <form className='form' type='submit' onSubmit={(e)=>registerUser(e)}>
                <Logo/>
                <h2>Create Your Account</h2>
                <p>Sign Up to continue</p>
                <div className='styled-input'>
                    <input className='input' type='text' required value={cred.username} onChange={(e)=>setCred({...cred,username:e.target.value})} placeholder='  Username'></input>
                    <p>Username</p>
                </div>
                <div className='styled-input'>
                    <input className='input' type='email' required autoComplete='email' value={cred.email} onChange={(e)=>setCred({...cred,email:e.target.value})} placeholder='  Email address'></input>
                    <p>Email address</p>
                </div>
                {emailErr}
                <div className='styled-input'>
                    <input className='input' type='password' required autoComplete='new-password' value={cred.password} onChange={(e)=>setCred({...cred,password:e.target.value})} placeholder='  Password'></input>
                    <p>Password</p>
                </div>
                <span className='error'>{passwordErr}</span>
                <div className='styled-input'>
                    <input className='input' type='password' required autoComplete='new-password' value={cred.confirmPassword} onChange={(e)=>setCred({...cred,confirmPassword:e.target.value})} placeholder='  Confirm Password'></input>
                    <p>Confirm password</p>
                </div>
                {emptyErr}
                <ActBtn text={'Register'} endIcon={<RightArrow/>} sx={{width:'100%',borderRadius:'0px'}}></ActBtn>
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