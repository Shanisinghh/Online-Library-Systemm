// import React from "react";
// import Navbar from "./Navbar";
// import { categories } from "../dummybooks/dummyBooks";
// import Book from "./Book";
// import { useSelector } from "react-redux";


// function Home() {
//    const dummyBooks = useSelector((state) => state.books.books);
//   return (
//     <>
//       <div className="mt-17">
//         <div className="">
//           <h1 className="md:text-[44px] sm:text-[25px] mt-20 font-bold text-[#66ff0d] text-center">
//             Welcome to Online Library System
//           </h1>

//           <div className=" mt-5">
//             <h1 className="md:text-2xl sm:text-xl px-3 font-bold my-3">Our All Categorys</h1>
//             <div className=" flex  justify-start items-center sm:gap-4 md:gap-14 myborder py-2 sm:px-3 md:px-5">
//               {categories.map((category, index) => (
//                 <div key={index} className="text-center ">
//                   <h2 className="text-sm font-semibold  text-gray-700">
//                     {category}
//                   </h2>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div>
//           <h2 className="md:text-2xl sm:text-xl px-3 font-bold my-3">Some Popular Books</h2>
//           <div className="flex flex-wrap gap-3.5 justify-center pb-3">
            
//             {dummyBooks.map((book)=>(
//               <Book key={book.id} book={book} />
//             ))}
             
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
