import React from 'react'
import banner from '../assets/banner.jpg'

function Banner() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-10 dark:bg-slate-900 dark:text-white'>
    <div className=' order-2 md:order-1 w-full md:h-1/2 mt-12 md:mt-32'>
        <div className=' space-y-12'>
            <h1 className=' text-4xl font-bold'>Hello, Welcome here to learn something
                <span className=' text-pink-500'> new everyday </span>
            </h1>
            <p className=' text-xl'>Hello, welcome to our bookstore, where you can discover something new every day. Our diverse collection, from timeless classics to contemporary bestsellers, ensures every reader finds their next great read. Whether you seek a gripping novel, insightful non-fiction, or a delightful children's book, we have it all. Dive into the world of books and let your imagination soar.</p>

       <label className="px-3 py-2 border rounded-md flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input type="text" 
        className="grow outline-none dark:bg-slate-900 dark:text-white" 
        placeholder="Enter your Email" />
        </label>
        </div>
        <button className="btn mt-6 btn-secondary">Secondary</button>
    </div>

    <div className='w-full md:h-1/2 order-1 md:mx-2'>
        <img className=' rounded-xl' src={banner} alt="Banner" />
    </div>
   </div>
   </>
  )
}

export default Banner
