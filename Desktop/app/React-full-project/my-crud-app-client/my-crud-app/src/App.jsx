import UserLoginForm from './features/users/UserLoginForm'
import { Route, Routes } from 'react-router-dom'
import UserRegister from './features/users/UserRegister'
import Home from './features/Home'
import ItemList from './features/items/ItemList'

function App() {

  return (
    <div className='container max-w-5xl m-auto px-2 pt-10 md:pt-32 '>
      <h3 className='text-center text-gray-700 font-bold py-5'> Create Items and Task App</h3>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<UserLoginForm />}/>
        <Route path='/register' element={<UserRegister/>}/>
        <Route path='/items' element={<ItemList/>}/>
      </Routes>
    </div>
  )
}

export default App
