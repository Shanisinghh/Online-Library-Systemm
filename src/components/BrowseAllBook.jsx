import React, { useState } from "react";
import { useSelector } from "react-redux";
import { categories } from "../dummybooks/dummyBooks";
import Book from "./Book";

function BrowseAllBook() {
  const dummyBooks = useSelector((state) => state.books.books);

  const [searchtext, setSearchtext] = useState();
  const [books, setBooks] = useState([]);
  const [category, setcategory] = useState();
  const [allBooks, setAllBooks] = useState(dummyBooks);

  //   console.log(searchtext);

  function handlecategories(category) {
    setcategory(category);
    const book = dummyBooks.filter((book) => book.category === category);
    setBooks(book);
  }
  function handleSearch() {
    const searchBook = dummyBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchtext.toLowerCase()) ||
        book.author.toLowerCase().includes(searchtext.toLowerCase())
    );
    setAllBooks(searchBook);
    setBooks(searchBook);
    // setSearchtext("")
  }

  if (category) {
    return (
      <>
        <div className="mt-18">
          <div className=" flex justify-center items-center">
            <input
              type="text"
              value={searchtext}
              onChange={(e) => setSearchtext(e.target.value)}
              placeholder="Enter  title or author"
              className="font-semibold  outline-none text-gray-500 rounded-l-md newborder md:w-[50vw] sm:w-[65vw] h-9 px-2.5"
            />
            <button
              onClick={handleSearch}
              className="h-9 cursor-pointer outline-none bg-[#00ff22] px-7 rounded-r-md nedborder font-bold text-lg"
            >
              Search
            </button>
          </div>
          <div className="flex newborder md:w-[100%] my-3  justify-around">
            {categories.map((category, index) => (
              <div
                onClick={() => handlecategories(category)}
                key={index}
                className="text-center md:w-[20%]  hover:bg-[rgb(255,102,0)] "
              >
                <h2 className="text-md  cursor-pointer py-2  font-semibold  text-gray-700">
                  {category} 
                </h2>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap pb-2.5 justify-center gap-3.5">
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mt-18">
          <div className="flex justify-center items-center">
            <input
              type="text"
              value={searchtext}
              onChange={(e) => setSearchtext(e.target.value)}
              placeholder="Enter  title or author"
              className="font-semibold outline-none text-gray-500 rounded-l-md newborder md:w-[50vw] sm:w-[65vw] h-9 px-2.5"
            />
            <button
              onClick={handleSearch}
              className="h-9 cursor-pointer outline-none bg-[#00ff22] px-7 rounded-r-md nedborder font-bold text-lg"
            >
              Search
            </button>
          </div>
          <div className="flex newborder w-[100%] my-3   justify-around">
            {categories.map((category, index) => (
              <div
                onClick={() => handlecategories(category)}
                key={index}
                className="text-center md:w-[20%] hover:bg-[rgb(255,102,0)] "
              >
                <h2 className="text-md cursor-pointer py-2  font-semibold  text-gray-700">
                  {category}
                </h2>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center pb-2.5 gap-3.5">
            {allBooks.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default BrowseAllBook;
