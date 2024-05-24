import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='my-5 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Book" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="px-2 py-1 border-[2px] rounded-xl">${item.price}</div> 
      <div className=" cursor-pointer px-2 py-1 border-[2px] rounded-full hover:bg-pink-600 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
