import React from 'react'

const InputField = ({label, atlibute,value, onChange}) => {
  return (
    <div className='flex flex-col'>
        <label className='text-gray-700 font-semibold py-2 ' htmlFor="">{label}</label>
        <input
        className=' outline-none p-2 border-2 rounded-lg py-2 max-w-xl'
         {...atlibute} 
         value={value} 
         onChange={onChange}
          />
    </div>
  )
}

export default InputField