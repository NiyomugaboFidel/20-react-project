import React from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io'

function Expires() {
  return (
    <div>
          <span className=' items-center justify-center  text-white  flex bg-[#ffb300] w-[100px]'>
          <IoIosInformationCircleOutline className='text-[25px] px-[5px]' /> 
          <p className='text-[10px] px-[5px]'>Expires soon</p>
          </span>
    </div>
  )
}

export default Expires