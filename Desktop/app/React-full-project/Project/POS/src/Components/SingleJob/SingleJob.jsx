import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Value from '../ValueDiv/Value'
import Footer from '../FooterDiv/Footer'
import SearchBox from './SearchBox'
import SingleJobBox from './SingleJobBox'
import PopUpJob from '../JobDiv/PopUpJob'
import Notification from '../Notifications/Notification'




function SingleJob() {
    const {id} = useParams()
    console.log(id);
    const [isOpen , setIsOpen] = useState(true)
    const handleClick = () =>{
      console.log('hello')
    }
    const content = (
      <>
       {/* //left-side of singlepage container*/}
       <div className={` sm:hidden rounded-lg flex items-center justify-center letfSide float-left bg-[#d1dffb52] w-[30%] h-[100%]` }>
            <Notification onClick={handleClick} type='Notifications'  />

          <div className={`${isOpen ? 'hidden' : 'flex'} jobsContainer flex-col py-[5px] px-[10px] gap-[10px] h-[100%]`}>
            <SearchBox  type='40 JOBS FOUND'/>
            <PopUpJob />
            
            {/* end */} 
          </div>
          </div>
      </>
    )
  return (
    <div>

    <div className='bg-[#fff] w-[100%] '>
       <div className=' py-[20px] w-[100%] flex-col px-[10px] sm:flex-row flex gap-[30px] justify-between '>

           {/* //left-side of singlepage container*/}
          <div className={`  rounded-lg letfSide float-left bg-[#d1dffb52] w-[30%] h-[100%]` }>
        
          <div className={`hidden jobsContainer sm:flex flex-col py-[5px] px-[10px] gap-[10px] h-[100%]`}>
            <SearchBox  type='40 JOBS FOUND'/>
            <PopUpJob />
            
            {/* end */} 
          </div>
          </div>

              {/* //middle-side of single page container */}
          <div className='middleSide rounded-lg bg-[#d1dffb52] w-[100%]sm:w-[50%] h-[100%]'>
          <div className='p-[10px] flex flex-col'>
          <SingleJobBox />
            </div>
           {/* //END OF CENTER */}
          </div>

               {/* //left-side of singlepage container*/}
          <div className={` rounded-lg letfSide float-left bg-[#d1dffb52] w-[30%] h-[100%]` }>
        
          <div className={`hidden jobsContainer sm:flex flex-col py-[5px] px-[10px] gap-[10px] h-[100%]`}>
            <SearchBox  type='News'/>
            <PopUpJob />
            
            {/* end */} 
          </div>
          </div>

        
     </div>
    </div>

    <Value />
    <Footer />
    </div>
      
  )
}

export default SingleJob