import React from 'react'
import Light from '../components/Light'
import Testimonials from './Testimonials'
import Products from './Products.jsx'
import Features from './Features.jsx'
import Recommended from './Recommended.jsx'
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const homeRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#home") {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div ref={homeRef}>
    <Light />
    <Recommended />
    <Products/>
    {/* <Features/> */}
    <Testimonials />
    </div>
  )
}

export default Home
        