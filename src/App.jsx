import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {

  return (
    <>
    <NavBar />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
=        </Routes>
    </BrowserRouter>
    {/* <Footer /> */}
    </>
  )
}

export default App
