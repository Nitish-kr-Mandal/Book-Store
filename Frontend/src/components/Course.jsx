import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Course() {
    const [book, setBook]= useState([])
    useEffect(() => {
        const getBook = async() => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    },[])

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='items-center justify-center text-center'>
            <h1 className=' pt-28 text-2xl font-semibold md:text-4xl'>We are delighted to have you
             <span className=' text-pink-600'> Here</span></h1>
             
             <p className='pt-4'>Welcome! We are thrilled to have you here and excited to share our passion for books with you. Our store is a haven for book lovers, offering a vast selection of genres and titles to satisfy every reader's curiosity and taste. Our dedicated team is here to assist you in finding the perfect book, providing personalized recommendations, and ensuring that your visit is enjoyable and memorable. Thank you for choosing our book store.</p>
             
             <Link to="/">
             <button className=' mt-6 bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 duration-300 cursor-pointer rounded-md'>Back</button>
             </Link>
        </div>
        <div className=' mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item) => (
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course
