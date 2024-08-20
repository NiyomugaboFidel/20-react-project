import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        name:'Login',
        route:'/login'
    },
    {
        name:'register',
        route:'/register'
    }
]

const Home = () => {
  return (
    <div className='mt-11 m-auto px-8 text-center flext justify-center items-center'>
      <h1 className='font-bold text-gray-900 text-[25px]'>Hello! WelCame to this App</h1>
      <ul className='flex justify-center items-center py-2'>
          {
            links.map(link =>(
              <li className='font-semibold px-2 hover:text-gray-600' key={link.name}><Link to={link.route}><u>{link.name}</u></Link></li>
            ))
          }
        </ul> 
    </div>
  )
}

export default Home