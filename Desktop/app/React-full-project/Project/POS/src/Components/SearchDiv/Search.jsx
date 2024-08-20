
import React, { useState } from 'react'
//Import image================
import logo1 from '../../assets/img-1.jpg'
import logo2 from '../../assets/img-2.jpg'
import logo3 from '../../assets/img-3.jpg'
import logo4 from '../../assets/img-4.jpg'
import logo5 from '../../assets/img-5.png'
import logo6 from '../../assets/logo-2.png'
import logo7 from '../../assets/logo-1.png'



// icons from react icons
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FcSearch } from "react-icons/fc";
import { GoMultiSelect } from "react-icons/go";
import Jobs from '../JobDiv/Jobs'


function Search() {
   const Data = [
      {
         id:1,
         image:logo1,
         title: 'Web Developer',
         time:'10Hrs',
         location: 'Canada',
         desc: 
         'm ipsum dolor sit amet consectetur, adipisicing elitLorem ',
         company : 'Novac Linus Co.'
     },
     {
        
         id:2,
         image:logo2,
         title: 'UI Designer',
         location: 'Chaine',
         time:'2Hrs',
         location: 'Manchester',
         desc: 
         ' nsectetur, adipisicing elitLorem ipsum dolor sit amet consectetur,',
         company : 'Liquid Accessment'
     },
     
     {
         id: 3,
         title: 'Manager',
         time:'Now',
         location: 'Canada',
     
         image: logo3,
         desc: 'This is a high-quality product suitable for various uses.',
         company: 'Tech Enterprises'
       },
       {
         id: 4,
         title: 'Teacher',
         image: logo4,
         location: 'USA',
         time:'2Days',
         desc: 'Our latest innovation designed to simplify your daily tasks.',
         company: 'Innovate Corp'
       },
       {
         id: 5,
         title: 'Product Manager',
         time:'Now',
         location: 'Canada',
     
         image: logo5,
         desc: 'Experience luxury with our premium-grade product line.',
         company: 'Luxury Goods Co.'
       },
       {
         id: 6,
         title: 'Software Enginner',
         time:'Now',
         location: 'Rwanda',
     
         image: logo6,
         desc: 'Our reliable solution is trusted by millions of users worldwide.',
         company: 'Global Solutions Ltd.'
       },
       {
         id: 7,
         title: 'Accounting',
         time:'1 Week',
         location: 'Canada',
         image: logo7,
         desc: 'Transform your business with our cutting-edge technology.',
         company: 'Tech Innovations Inc.'
       }
       , {
         id:8,
         image:logo1,
         title: 'Web Developer',
         time:'Now',
         location: 'Canada',
         desc: 
         ' adipsit amet consectetur, adipisicing elit',
         company : 'Novac Linus Co.'
     }
       , {
         id:9,
         image:logo1,
         title: 'Web Developer',
         time:'Now',
         location: 'Kigali',
         desc: 
         ' adipsit amet consectetur, adipisicing elit',
         company : 'Masaka complex School'
     }
   ]

   const [title , setTitle] = useState(Data)
   const [value, setValue] = useState('')
   const [value2, setValue2] = useState('')
   const [value3, setValue3] = useState('')
   const [isOpen, setIsOpen] = useState(false)
   const [isType , setIsType] = useState(false)
   

   const handelSearch = (e) =>{
      const query = e.target.value
      console.log(query)
      setValue(query)
      

     const data =   Data.filter(data =>data.title.toLowerCase().includes(query.toLowerCase()))
     console.log(data)
    setTitle(data)
    
   }
   const handelSearchLocation = (e) =>{
      const query = e.target.value
      console.log(query)
      setValue2(query)
      

     const data =   Data.filter(data =>data.location.toLowerCase().includes(query.toLowerCase()))
     console.log(data)
    setTitle(data)
    
   }
   const handelSearchCompany = (e) =>{
      const query = e.target.value
      console.log(query)
      setValue3(query)

     const data =   Data.filter(data =>data.company.toLowerCase().includes(query.toLowerCase()))
     console.log(data)
    setTitle(data)
    
   }

   const handleClear = ()=>{
      setValue('')
      setValue2('')
      setValue3('')
      setTitle(Data)
   }

   console.log(title)

   const content = (
      <>
          <form action="">
           <div className="firstDiv  flex-col sm:flex-row flex justify-between items-center rounded-[8px]  gap-[20px] bg-white p-5 shadow-lg shadow-greyIsh-700">
                {/* //input 1 */}
            <div className=" shadow shadow-[rgb(0,0,0,0.1)] rounded-full p-[10px] sm:shadow-none justify-center flex gap-2 item-center">
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" 
              placeholder='Search Job Here....' 
              className=' bg-transparent text-blue-500 focus:outline-none w-[100%]'
              value={value}
              onChange={handelSearch}
             />
             <AiOutlineCloseCircle onClick={handleClear} className='icon text-[20px]   sm:text-[#aaa] text-[#000] hover:text-textColor'/>
                {/* //input-2 */}
            </div>
            <div className=" shadow shadow-[rgb(0,0,0,0.1)] rounded-full p-[10px] sm:shadow-none justify-center flex gap-2 item-center">
            <BsHouseDoor  className='text-[25px] icon' />
            <input type="text" 
             className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search by Company....' 
              value={value3}
              onChange={handelSearchCompany}
             />
             <AiOutlineCloseCircle  onClick={handleClear} className='icon text-[20px]  sm:text-[#aaa] text-[#000] hover:text-textColor'/>
            </div>
                   {/* //input-3 */}
            <div className=" shadow shadow-[rgb(0,0,0,0.1)] rounded-full p-[10px] sm:shadow-none justify-center flex gap-2 item-center">
            <CiLocationOn className='text-[#000] text-[25px] icon' />
            <input type="text" 
             className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search by location....' 
              value={value2}
              onChange={handelSearchLocation}
             />
             <AiOutlineCloseCircle  onClick={handleClear} className='icon text-[20px] sm:text-[#aaa]  text-[#000] hover:text-textColor'/>
            </div>
             {/* //Search-btn */}

             <button className= 'hidden sm:block bg-blueColor hover:bg-blue-400 h-full py-2 px-10 rounded-[10px] text-white cursor-pointer'>
             Search
            </button>

            </div>  
        </form>
      </>
                 
   )
   const content1 = (
      <>
      <div className='secDiv flex-col flex items-center gap-10 justify-center'>

{/* // select-1 */}
<div className='singleSearch  flex items-cenetr gap-2'>
<label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>

<select name="" id="relevance" className=' shadow shadow-[rgb(0,0,0,0.2)]   p-[10px] bg-white w-[200px] rounded-[3px] px-4 py-1'>
 <option  className='bg-blueColor text-white font-[14px]'  value="">Relevance</option>
 <option className='bg-blueColor text-white font-[14px]'  value="">Inclusive</option>
 <option  className='bg-blueColor text-white font-[14px]' value="">Starts</option>
 <option className='bg-blueColor text-white font-[14px]'  value="">Contains</option>
</select>
</div>

{/* // select-2 */}
<div className='singleSearch flex items-cenetr gap-2'>
<label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>

<select name="" id="type" className='bg-white w-[200px] shadow shadow-[rgb(0,0,0,0.2)]   p-[10px] rounded-[3px] px-4 py-1'>
 <option  className='bg-blueColor text-white font-[14px]'  value="">Full-time</option>
 <option className='bg-blueColor text-white font-[14px]'  value="">Remote</option>
 <option  className='bg-blueColor text-white font-[14px]' value="">Contract</option>
 <option className='bg-blueColor text-white font-[14px]'  value="">Part-time</option>
</select>
</div>

{/* //select-3 */}

<div className='singleSearch flex items-cenetr gap-2'>
<label htmlFor="level" className='text-[#808080] font-semibold'>Level:</label>

<select name="" id="level" className='bg-white w-[200px]  shadow shadow-[rgb(0,0,0,0.2)]  p-[10px] rounded-[3px] px-4 py-1'>
 <option  className='bg-blueColor text-white font-[14px]'  value="">Senior</option>
 <option className='bg-blueColor text-white font-[14px]'  value="">Beginner</option>
 <option  className='bg-blueColor text-white font-[14px]' value="">Intermediate</option>
 <option className='bg-blueColor text-white font-[14px]'  value="">Advocate</option>
</select>
</div>

{/* //clear-all */}

<span    className='text-[#a1a1a1] cursor-pointer hover:bg-gray-700 hover:text-white p-[5px] rounded-lg'>Clear All</span>


</div>


      </>
   )
 
  return (
  <>
    <div className='searchDiv grid grid-cols-1 gap-10 sm:bg-greyIsh rounded-[10px] sm:p-[3rem]'>
             <div className='sm:hidden flex flex-col gap-[10px] items-center w-[40px] justify-left text-left
              bg-white  shadow shadow-[rgb(0,0,0,0.2)] rounded-lg  p-[10px]'>
           
         
                    {/* Icon when menu is closed */}
              {!isOpen ? (
          <FcSearch onClick={()=> setIsOpen(!isOpen)} className='text-[30px] hover:bg-gray-500 p-[3px] rounded-sm hover:text-white' />
              ) : (
                // Icon when menu is open
                <svg
                  onClick={()=> setIsOpen(!isOpen)}
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}

                    {/* Icon when menu is closed */}
              {!isType ? (
              <GoMultiSelect onClick={()=> setIsType(!isType)}
              className='text-[30px] hover:bg-gray-700 p-[3px] rounded-sm hover:text-white' />
              ) : (
                // Icon when menu is open
                <svg
                  onClick={()=> setIsType(!isType)}
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}

             </div>
             {isOpen && content}
             {isType && content1}
        <form action="">
           <div className="firstDiv   hidden sm:flex justify-between items-center rounded-[8px]  gap-[20px] bg-white p-5 shadow-lg shadow-greyIsh-700">
                {/* //input 1 */}
            <div className=" shadow shadow-[rgb(0,0,0,0.1)] rounded-full p-[10px] sm:shadow-none justify-center flex gap-2 item-center">
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" 
              placeholder='Search Job Here....' 
              className=' bg-transparent text-blue-500 focus:outline-none w-[100%]'
              value={value}
              onChange={handelSearch}
             />
             <AiOutlineCloseCircle onClick={handleClear} className='icon text-[20px]   sm:text-[#aaa] text-[#000] hover:text-textColor'/>
                {/* //input-2 */}
            </div>
            <div className=" shadow shadow-[rgb(0,0,0,0.1)] rounded-full p-[10px] sm:shadow-none justify-center flex gap-2 item-center">
            <BsHouseDoor  className='text-[25px] icon' />
            <input type="text" 
             className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search by Company....' 
              value={value3}
              onChange={handelSearchCompany}
             />
             <AiOutlineCloseCircle  onClick={handleClear} className='icon text-[20px]  sm:text-[#aaa] text-[#000] hover:text-textColor'/>
            </div>
                   {/* //input-3 */}
            <div className=" shadow shadow-[rgb(0,0,0,0.1)] rounded-full p-[10px] sm:shadow-none justify-center flex gap-2 item-center">
            <CiLocationOn className='text-[#000] text-[25px] icon' />
            <input type="text" 
             className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Search by location....' 
              value={value2}
              onChange={handelSearchLocation}
             />
             <AiOutlineCloseCircle  onClick={handleClear} className='icon text-[20px] sm:text-[#aaa]  text-[#000] hover:text-textColor'/>
            </div>
             {/* //Search-btn */}

             <button className= 'hidden sm:block bg-blueColor hover:bg-blue-400 h-full py-2 px-10 rounded-[10px] text-white cursor-pointer'>
             Search
            </button>

            </div>  
        </form>

        <div className='secDiv  hidden  sm:flex items-center gap-10 justify-center'>

               {/* // select-1 */}
            <div className='singleSearch  flex items-cenetr gap-2'>
               <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>

               <select name="" id="relevance" className='bg-white w-[200px] rounded-[3px] px-4 py-1'>
                <option  className='bg-blueColor text-white font-[14px]'  value="">Relevance</option>
                <option className='bg-blueColor text-white font-[14px]'  value="">Inclusive</option>
                <option  className='bg-blueColor text-white font-[14px]' value="">Starts</option>
                <option className='bg-blueColor text-white font-[14px]'  value="">Contains</option>
               </select>
            </div>

            {/* // select-2 */}
            <div className='singleSearch flex items-cenetr gap-2'>
               <label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>

               <select name="" id="type" className='bg-white w-[200px] rounded-[3px] px-4 py-1'>
                <option  className='bg-blueColor text-white font-[14px]'  value="">Full-time</option>
                <option className='bg-blueColor text-white font-[14px]'  value="">Remote</option>
                <option  className='bg-blueColor text-white font-[14px]' value="">Contract</option>
                <option className='bg-blueColor text-white font-[14px]'  value="">Part-time</option>
               </select>
            </div>

            {/* //select-3 */}
            
            <div className='singleSearch flex items-cenetr gap-2'>
               <label htmlFor="level" className='text-[#808080] font-semibold'>Level:</label>

               <select name="" id="level" className='bg-white w-[200px] rounded-[3px] px-4 py-1'>
                <option  className='bg-blueColor text-white font-[14px]'  value="">Senior</option>
                <option className='bg-blueColor text-white font-[14px]'  value="">Beginner</option>
                <option  className='bg-blueColor text-white font-[14px]' value="">Intermediate</option>
                <option className='bg-blueColor text-white font-[14px]'  value="">Advocate</option>
               </select>
            </div>

            {/* //clear-all */}

            <span    className='text-[#a1a1a1] cursor-pointer'>Clear All</span>


        </div>

    </div>
        <Jobs data={title} />
  </>
  )
}


export default Search