import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Company from './pages/Company/Company'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import SingleJob from './Components/SingleJob/SingleJob'
import NavBar from './Components/NavBar/NavBar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'



function App() {
  return (
    <Router >
      <div>
      <NavBar />
        <div className='w-[100%] sm:w-[90%] m-auto bg-white'>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/job/company' element={ <Company />} />
                <Route path='/job/about' element={ <About/>} />
                <Route path='/job/contact' element={ <Contact />} />
                <Route path='/job/blogs' element={ <Blogs />} />
                <Route path='/job/login' element={ <Login />} />
                <Route path='/job/signup' element={ <SignUp />} />
                <Route path='/job/jobs/:id' element={ <SingleJob />} />
            </Routes>
        </div>
        </div>
    </Router>
  )
}

export default App