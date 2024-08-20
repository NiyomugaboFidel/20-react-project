import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Value from '../Components/ValueDiv/Value'
import Footer from '../Components/FooterDiv/Footer'
import Toastify from '../Components/Notifications/ToastifyNotif'


function About() {
  return (
    <div>
    <Toastify />
    <Value />
    <Footer />
    </div>
  )
}

export default About