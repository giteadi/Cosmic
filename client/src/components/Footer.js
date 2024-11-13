import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8"> {/* Dark gray background */}
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-bold text-lg text-red-500">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-gray-400"> {/* Softer gray text for links */}
              <li><a href="#services" className="hover:text-red-500">Our Services</a></li>
              <li><a href="#about" className="hover:text-red-500">About Us</a></li>
              <li><a href="#contact" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-red-500">Contact Us</h4>
            <p className="mt-2 text-gray-400">Email: contact@cosmiclogic1.com</p>
            <p className="text-gray-400">Phone: +91 1234567890</p>
            <p className="text-gray-400">Address: Some Street, Some City, Some Country</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-red-500">Follow Us</h4>
            <div className="mt-2 flex space-x-3">
              <span className="h-8 w-8 bg-gray-600 rounded-full"></span> {/* Dark gray for social icons */}
              <span className="h-8 w-8 bg-gray-600 rounded-full"></span>
              <span className="h-8 w-8 bg-gray-600 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
