import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Notification from '../Notifications/Notification'

function SearchBox(props) {
    const messageType = props.type
  return (
    <div>
        <div className='searchDiv py-[10px]'>
              <div className='flex bg-[#fff] items-center justify-center shadow-md p-[10px] rounded-full w-[100%]' >
              <AiOutlineSearch className='icon text-[25px] ml-[5px] mr-[5px]' />
                <input className='px-[10px] w-[100%]  text-[12px] outline-none  bg-transparent ' type="text" placeholder='Search Job Here...' />
              </div>
            </div>
            <div className='flex justify-between items-center px-[10px]'>
              
                    
                <span className='flex gap-1 items-center justify-center'>
               <Notification />
                 <h2 className=' text-[12px] font-bold text-textColor '> {messageType}  </h2>
                </span>
                 
            
                <h2 className=' text-[12px] font-bold text-blueColor '>
                    All Relevance
                </h2>
            </div>
    </div>
  )
}

export default SearchBox