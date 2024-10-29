import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className="font-serif z-50 flex fixed top-8 left-1/2 transform -translate-x-1/2 w-11/12 h-14 justify-between text-white ">
            <div className="text-2xl font-bold">Gadgets Company</div>
            <div className=''>
            <ul className="flex space-x-4 text-lg">
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Services</ul>
            <ul>Contact</ul>
            </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default NavBar
