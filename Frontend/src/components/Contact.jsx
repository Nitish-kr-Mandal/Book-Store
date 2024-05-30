import React from 'react'

function Contact() {
  return (
   <>
       <div className='flex justify-center items-center h-screen'>
        <div className=' flex items-center justify-center'>
            <form >
                <h1 className=' font-bold text-2xl'>Contact Us</h1>
                <div className=' mt-4 space-y-2'>
                    <label>Name</label>
                    <br />
                    <input type="text"
                    placeholder='Enter your name'
                    className='w-96 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                     />
                </div>
                <div className=' mt-4 space-y-2'>
                    <label>Email</label>
                    <br />
                    <input type="email"
                    placeholder='Enter your email'
                    className=' w-96 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
                     />
                </div>
                <div className=' mt-4 space-y-2'>
                    <label>Message</label>
                    <br />
                    <textarea
                    placeholder='Enter your message'
                     className='w-96 h-36 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' 
                    ></textarea>
                </div>
                <div className=' mt-4 space-y-2'>
                    <button
                    type='submit'
                    className=' px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-800 text-white'
                    >submit</button>
                </div>
            </form>
        </div>
       </div>
   </>
  )
}

export default Contact
