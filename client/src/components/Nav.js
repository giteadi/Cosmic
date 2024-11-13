import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open or closed

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ease-in-out duration-300 ${isScrolled ? 'bg-indigo-900/80 text-white shadow-lg' : 'bg-transparent text-white'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo visible only on medium screens and above */}
        <h1 className="text-xl font-bold transition-transform ease-in-out duration-500 transform hover:scale-110 md:block hidden">
          <Link to="/">Cosmic Logic 1</Link>
        </h1>
        <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Home</Link>
          <Link to="/blog" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Blog</Link>
          <Link to="/projects" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Portfolio</Link>
          <Link to="/contact" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Contact Us</Link>
        </nav>
        <div className="md:hidden">
          {/* Hamburger icon, aligned to the right */}
          <button onClick={toggleMenu} className="text-white ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
