import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import logo from '../../assets/logo-1.png'
import ButtonApply from '../Buttons/ButtonApply'
import { FaHeart } from 'react-icons/fa'
import JobType from '../PopUps/JobType'
import { IoMdArrowDropdown } from 'react-icons/io'


function SingleJobBox() {
    const [heart, setLoved] = useState(false)
    const handleLoved = () =>{
        console.log('is loved')
       if(heart === true){
        setLoved(false)
       }else{
        setLoved(true)
       }
    }
  return (
  <>
    <div className='flex flex-col'>

            
<div className='bg-[#fff] shadow-md rounded-lg float-left px-[30px] flex items-center justify-between'>

    <div className=' rounded-lg'>
    <img className=' p-[10px] rounded-full w-[70px] h-[70px] ' src={logo} alt="" />
    <h2 className='text-center text-textColor font-bold  '>
        Global Solutions Ltd.
    </h2>
    <span className='font-bold text-[10px] text-textColor '>
        Toptal
    </span>
    <p className='text-[12px] py-[5px]'>Posted on 20 July </p>
    </div>
     <span onClick={handleLoved}>
          
           {!heart &&  <CiHeart  className='text-[20px] cursor-pointer' />}
            {heart &&  <FaHeart className='text-[red] text-[18px] cursor-pointer' />}
     </span>

</div>



<div className='py-[10px] flex flex-col'>
<div className='bg-[#fff]  p-[5px] rounded-lg grid grid-cols-2' >
<div className='bg-[#fff] shadow-lg rounded-lg m-2 py-[5px] px-[10px]'>
    <h2 className=' text-[13px] py-[5px] font-bold text-textColor'>APPLY BEFORE</h2>
    <p className='text-[14px] px-[5px] '>30 July,2024 </p>

    <h2 className=' text-[13px] py-[5px] font-bold text-tetxColor '>SALARY RANGE</h2>
    <p className='text-[14px] px-[5px] '> $100K- $120K/ Yearly </p>

   </div>
   <div className='bg-[#fff] shadow-lg rounded-lg m-2 py-[5px] px-[10px]'>
    <h2 className=' text-[13px] py-[5px] font-bold text-textColor'>
     JOB NATURE</h2>
     <JobType  type='Contractual'/>

    <h2 className=' text-[13px] py-[5px] font-bold text-tetxColor '>
     JOB LOCATION</h2>
    <p className='text-[14px] px-[5px] '>
         Work from any where </p>

   </div>
 
</div>
</div>



<div className='py-[10px] flex flex-col'>
<div className='bg-[#fff] shadow-md px-[10px] py-[20px] rounded-lg ' >
<h2 className=' text-[13px] py-[5px] font-bold text-tetxColor '>
     JOB DESCRIPTION
</h2>
<p className='text-[14px]'>
    Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. 
    Ipsam qui tempora dolorem eligendi
     sit molestiae saepe. Recusandae 
     quod quasi vel tempora delectus
     nam temporibus qui sapiente, quaerat, sed a laboriosam!
</p>
 <button className='font-bold flex items-center justify-center text-blueColor cursor-pointer'>See more  <IoMdArrowDropdown className='text-blueColor'/></button>
</div>
</div>

<div className='py
-[10px] flex flex-col'>
<div className='bg-[#fff] shadow-md px-[10px] py-[20px] rounded-lg ' >
<h2 className=' text-[13px] py-[5px] font-bold text-tetxColor '>
     ROLES AND RESPONIBILITIES
</h2>
<p className='text-[14px]'>
    Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. 
    Ipsam qui tempora dolorem eligendi
     sit molestiae saepe. Recusandae 
     quod quasi vel tempora delectus
     nam temporibus qui sapiente, quaerat, sed a laboriosam!
</p>
 <button className='font-bold flex items-center justify-center text-blueColor cursor-pointer'>See more <IoMdArrowDropdown className='text-blueColor'/></button>
</div>
<ButtonApply />
</div>
</div>
  </>
  )
}

export default SingleJobBox