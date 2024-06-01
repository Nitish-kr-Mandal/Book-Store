import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo = {
      name:data.name,
      email:data.email,
      password:data.password
    }
    await axios
    .post("http://localhost:4001/user/signup",userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        toast.success('User created Successfully');
        setTimeout(() => {
          navigate("/") 
          window.location.reload()
        }, 1000);
      }
      localStorage.setItem("users",JSON.stringify(res.data.user));
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error(" Error " + err.response.data.message);
      }
    });
  }

  return (
    <>
     <div className=' flex justify-center items-center h-screen'>
     <div className=' w-[600px]'>
            <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
                <Link 
                 to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
                <h3 className="font-bold text-lg">Signup</h3>
                {/* name */}
                <div className=' mt-4 space-y-2'>
                    <span>Name</span>
                    <br />
                    <input type="text"
                     placeholder='Enter Your name'
                     className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                     {...register("name", { required: true })}
                     />
                      <br />
                      {errors.name && <span className=' text-sm text-red-500'>This field is required</span>}
                </div>

                {/* email */}
                <div className=' mt-4 space-y-2'>
                    <span>email</span>
                    <br />
                    <input type="email"
                     placeholder='Enter Your Email'
                     className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                     {...register("email", { required: true })}
                     />
                      <br />
                      {errors.email && <span className=' text-sm text-red-500'>This field is required</span>}
                </div>

                {/* password */}
                <div className=' mt-4 space-y-2'>
                    <span>password</span>
                    <br />
                    <input type="password"
                     placeholder='Enter Your password'
                     className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                     {...register("password", { required: true })}
                     />
                      <br />
                      {errors.password && <span className=' text-sm text-red-500'>This field is required</span>}
                </div>

                {/* button */}
                <div className='flex justify-around mt-4'>
                    <button className=' bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer'>signup</button>
                    <p>Have account? 
                        <Link to={"/login"}
                        className=' underline text-blue-600 cursor-pointer'> Login </Link>
                        </p>
                </div> 
               </form>  
            </div>
        </div>
     </div>
    </>
  )
}

export default Signup
