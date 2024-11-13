import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ease-in-out duration-300 ${isScrolled ? 'bg-indigo-900/80 text-white shadow-lg' : 'bg-transparent text-white'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        <h1 className="text-xl font-bold transition-transform ease-in-out duration-500 transform hover:scale-110">
          <Link to="/">Cosmic Logic 1</Link>
        </h1>
        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Home</Link>
          <Link to="/blog" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Blog</Link> {/* Blog link added */}
          <Link to="/projects" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Portfolio</Link>
          <Link to="/contact" className="hover:underline transition-all ease-in-out duration-300 hover:text-indigo-200">Contact Us</Link>
        </nav>
        <button className="bg-indigo-800 py-2 px-4 rounded-md hover:bg-indigo-700 md:hidden transition-all ease-in-out duration-300">
          Get A Quote
        </button>
      </div>
    </header>
  );
}

export default Navbar;
