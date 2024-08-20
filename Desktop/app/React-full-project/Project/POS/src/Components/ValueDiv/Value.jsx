import React from 'react'

// import logo =============

import image1 from '../../assets/logo-3.png'
import image2 from '../../assets/logo-4.png'
import image3 from '../../assets/logo-5.png'

function Value() {
  return (
    <div className='mb-[4rem] mt-[6rem] px-[1rem]'>

     <h1 className='text-textColor text-[20px]  sm:pb-[3rem] font-bold w-[400px] block'> 
     The value that holds us true and to account</h1>

     <div className="grid sm:gap-[10rem] grid-cols-1 sm:grid-cols-3 items-center">
              
              {/* //singleGrid-1 */}

      <div className='singleGrid rounded-[10px] hover:bg-[#cef3f8] p-[1.5rem]'>
        <div className="flex items-center gap-3">

          <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#aff0f8]
            h-[40px] w-[40px] flex items-center justify-center">
            <img src={image1} alt=""  className='  w-[70%] ' />
          </div>

          <span className=' font-semibold  text-textColor text-[18px] '>
            simplicity

          </span>
        </div>
        <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          Things beinf made beautiful simple are at heart of everything we do.
        </p>       


      </div>
              {/* //singleGrid-2 */}

      <div className='singleGrid rounded-[10px] hover:bg-[#fffedd] p-[1.5rem]'>
        <div className="flex items-center gap-3">

          <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad]
            h-[40px] w-[40px] flex items-center justify-center">
            <img src={image2} alt=""  className='  w-[70%] ' />
          </div>

          <span className=' font-semibold  text-textColor text-[18px] '>
            simplicity

          </span>
        </div>
        <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          we believe in making things better for everyone, even if just by a little bit!
        </p>       


      </div>
              {/* //singleGrid-3 */}

      <div className='singleGrid rounded-[10px] hover:bg-[#d4f9d6] p-[1.5rem]'>
        <div className="flex items-center gap-3">

          <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#c1f9c3]
            h-[40px] w-[40px] flex items-center justify-center">
            <img src={image3} alt=""  className='  w-[70%] ' />
          </div>

          <span className=' font-semibold  text-textColor text-[18px] '>
            simplicity

          </span>
        </div>
        <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
          We work on the basic of createing trust with can be nurtured through authrnticity and transparency
        </p>       


      </div>
     </div>
     <div className='card mt-[2rem] flex justify-between bg-[#f1f1f1] p-[1rem] rounded-lg'>

         <div>
          <h1 className='text-blueColor text-[20px] font-bold '>Ready to Switch a carrer

          </h1>
          <h2 className='text-textColor text-[15px] font-bold'>Let's get Started!

          </h2>
         </div>
         <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor
         hover:bg-white border-blueColor'>
          Get Started
         </button>
     </div>



    </div>
  )
}

export default Value