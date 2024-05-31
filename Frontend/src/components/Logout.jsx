import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("users")
            toast.success("Logout successfully")
            setTimeout(() => {
                window.location.reload() 
            }, 1000);
        } catch (error) {
            toast.error("Erroe "+ error.message)
        }
    }

  return (
    <div>
      <button
       onClick={handleLogout}
       className=' px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600'>Logout</button>
    </div>
  )
}

export default Logout
