import React from 'react'
// import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  // const location = useLocation();

  return (
    <div className=''>
        <nav className="font-serif z-50 flex fixed top-8 left-1/2 transform -translate-x-1/2 w-11/12 h-14 justify-between text-white bg-black opacity-85 p-3 border-x-2 border-white rounded-lg ">
            <div className="text-2xl font-bold">Gadgets Company</div>
            <div className=''>
            <ul className="flex space-x-4 text-lg">
            {/* <NavLink
            to="/#home"
            className={({ isActive }) =>
              (isActive ? "text-[#5BFFE6] text-shadow-custom" : "text-white") +
              " text-xl font-[300] mx-2 hover:text-[#5BFFE6] hover:text-shadow-custom lg:text-3xl lg:mx-3"
            }
          > */}
           <ul>Home</ul>
            {/* </NavLink> */}
            <ul>Recommended</ul>
            <ul>Products</ul>
            <ul>Testimonials</ul>
            </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default NavBar
