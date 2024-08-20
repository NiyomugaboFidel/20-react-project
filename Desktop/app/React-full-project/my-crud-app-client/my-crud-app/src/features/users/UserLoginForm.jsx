import React, { useState } from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from './authSlice'

const UserLoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [values, setValues] = useState({username:'',password:''})
    const credetials = {
          username:values.username,
          password:values.password
        }

    const handleLogin = (e)=>{
        e.preventDefault();
    setValues({username:'',password:''})
    console.log(credetials)
    dispatch(loginUser(credetials))
    navigate('/items')
    }
  return (
    <div className='mt-10 max-w-xl mx-auto'> 
     <h1 className='font-bold text-gray-900 text-[20px]'>Hello! WelCame to this App <u>Login Here</u></h1>
        <form action=" " onSubmit={handleLogin}>
            <InputField value={values.username} onChange={(e)=>setValues({...values, username:e.target.value})} label='UserName' atlibute={{type:'text', placeholder:'UserName'}} />
            <InputField  value={values.password} onChange={(e)=>setValues({...values, password:e.target.value})} label='Password' atlibute={{type:'password', placeholder:'******'}} />
            <Button >Login</Button> 
            <li className=' list-none font-semibold px-2 hover:text-gray-600'><Link to='/register'><u>register</u></Link></li>
        </form>
    </div>
  )
}

export default UserLoginForm