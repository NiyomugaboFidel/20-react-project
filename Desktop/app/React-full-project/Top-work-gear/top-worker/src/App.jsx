import React from 'react'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Products from './pages/Products'

const App = () => {
  return (
    <div className='bg-bgColor'>
    <Header />
    <Home />
    <Products />
    
    </div>
  )
}

export default App