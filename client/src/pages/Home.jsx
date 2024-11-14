import React, { useState, useEffect } from 'react';
import AboutUs from './AboutUs';
import Services from './Service';
import WhyCosmic from './WhyCosmic';
import Footer from '../components/Footer';
import '../css/Home.css';
import Testimonials from './Testimonial';

function Home() {
  // State to manage the background image loading
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    // Simulate lazy loading by setting the background after component mount
    const timer = setTimeout(() => setBackgroundLoaded(true), 500); // Optional delay for lazy load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <section 
        id="home" 
        className={`text-white flex items-center justify-center text-center bg-cover bg-center min-h-[500px] md:min-h-[600px] px-4 transition-all duration-500 ease-in-out ${
          backgroundLoaded ? 'opacity-100' : 'opacity-0'
        }`} 
        style={{
          backgroundImage: `url(https://res.cloudinary.com/bazeercloud/image/upload/v1731575698/blue-black-sky-with-stars_qqwtho.jpg)`
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            <span className="animated-slide">Cosmic Code </span> 
            <span className="animated-slide delay-1"> </span> 
            <span className="animated-slide delay-2">  </span> 
            <span className="animated-slide delay-2"> Real </span> 
            <span className="animated-slide delay-2">  </span> 

            <span className="animated-slide delay-3">Impact</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white">
            Empowering your business through innovation and creativity.
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutUs />

      {/* Services Section */}
      <Services />

      {/* Why Cosmic Logic 1 Section */}
      <WhyCosmic />

      {/* Testimonials Section */}
      
      <Testimonials/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
