import React from 'react'
import Button from '../card/Button'
import Search from '../card/Search'
import { BiFontFamily } from 'react-icons/bi'


const Header = () => {
  return (
    <div className='bg-bgColor'>
        <div className=' relative h-[19vh] w-full'>
       <nav className=' fixed z-50 w-full h-full'>
       <div className='bg-bgColor px-[60px] pt-2 pb-2 flex justify-between items-center'>
                <div>
                  <div className='w-[120px] h-[40px] bg-[url("/top-work.svg")] bg-cover bg-center bg-blend-color-dodge'>

                  </div>
                </div>
                <div>
                 <Search lebal='Search' />
                </div>
                <div>
                 <Button lebal='Contacts'/>
                </div>
            </div>
            <div style={{fontFamily:'monospace'}} className=' py-5  w-full px-11   bg-gradient-to-r from-green200 bg-blend-darken via-green400 to-green600 ...'>
                <ul className='flex justify-center items-center px-[10px]'>
                <li className='px-[20px] font-semibold text-textColor2 hover:text-gray-300' ><a hre='#'>Home</a></li>
                    <li className='px-[20px] font-semibold text-textColor2 hover:text-gray-300' ><a hre='#'>Products</a></li>
                    <li className='px-[20px] font-semibold text-textColor2 hover:text-gray-300' ><a hre='#'>Services</a></li>
                    <li className='px-[20px] font-semibold text-textColor2 hover:text-gray-300' ><a hre='#'>Sectors</a></li>
                    <li className='px-[20px] font-semibold text-textColor2 hover:text-gray-300' ><a hre='#'>About</a></li>
                    <li className='px-[20px] font-semibold text-textColor2 hover:text-gray-300' ><a hre='#'>Gallery</a></li>
                    <li className='px-[20px] font-semibold text-textColor2 hover:text-gray-300' ><a hre='#'>Sustainability</a></li>
                </ul>
            </div>
       </nav>
            
        </div>
    </div>
  )
}

export default Header