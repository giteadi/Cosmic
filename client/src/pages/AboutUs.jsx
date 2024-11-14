import React, { useState } from 'react';
import '../css/AboutUs.css';

function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

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
              <div className="orbit jupiter-orbit">
                <div className="planet jupiter"></div>
              </div>
              <div className="orbit saturn-orbit">
                <div className="planet saturn"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="about-us-title text-2xl md:text-3xl font-bold animate__animated animate__fadeIn">
              About Us - Cosmic Coder 24
            </h2>
            <p className="about-us-description mt-4 text-base leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              Welcome to Cosmic Coder 24!<br />
              At Cosmic Coder 24, our vision is to empower businesses with the transformative power of technology. Our mission is to bring growth and efficiency to companies around the globe, allowing them to stay competitive and thrive in today’s digital era. We are driven by a deep commitment to delivering meaningful value, not just services, so our clients can achieve long-term success.
            </p>

            {showMore && (
              <div className="more-content mt-6">
                <h3 className="about-us-subtitle text-xl font-semibold">Our Values</h3>
                <p className="about-us-description mt-4 text-base leading-relaxed">
                  Our work is anchored in core values that define who we are and guide everything we do:
                </p>
                <ul className="mt-4 list-disc pl-6">
                  <li>Customer Satisfaction – We put clients first, constantly striving to exceed their expectations.</li>
                  <li>Efficiency – We craft seamless, optimized solutions designed to enhance business performance.</li>
                  <li>Commitment to Timelines – We honor deadlines without ever compromising on quality.</li>
                  <li>High-End Technology – We deliver cutting-edge, innovative solutions that are reliable and impactful.</li>
                  <li>Personalized Solutions – Every client’s business is unique, and we ensure each project is tailored specifically to their needs.</li>
                </ul>

                <p className="about-us-description mt-4 text-base leading-relaxed">
                  Unlike many, we prioritize delivering lasting value and meaningful results to our clients over mere financial transactions.
                </p>

                <h3 className="about-us-subtitle text-xl font-semibold mt-6">Our Services</h3>
                <ul className="mt-4 list-disc pl-6">
                  <li>Web Development – From custom-coded solutions to no-code options</li>
                  <li>App Development – Android, iOS, and desktop applications</li>
                  <li>Desktop App Development – Robust desktop solutions tailored for both Windows and macOS</li>
                  <li>Digital Marketing – Social media management and strategies to grow your brand</li>
                  <li>SEO Services – Boosting visibility on search engines to drive organic growth</li>
                </ul>

                <p className="about-us-description mt-4 text-base leading-relaxed">
                  With a client-focused approach, Cosmic Coder 24 welcomes clients from all industries. Whether you’re seeking a high-traffic website, robust digital marketing, or specialized app development, we’re here to help.
                </p>

                <h3 className="about-us-subtitle text-xl font-semibold mt-6">Client Experience</h3>
                <p className="about-us-description mt-4 text-base leading-relaxed">
                  At Cosmic Coder 24, communication and transparency are key to project success. We provide clients with regular updates and documentation at every phase, ensuring a seamless experience and a clear view of the project’s progress.
                </p>

                <h3 className="about-us-subtitle text-xl font-semibold mt-6">Our Origin and Inspiration</h3>
                <p className="about-us-description mt-4 text-base leading-relaxed">
                  Founded in 2023, Cosmic Coder 24 started as a team of dedicated freelancers, united by a commitment to excellence. As our reputation for delivering value grew, we were inspired to form a company that would continue transforming the world with the best technology.
                </p>
                <p className="about-us-description mt-4 text-base leading-relaxed">
                  The name Cosmic Coder 24 reflects our mission: “Cosmic” signifies coders who seem to have come directly from the cosmos, ready to bring technology that changes the world for good. “24” speaks to our commitment to working around the clock to fulfill our promises. Together, Cosmic Coder 24 represents our dedication to making an impact with technology for the benefit of everyone.
                </p>

                <h3 className="about-us-subtitle text-xl font-semibold mt-6">A Message to Our Clients</h3>
                <p className="about-us-description mt-4 text-base leading-relaxed">
                  When you partner with Cosmic Coder 24, you can expect:
                </p>
                <ul className="mt-4 list-disc pl-6">
                  <li>Professionalism – Every project receives our utmost dedication and attention.</li>
                  <li>Comprehensive Documentation – We provide detailed records of each development phase for full transparency.</li>
                  <li>SEO Benefits – Our packages include SEO services to boost your online presence from the start.</li>
                </ul>
                <p className="about-us-description mt-4 text-base leading-relaxed">
                  We look forward to helping your business grow through powerful technology that truly makes a difference.
                </p>
              </div>
            )}

            <button 
              onClick={toggleDescription} 
              className="see-more-btn text-blue-500 mt-4 underline"
            >
              {showMore ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
