import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

function Navbar() {
  function handleMenu() {
    const ul = document.getElementById("ul");
    ul.classList.toggle("nav");
    ul.classList.toggle("show");
  }

  return (
    <>
      <nav className="newborder z-50 w-screen sm:h-12 md:h-15 fixed top-0 flex items-center justify-between bg-[#f5eded] shadow-sm">
        <div className="flex items-center justify-start text-3xl font-bold text-gray-600 sm:px-1 md:px-4 py-0.5">
          <div className="sm:w-screen md:w-[20vw] flex justify-between items-center">
            <div className=" flex justify-center items-center">
              <img
                src="https://www.transparentpng.com/thumb/books/blue-book-png-icon--an1pZY.png "
                className="md:h-15 sm:h-13 "
                alt=""
              />
              <h1 className="sm:text-[26px] md:text-3xl"> Books</h1>
            </div>
            <div
              onClick={handleMenu}
              className="mr-8 font-bold cursor-pointer md:hidden"
            >
              <MdOutlineMenu />
            </div>
          </div>
        </div>
        <div className="mr-15">
          <ul id="ul" className="md:flex   gap-5 justify-center items-center">
            <li className="navlink  rounded-sm ">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "  sm:px-34 myborder md:text-[18px] sm:text-[16px] font-semibold md:px-4  hover:shadow-2xl pb-[4px] rounded-sm pt-[1px]"
                    : "md:text-[18px] sm:text-[16px] font-semibold px-4 hover:shadow-2xl rounded-sm pb-[4px] pt-[1px]"
                }
              >
                Home
              </NavLink>
            </li>

            <li className=" rounded-sm">
              <NavLink
                to="/addbook"
                className={({ isActive }) =>
                  isActive
                    ? " sm:px-29 myborder md:text-[18px] sm:text-[16px] font-semibold md:px-4 hover:shadow-2xl rounded-sm pb-[4px] pt-[1px]"
                    : "md:text-[18px] sm:text-[16px]  font-semibold px-4 hover:shadow-2xl rounded-sm pb-[4px] pt-[1px]"
                }
              >
                Add Book
              </NavLink>
            </li>
            <li className=" rounded-sm">
              <NavLink
                to="/deletebook"
                className={({ isActive }) =>
                  isActive
                    ? " sm:px-29 myborder md:text-[18px] sm:text-[16px] font-semibold md:px-4 hover:shadow-2xl rounded-sm pb-[4px] pt-[1px]"
                    : "md:text-[18px] sm:text-[16px]  font-semibold px-4 hover:shadow-2xl rounded-sm pb-[4px] pt-[1px]"
                }
              >
                Delete Book
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
