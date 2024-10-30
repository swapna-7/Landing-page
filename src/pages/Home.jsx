import React from 'react'
import Light from '../components/Light'
import Testimonials from './Testimonials'
import Products from './Products.jsx'
import Features from './Features.jsx'
import Contact from './Contact.jsx'
import Recommended from './Recommended.jsx'
function Home() {
  return (
    <div>
    <Light />
    <Recommended />
    <Products/>
    {/* <Features/> */}
    <Testimonials />
    <Contact/>
    </div>
  )
}

export default Home
        