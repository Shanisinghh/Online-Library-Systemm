import React from 'react'
import { Link } from 'react-router-dom'

function Book({book}) {
  console.log(book);
  return (
   
     <div className='md:w-60 sm:w-[95vw]   rounded-md  newborder hover:scale-102'>
       <div className=''>
        <img src={book.coverImage} className='w-full bg-gray-300 rounded-t-md md:h-40 sm:h-55 bg-cover' alt="" />
      </div>
      <div  className='p-2 bg-[#ffffff] rounded-md'>
        <h1 className='text-lg font-semibold line-clamp-1'>{book.title}</h1>
        <p className='text-gray-600'> <span className='font-semibold'>Rating :</span> {book.rating}⭐</p>
      </div>
        <Link to={`/bookdetail/${book.id}`} >
      <div className=' text-center py-1  bg-[#3290e7] hover:bg-[rgb(39,48,128)] rounded-b-md'>
        <button className='cursor-pointer font-semibold relative bottom-0 text-gray-100 '> View details</button>
      </div>
         </Link>
     </div>
  

  )
}

export default Book