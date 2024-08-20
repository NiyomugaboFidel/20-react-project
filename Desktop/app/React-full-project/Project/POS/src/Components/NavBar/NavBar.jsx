import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const content = (
  <div className=' absolute'>
     <ul className={`${isOpen ? 'flex' : 'hidden'} fixed mt-[60px] p-[10px] flex-col h-[100vh] bg-gray-800 z-[300] gap-8'`}>
        <li smooth={true} className="menuList text-left  border-b-[1px]  border-white text-white p-[10px] tex-[16px] hover:text-blueColor">
            <Link to='/' >Jobs</Link>  
          </li>
          <li smooth={true} className="menuList text-left border-b-[1px]  border-white text-white p-[10px] tex-[16px] hover:text-blueColor">
          <Link to='/company' >Companies</Link>
          </li>
          <li smooth={true} className="menuList text-left border-b-[1px]  border-white   text-white p-[10px] tex-[16px] hover:text-blueColor">
           <Link to='/about'  >   About</Link>
          </li>
          <li smooth={true} className="menuList text-left border-b-[1px]  border-white text-white p-[10px] tex-[16px] hover:text-blueColor">
          <Link to='/contact' >  Contact</Link>
          </li>
          <li smooth={true} className="menuList text-left border-b-[1px]  border-white  text-white p-[10px] tex-[16px] hover:text-blueColor">
          <Link to='/blogs' >  Blog</Link>
          </li>
          <li  smooth={true} className="menuList text-left border-b-[1px]  border-white   text-white p-[10px] tex-[16px] hover:text-blueColor">
            Login
          </li>
          <li smooth={true} className="menuList text-left border-b-[1px]  border-white  text-white p-[10px] tex-[16px] hover:text-blueColor">
            Sign Up
          </li>
        </ul>

        </div>
  
  
  )
  return (
<nav className='h-[20vh]'>
<div className=' fixed sm:h-[80px] bg-white z-[100] shadow-sm  w-[100%]'>
<div className='w-[100%] sm:w-[95%] h-[50px] navBar flex justify-between items-center sm:p-[3rem] p-[1rem]'>
        <div className="logoDiv px-[10px]">
            <h1 className="logo text-[15px] sm:text-[25px] text-blueColor">
               <Link to='/job'> <strong>Job</strong>Search</Link>
            </h1> 
        </div>
        <div className='px-[20px] searchDiv'>
              <div className='flex bg-[#fff] items-center justify-center shadow shadow-[rgb(0,0,0,0.1)] sm:px-[40px]  py-[5px] sm:py-[10px] rounded-full w-[100%]' >
              <AiOutlineSearch className='icon text-[25px] ml-[5px] mr-[5px]' />
                <input className='px-[10px] w-[100%]  text-[12px] outline-none  bg-transparent ' type="text" placeholder='Search Job Here...' />
              </div>
         </div>    

   <div className=" hidden sm:flex sm:items-center menu  gap-8">
   <ul className='menu flex gap-8'>
    <li  smooth={true} className="menuList text-[#6f6f6f] hover:text-blueColor">
      <Link to='/job' >Jobs</Link>  
    </li>
    
    <li  smooth={true}className="menuList text-[#6f6f6f] hover:text-blueColor">
    <Link to='/job/company' >Companies</Link>
    </li>
    <li  smooth={true}className="menuList text-[#6f6f6f] hover:text-blueColor">
     <Link to='/job/about'  >   About</Link>
    </li>
    <li smooth={true} className="menuList text-[#6f6f6f] hover:text-blueColor">
    <Link to='/job/contact' >  Contact</Link>
    </li>
    <li smooth={true} className="menuList text-[#6f6f6f] hover:text-blueColor">
    <Link to='/job/blogs' >  Blog</Link>
    </li>
    <button smooth={true} className="menuList text-[#6f6f6f] py-[4px] px-[8px] mb-[10px] rounded-full hover:ring-[1px] ring-blueColor hover:text-blueColor">
     <Link to='/job/login'> Login</Link>
    </button>
    <button smooth={true} className="menuList rounded-full ring-[1px] py-[4px] mb-[10px] px-[8px] ring-blueColor  text-[#000] hover:text-white hover:bg-blueColor">
     <Link to='/job/signup'> Sign Up</Link>

    </button>
  </ul>

        </div>
        <div className='sm:hidden pl-[20px]'>
        <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blueColor hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                // Icon when menu is open
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
        </div>

    </div>
</div>
{isOpen && content}

</nav>
  )
}

export default NavBar