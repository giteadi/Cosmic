import React from 'react';
import { FaStar, FaUser, FaBusinessTime, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Testimonials() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-600">What People Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaUser className="text-4xl text-white" />
            </div>
            <p className="text-gray-400">
              "The team at Cosmic Coder 24 was incredibly responsive and understood our needs perfectly. Their solutions helped us streamline our operations."
            </p>
            <h3 className="mt-4 font-semibold text-gray-300">- Raghav Mehta</h3>
            <div className="flex justify-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaBusinessTime className="text-4xl text-white" />
            </div>
            <p className="text-gray-400">
              "Cosmic Coder 24 helped us launch our new web platform on time and under budget. Their team is highly skilled and efficient!"
            </p>
            <h3 className="mt-4 font-semibold text-gray-300">- Priya Sharma</h3>
            <div className="flex justify-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaQuoteLeft className="text-4xl text-white" />
            </div>
            <p className="text-gray-400">
              "We’ve worked with many software agencies, but none compare to Cosmic Coder 24. Their communication and work quality are unmatched!"
            </p>
            <h3 className="mt-4 font-semibold text-gray-300">- Ananya Gupta</h3>
            <div className="flex justify-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaUser className="text-4xl text-white" />
            </div>
            <p className="text-gray-400">
              "The dedication and expertise that Cosmic Coder 24 brings to the table are exceptional. They have been a key partner in our digital transformation."
            </p>
            <h3 className="mt-4 font-semibold text-gray-300">- Amit Reddy</h3>
            <div className="flex justify-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaBusinessTime className="text-4xl text-white" />
            </div>
            <p className="text-gray-400">
              "Our experience with Cosmic Coder 24 has been fantastic. Their team delivered high-quality software with exceptional user experience."
            </p>
            <h3 className="mt-4 font-semibold text-gray-300">- Neelam Bansal</h3>
            <div className="flex justify-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaQuoteRight className="text-4xl text-white" />
            </div>
            <p className="text-gray-400">
              "Cosmic Coder 24 provided exceptional support and top-notch solutions. They helped us scale our product faster and more efficiently."
            </p>
            <h3 className="mt-4 font-semibold text-gray-300">- Sanjay Singh</h3>
            <div className="flex justify-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
