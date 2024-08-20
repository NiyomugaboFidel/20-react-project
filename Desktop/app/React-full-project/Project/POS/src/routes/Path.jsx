import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Company from '../pages/Company/Company'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blogs from '../pages/Blogs'





function Path() {
  return (
    <Router >
        <div className='w-[85%] m-auto bg-white'>
          <Home />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/company' element={ <Company />} />
                <Route path='/about' element={ <About/>} />
                <Route path='/contact' element={ <Contact />} />
                <Route path='/blogs' element={ <Blogs />} />
            </Routes>
        </div>
    </Router>
  )
}

export default Path