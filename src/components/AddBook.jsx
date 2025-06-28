import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addBook } from "../features/bookSlice";

function AddBook() {
  
    const dispatch = useDispatch()
    const id = Math.floor(Math.random()*10000000000)
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    rating: 4.3,
    id: `${id}`,
    category: "",
    coverImage: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };
 function handleClick (){
  if(formData.title==""||formData.author==""||formData.description==""||formData.rating==""||formData.category==""||formData.coverImage==""){
    alert("Please Fill All Book Detail")
  }else{
   dispatch(addBook(formData))
  }
  
  
 }
  const handleSubmit = (e) => {
    e.preventDefault();
  //    if(formData.title==""||formData.author==""||formData.description==""||formData.rating==""||formData.category==""||formData.coverImage==""){
  //   alert("Please Fill All Book Detail")
  // }else{
  // //  dispatch(addBook(formData))
  // }

  };

  return (
    <>
      <div className="mt-17">
        <form onSubmit={handleSubmit} className="md:w-[40vw] sm:w-[95vw]  newborder p-4 rounded-md flex flex-col justify-center m-auto space-y-2.5">
          {/* Title */}
          <h1 className="text-center text-gray-600 text-2xl font-bold">Fill Book Details</h1>
          <div className="">
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full  newborder rounded px-3 py-1 outline-none font-semibold focus:bg-amber-50"
              placeholder="Enter book title"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-medium mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full  newborder rounded px-3 py-1 outline-none font-semibold focus:bg-amber-50"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full  newborder rounded px-3 py-1 outline-none font-semibold focus:bg-amber-50"
              placeholder="Enter book description"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full  newborder rounded px-3 py-1 outline-none font-semibold focus:bg-amber-50"
              required
            >
              <option value="">Select category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Classic">Classic</option>
              <option value="Adventure">Adventure</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block font-medium mb-1">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              step="0.1"
              className="w-full  newborder rounded px-3 py-1 outline-none font-semibold focus:bg-amber-50"
              placeholder="Enter rating (e.g. 4.5)"
              required
            />
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block font-medium mb-1">Cover Image URL</label>
            <input
              type="text"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full  newborder rounded px-3 py-1 outline-none font-semibold focus:bg-amber-50"
              placeholder="Paste image URL here"
              required
            />
          </div>

          {/* Submit */}
             <Link to="/BrowseBooks">
          <button
            type="submit"
            onClick={handleClick}
            className="w-full bg-blue-600 text-white font-semibold py-1 rounded hover:bg-blue-700 transition duration-200"
          >
            Add Book
          </button>
          </Link>
      
        </form>
      </div>
    </>
  );
}

export default AddBook;
