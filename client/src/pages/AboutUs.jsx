import React from 'react';

function AboutUs() {
  return (
    <section id="aboutUs" className="py-16 bg-white text-gray-700">
      <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <div className="h-48 bg-gray-200 rounded-lg mb-8 md:mb-0 md:h-64"></div> {/* Image Placeholder */}
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold animate__animated animate__fadeIn">AboutUs Us</h2>
            <p className="mt-4 text-base leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              Cosmic Logic 1 Software Services Pvt. Ltd is a company specializing in software development, web development, digital marketing, and more. We deliver innovative solutions to meet clients' needs and transform ideas into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
