import React from 'react';
import AboutUs from './AboutUs';
import Services from './Service';
import backgroundImage from '../assets/blue-black-sky-with-stars.jpg';
import WhyCosmic from './WhyCosmic';
import Footer from '../components/Footer';

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
          <h2 className="text-3xl md:text-5xl font-bold text-white">Be Unique with Cosmic Logic 1 Software Services</h2>
          <p className="mt-4 text-lg text-white">Empowering your business through innovation and creativity.</p>
          <div className="mt-8">
            <div className="h-48 bg-gray-800 rounded-lg shadow-md md:h-80"></div> {/* Image Placeholder */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />

      {/* Why Cosmic Logic 1 Section */}
      <WhyCosmic/>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-600">What People Say</h2>
          <div className="mt-8 flex flex-col items-center">
            <div className="w-full md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-gray-400">"Highly Recommended! Cosmic Logic 1 has been a pleasure to work with and delivers on time. Great company with knowledgeable people."</p>
              <h3 className="mt-4 font-semibold text-gray-300">- WEC Interactive LTD, UK</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home;
