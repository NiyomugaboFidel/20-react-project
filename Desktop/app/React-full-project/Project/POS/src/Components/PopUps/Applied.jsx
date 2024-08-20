import React from 'react'
import { GrStatusGood } from 'react-icons/gr'

function Applied() {
  return (
    <div>
           <span className=' items-center text-white text-[10px] flex bg-[green] p-[5px]'>
                 <GrStatusGood className='text-[16px] text-white px-[2px]' />
                 Applied
          </span>
    </div>
  )
}

export default Applied