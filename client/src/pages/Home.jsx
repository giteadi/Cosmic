import React from 'react';
import AboutUs from './AboutUs';
import Services from './Service';
import backgroundImage from '../assets/blue-black-sky-with-stars.jpg';

function Home() {
  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section 
        id="home" 
        className="text-white py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Be Unique with Cosmic Logic 1 Software Services</h2>
          <p className="mt-4 text-lg">Empowering your business through innovation and creativity.</p>
          <div className="mt-8">
            <div className="h-48 bg-gray-300 rounded-lg shadow-md md:h-80"></div> {/* Image Placeholder */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />

      {/* Why Cosmic Logic 1 Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-100">Why Cosmic Logic 1</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {['Productivity', 'Agile Team', 'Best Services', 'Innovative Work', 'Affordable Price', 'Trusted Support'].map((benefit, index) => (
              <div key={index} className="p-6 bg-transparent rounded-lg shadow-md">
                <div className="h-16 w-16 bg-gray-300 mx-auto mb-4 rounded-full"></div> {/* Icon Placeholder */}
                <h3 className="text-xl font-semibold text-gray-100">{benefit}</h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Brief description of why {benefit} is important. Highlight the advantages that Cosmic Logic 1 provides through this feature.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-100">What People Say</h2>
          <div className="mt-8 flex flex-col items-center">
            <div className="w-full md:w-2/3 bg-transparent p-6 rounded-lg shadow-md">
              <p className="text-gray-400">"Highly Recommended! Cosmic Logic 1 has been a pleasure to work with and delivers on time. Great company with knowledgeable people."</p>
              <h3 className="mt-4 font-semibold text-gray-100">- WEC Interactive LTD, UK</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h4 className="font-bold text-lg">Quick Links</h4>
              <ul className="mt-2 space-y-1">
                <li><a href="#services" className="hover:underline">Our Services</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg">Contact Us</h4>
              <p className="mt-2">Email: contact@cosmiclogic1.com</p>
              <p>Phone: +91 1234567890</p>
              <p>Address: Some Street, Some City, Some Country</p>
            </div>
            <div>
              <h4 className="font-bold text-lg">Follow Us</h4>
              <div className="mt-2 flex space-x-3">
                <span className="h-8 w-8 bg-gray-300 rounded-full"></span> {/* Social Icon Placeholder */}
                <span className="h-8 w-8 bg-gray-300 rounded-full"></span>
                <span className="h-8 w-8 bg-gray-300 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
