import React from "react";
import { data, Link, useParams } from "react-router-dom";
// import dummybooks from "../dummybooks/dummyBooks";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
function BookDetail() {
  const dummyBooks = useSelector((state) => state.books.books);
  const { id } = useParams();
  console.log(id);
  console.log("bookdata",dummyBooks);
  const book = dummyBooks.filter((book) => book.id === id)[0];

  console.log(book);

  return (
    <>
      <div className="mt-17">
        <Link to="/BrowseBooks">
          <button className="flex ml-2 justify-center items-center text-md font-semibold px-4 rounded-md pt-0.5 pb-1 bg-[#413d3d] text-white hover:bg-[#1a1919]">
            {" "}
            <IoMdArrowRoundBack className="text-xl mr-1 " />
            Back To browse Books
          </button>
        </Link>
        <div className=" flex justify-center items-center">
          <div className="photowidth md:w-[42vw]  w-[95vw] mt-2 newborder sm:mt-3 rounded-md">
            <div className=" ">
              <img
                src={book.coverImage}
                className="w-full rounded-t-md bg-gray-400 md:h-90 sm:h-60 bg-cover"
                alt=""
              />
            </div>
            <div className="p-2">
              <h1 className="text-xl font-bold ">{book.title}</h1>
              <p className="text-gray-600">
                <span className="font-semibold">Author :</span> {book.author}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">category :</span>{" "}
                {book.category}
              </p>
              <p className="text-gray-600">
                {" "}
                <span className="font-semibold">Rating :</span> {book.rating}
              </p>
              <p className="text-gray-600 ">
                {" "}
                <span className="font-semibold">Description :</span>{" "}
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetail;
