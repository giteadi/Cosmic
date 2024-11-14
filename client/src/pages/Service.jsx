import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FaPaintBrush, FaCode, FaChartLine, FaLaptop, FaCogs, FaMobileAlt } from 'react-icons/fa';

const GradientText = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, white, #8b1e2f);
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: transparent;
    background: linear-gradient(to right, pink, white);
    transition: all 0.3s ease;
  }
  &:hover {
    background: linear-gradient(to right, pink, white);
    -webkit-background-clip: text;
    color: transparent;
    &::after {
      background: linear-gradient(to right, pink, white);
      height: 3px;
    }
  }

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 4px solid transparent;
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
  border-image: linear-gradient(to right, pink, white) 1;
  &:hover {
    transform: scale(1.05);
    border-image: linear-gradient(to right, pink, white) 1;
  }

  .service-icon {
    width: 60px;
    height: 60px;
    font-size: 3rem;
    background-color: #e3e3e3;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  p {
    color: #e0e0e0;
    font-size: 0.875rem;
  }

  &.animate-right-to-left {
    animation: moveRightToLeft 0.8s ease-out forwards;
  }

  &.animate-left-to-right {
    animation: moveLeftToRight 0.8s ease-out forwards;
  }

  @keyframes moveRightToLeft {
    0% {
      transform: translateX(100%) scale(1);
      opacity: 0;
    }
    100% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes moveLeftToRight {
    0% {
      transform: translateX(-100%) scale(1);
      opacity: 0;
    }
    100% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    padding: 1rem;

    .service-icon {
      width: 50px;
      height: 50px;
      font-size: 2rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

const icons = [
  <FaPaintBrush />,
  <FaCode />,
  <FaChartLine />,
  <FaLaptop />,
  <FaCogs />,
  <FaMobileAlt />,
];

function Services() {
  const [isInView, setIsInView] = useState([false, false, false, false, false, false]);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const previousScrollPosition = useRef(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrollingUp(scrollPosition < previousScrollPosition.current);
    previousScrollPosition.current = scrollPosition;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsInView((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = true;
            return updatedState;
          });
        }
      });
    }, {
      threshold: 0.5,
    });

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <GradientText>Our Services</GradientText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {['Website Design', 'Web Development', 'Digital Marketing', 'Windows Application', 'Customized IT Solutions', 'Mobile App Development'].map((service, index) => (
            <ServiceCard
              key={index}
              className={`service-card ${isInView[index] ? (isScrollingUp ? (index < 3 ? 'animate-right-to-left' : 'animate-left-to-right') : (index < 3 ? 'animate-left-to-right' : 'animate-right-to-left')) : ''}`}
            >
              <div className="service-icon">{icons[index]}</div>
              <h3>{service}</h3>
              <p>
                {index === 0 && 'We design stunning, responsive websites that engage users and meet your business goals. Our designs are tailored to your brand’s identity.'}
                {index === 1 && 'We provide full-stack web development services, including backend and frontend development to create scalable, dynamic websites and applications.'}
                {index === 2 && 'Our digital marketing services help businesses increase their online presence, improve SEO rankings, and drive more traffic through targeted campaigns.'}
                {index === 3 && 'We specialize in developing high-performance, secure Windows applications that meet the unique needs of your business, from enterprise solutions to utilities.'}
                {index === 4 && 'We offer customized IT solutions that streamline your operations, reduce costs, and enhance productivity with cutting-edge technologies tailored to your needs.'}
                {index === 5 && 'Our mobile app development services provide both Android and iOS solutions designed to enhance user engagement and drive business growth.'}
              </p>
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
