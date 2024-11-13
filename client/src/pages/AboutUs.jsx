import React from 'react';
import '../css/AboutUs.css';

function AboutUs() {
  return (
    <section id="aboutUs" className="about-us-section py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="about-us-image-container flex justify-center mb-8 md:mb-0">
              <div className="about-us-image">
                {/* Main Sun Image */}
              </div>
              {/* Orbiting Planets */}
              <div className="orbit earth-orbit">
                <div className="planet earth"></div>
              </div>
              <div className="orbit mars-orbit">
                <div className="planet mars"></div>
              </div>
              <div className="orbit moon-orbit">
                <div className="planet moon"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="about-us-title text-2xl md:text-3xl font-bold animate__animated animate__fadeIn">
              About Us
            </h2>
            <p className="about-us-description mt-4 text-base leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              Cosmic Logic 1 Software Services Pvt. Ltd is a company specializing in software development, web development, digital marketing, and more. We deliver innovative solutions to meet clients' needs and transform ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
