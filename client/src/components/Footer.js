import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8"> {/* Dark gray background */}
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-bold text-lg text-red-500">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-gray-400"> {/* Softer gray text for links */}
              <li><Link to="/services" className="hover:text-red-500">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-red-500">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-red-500">Contact Us</h4>
            <p className="mt-2 text-gray-400">Email: contact@cosmiccoder24.com</p>
            <p className="text-gray-400">Phone: +91 9340201486, +91 7974507514 </p>
            <p className="text-gray-400">Address: Jabalpur, Madhya Pradesh, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
