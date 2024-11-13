import React from 'react';

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 animate__animated animate__fadeIn">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {['Website Design', 'Web Development', 'Digital Marketing', 'Windows Application', 'Customized IT Solutions', 'Mobile App Development'].map((service, index) => (
            <div
              key={index}
              className="bg-white/30 border border-[#D2B48C] shadow-md rounded-lg p-6 backdrop-blur-sm transition-transform duration-300 transform hover:scale-105 focus:ring-4 focus:ring-white focus:ring-opacity-80 focus:ring-offset-2"
              tabIndex={0} // Allows focus styling when using keyboard navigation
            >
              <div className="h-20 w-20 bg-gray-300 mx-auto mb-4 rounded-full"></div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Description for {service} goes here. Briefly explain the service and its benefits to the customer.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
