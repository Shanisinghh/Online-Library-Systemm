import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

function NotFound() {
  return (
    <>
     <div>
        <div>
            <Link to="/">
          <button className="flex ml-1.5 justify-center mt-2 items-center text-md font-semibold px-4 rounded-md pt-0.5 pb-1 bg-[#413d3d] text-white hover:bg-[#1a1919]">
            {" "}
            <IoMdArrowRoundBack className="text-xl mr-1 " />
            Back To Home
          </button>
        </Link>
        </div>
        <div className=' text-2xl text-center'>
            <h1 className="text-7xl font-bold text-gray-700">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-600">Page Not Found</p>
        <p className="mt-2 font-semibold text-gray-500">
          The page you're looking for doesn't exist .
        </p>
        </div>
     </div>
    </>
  )
}

export default NotFound