import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Scroll from "./components/Scroll.jsx";



function App() {

  return (
    <>
     <BrowserRouter>
     <Scroll/>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
=        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
