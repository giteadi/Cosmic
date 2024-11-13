import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <h1 className="text-xl font-bold transition-transform duration-300 transform hover:scale-110">
          <Link to="/">Cosmic Logic 1</Link>
        </h1>
        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="hover:underline transition-colors duration-300 hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:underline transition-colors duration-300 hover:text-blue-200">About Us</Link>
          <Link to="/services" className="hover:underline transition-colors duration-300 hover:text-blue-200">Our Services</Link>
          <Link to="/projects" className="hover:underline transition-colors duration-300 hover:text-blue-200">Portfolio</Link>
          <Link to="/clientLogo" className="hover:underline transition-colors duration-300 hover:text-blue-200">Clients</Link>
          <Link to="/contact" className="hover:underline transition-colors duration-300 hover:text-blue-200">Contact Us</Link>
        </nav>
        <button className="bg-blue-700 py-2 px-4 rounded-md hover:bg-blue-800 md:hidden transition-colors duration-300">
          Get A Quote
        </button>
      </div>
    </header>
  );
}

export default Navbar;
