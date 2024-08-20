import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Search = ({lebal}) => {
  return (
    <div className='flex border-gray-400 border justify-center items-center rounded-full'>
        <IoSearchOutline className='text-center px-1 text-[30px] text-gray-800' />
        <input type="text"  className='py-2 outline-none  rounded-l-full px-4' />
        <button className=' hover:bg-green-950 outline-none mix-blend-multiply text-textColor2 font-bold py-2 px-4 rounded-r-full  bg-gradient-to-r from-primary   via-green400 to-green600 ... ' >{lebal}</button>
    </div>
  )
}

export default Search