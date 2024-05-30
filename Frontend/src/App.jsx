import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import ContactUs from './ContactUs/ContactUs'
import About from './About/About'


function App() {
  return (
   <>
     <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
     </div>
   </>
  )
}

export default App
