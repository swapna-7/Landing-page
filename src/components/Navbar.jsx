import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import { SiLapce } from "react-icons/si";

function NavBar() {
  const location = useLocation();

  return (
    <div className=''>
        <nav className="font-serif z-50 h-16 flex fixed top-0 left-1/2 transform -translate-x-1/2 w-full  justify-between text-white  backdrop-blur backdrop-brightness-[0.5]	  p-3  ">
            <div className="text-4xl font-bold p-1"><SiLapce /></div>
            <div className=''>
            <div className="flex space-x-4 text-lg items-center p-2">
            <a
            href="#home"
            className={
              location.hash === "#home" ? "underline decoration-white underline-offset-4" : "text-white"
            }
          >
           Home
            </a>
            <a
            href="#recommended"
            className={
              location.hash === "#recommended" ? "underline decoration-white underline-offset-4" : "text-white"
            }
          >

        Recommended
          </a>
          <a
            href="#products"
            className={
              location.hash === "#products" ? "underline decoration-white underline-offset-4" : "text-white"
            }
          >

        Products
          </a>
          <a
            href="#testimonials"
            className={
              location.hash === "#testimonials" ? "underline decoration-white underline-offset-4" : "text-white"
            }
          >

        Testimonials
          </a>
          
            </div>
            </div>
        </nav>
      
    </div>
  )
}

export default NavBar
