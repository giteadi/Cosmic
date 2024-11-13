import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkBlue py-8 text-softWhite">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#careers" className="hover:underline">Careers</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Add more footer links as needed */}
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cosmic Logic 1. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
