import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import ContactUs from './ContactUs/ContactUs'
import About from './About/About'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'



function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser);
  return (
   <>
     <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course'
         element={authUser ? <Courses/> : <Navigate to="/signup"/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Toaster/>
     </div>
   </>
  )
}

export default App
