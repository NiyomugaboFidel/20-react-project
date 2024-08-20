import React, { useState } from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from './authSlice'

const UserRegister = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({username:'',password:''})

    const userData = {
        username:values.username,
        password:values.password
    }
    const handleRegister = (e)=>{
        e.preventDefault();
    console.log(userData);
    dispatch(registerUser(userData));
    }
  return (
    <div className='mt-10 max-w-xl mx-auto'> 
     <h1 className='font-bold text-gray-900 text-[20px]'>Hello! WelCame to this App <u>Register Here</u></h1>

        <form onSubmit={handleRegister}>
            <InputField value={values.username} onChange={(e)=>setValues({...values, username:e.target.value})} label='UserName' atlibute={{type:'text', placeholder:'UserName'}} />
            <InputField  value={values.password} onChange={(e)=>setValues({...values, password:e.target.value})} label='Password' atlibute={{type:'password', placeholder:'******'}} />
            <Button >Register</Button> 
            <li className='list-none font-semibold px-2 hover:text-gray-600'><Link to='/login'><u>Login</u></Link></li>
        </form>
    </div>
  )
}
export default UserRegister