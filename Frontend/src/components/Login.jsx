import React from 'react'
import { Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const userInfo = {
            email:data.email,
            password:data.password
          }
          await axios
          .post("http://localhost:4001/user/login",userInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
                toast.success('Login successfully');
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
        <div className='w-[600px]'>
            <div className="modal-box dark:bg-slate-900 dark:text-white">
                <form  onSubmit={handleSubmit(onSubmit)}
                 method="dialog" >

                <Link 
                 to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Login</h3>
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
                    <button
                    className=' bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer'>Login</button>
                    <p>Not registered? 
                        <Link 
                         to={"/signup"}
                        className=' underline text-blue-600 cursor-pointer'> signup </Link></p>
                </div> 
                </form>  
            </div>
        </div>
        </div>
    </>
  )
}

export default Login
