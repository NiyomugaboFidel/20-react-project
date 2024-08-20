import React from 'react'

//Import icons form react-icons 
import { BiTimeFive } from 'react-icons/bi'


import { Link } from 'react-router-dom'



function Jobs(props) {
  const Data = props.data
  
  return (
    <div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
           {
            Data.map(({id, image, title,time, location, desc, company , name})=>{
               return (
                <div  key={id} className="group group/item singleJob w-[90%] sm:w-[250px] p-[20px]
                bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                  <span className='flex justify-between items-center gap-4'>
                   <h1 className='text-[16px] font-semibold text-textcolor group-hover:text-white'>{title}</h1>
                   <span className='flex items-center  text-[#ccc] gap-1'>
                   <BiTimeFive />{time}
                   </span>
                   </span>
                   <h6 className='text-[#ccc]'>{location}</h6>
   
                   <p className='line-clamp-2 text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-[#fff] '>
                    {desc}
                   </p>
                   
                   <p className='line-clamp-2 text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-[#fff] '>
                    {name}
                   </p>
   
                   <div className="company flex items-center gap-2">
                     <img src={image} alt="Company Logo" className=' company-logo  rounded-full ' />
                     <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                   </div>
   
              <Link to={`/job/jobs/${id}`} > 
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibolod text-textColor hover:bg-white 
                   group-hover/item:text-textColor group-hover:text-black'>
                       Apply Now
                   </button>
              </Link>
               
               </div>
               )
            })
           }
        </div>
    </div>
  )
}

export default Jobs