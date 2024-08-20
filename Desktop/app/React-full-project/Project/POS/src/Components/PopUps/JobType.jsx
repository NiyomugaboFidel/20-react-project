import React from 'react'

function JobType(props) {
    const type = props.type
  return (
    <div>
           <button className='text-[12px] rounded-full cursor-pointer bg-[#d1e7f7] px-[15px] py-[5px]'>
                {type}
              </button>
    </div>
  )
}

export default JobType