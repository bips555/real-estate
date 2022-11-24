import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Properties from '../Pages/Properties';
import Blog from '../Pages/Blog';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
function Navbar() {
  return (
   <>
   <section className='s'>
   
   
   <nav className="navbar navbar-expand-lg  bg-light sticky-top">
  <div className="container-fluid d-flex justify-content-between">
  <div>
  <a class="navbar-brand" href="#">
  <Link to="/">
      <img className='w-25 logo border-2' src="https://static.vecteezy.com/system/resources/thumbnails/006/309/644/small/creative-real-estate-logo-design-house-logo-design-real-estate-icon-vector.jpg"/>
      </Link>
  </a>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav text-center text-xs-center gap-lg-5 mx-auto fw-bold">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/properties">Properties</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <div className='p-1 apt-btn text-white gap-2 d-none d-lg-block  d-flex flex-wrap mx-3'>
        <p className='justify-content-center align-items-center d-flex'>Schedule Appointment<i class="bi bi-arrow-right"></i></p>
      
      </div>
      </ul>
    
    </div>
   
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
</section>

   </>
  )
}

export default Navbar