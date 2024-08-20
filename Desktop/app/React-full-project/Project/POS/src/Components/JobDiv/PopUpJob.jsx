import React, { useState } from 'react'
import Applied from '../PopUps/Applied'
import logo from '../../assets/logo-1.png'
import JobType from '../PopUps/JobType'
import Expires from '../PopUps/Expires'

function PopUpJob() {
    const [applied, setApplied] = useState(false)
    


  return (
    <div>
        
            {/* //section-of-each-job started here */}

            <div className='eachJobDiv bg-white rounded-lg pl-[10px] py-[10px]'>
                <div className='compantInfo mb-[10px] flex items-center justify-between'>
                 <img className='company-logo bg-[#d1e7f7] p-[5px] rounded-full' src={logo} alt="" />
                 <span className='items-center justify-center px-[10px] flext flex-col'>
                    <h2 className='text-[14px] font-bold text-textColor '>Mid-level UX Designer</h2>
                    <p className='text-[12px]  '>Total</p>
                 </span>

                 <div>
                 {applied &&  <Applied />}
                 {!applied && <Expires />}
                 </div>

                </div>
              <div className='flex justify-between items-center'>

               <JobType type='Contractual' />

                <p className='text-black text-[12px] px-[10px] '>$100k-$120/Yearly</p>
              </div>
               
            </div>
    </div>
  )
}

export default PopUpJob