import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'

function Notification( props) {
  const type = props.type
  return (
    <div>
            <div className=' flex items-center'>
              <IoMdNotificationsOutline className=' text-[15px] tetx-textColor absolute' />
               <span className='ml-[6px] mb-[8px] tetx-center  z-[50] bg-[#2fff5f] p-[1px] font-bold w-[10px] h-[10px]  text-[10px]  rounded-full '></span>
                 {type}
               </div>
    </div>
  )
}

export default Notification