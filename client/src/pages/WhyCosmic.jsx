import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// Styled component for the gradient text with purple and white colors
const GradientText = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, #8b5cf6, #ffffff);  /* Purple to white gradient */
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;

  /* Underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #8b5cf6, #ffffff);  /* Purple to white gradient underline */
    transition: all 0.3s ease;
  }

  /* Hover effect for text and underline */
  &:hover {
    background: linear-gradient(to right, #d8b4fe, #ffffff); /* Lighter purple to white on hover */
    -webkit-background-clip: text;
    color: transparent;

    &::after {
      background: linear-gradient(to right, #d8b4fe, #ffffff); /* Lighter purple to white underline */
      height: 3px;
    }
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Transparent background */
  border: 4px solid transparent;  /* Default transparent border */
  border-radius: 50%; /* Circular border */
  padding: 2rem;
  backdrop-filter: blur(10px); /* Optional: adds blur effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;

  /* New Gradient Border */
  border-image: linear-gradient(to right, #ff6f61, #8b1e2f) 1;  /* Apply gradient border */

  &:hover {
    transform: scale(1.05);
    border-image: linear-gradient(to right, #ff6f61, #8b1e2f) 1; /* Hover effect with same gradient */
  }

  .service-icon {
    width: 80px;
    height: 80px;
    background-color: #e3e3e3;
    border-radius: 50%;
    margin-bottom: 1.5rem;
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

  /* Animation for top 3 cards */
  &.animate-right-to-left {
    animation: moveRightToLeft 0.8s ease-out forwards;
  }

  /* Animation for bottom 3 cards */
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
`;

function WhyCosmic() {
  const [isInView, setIsInView] = useState([false, false, false, false, false, false]);
  const [isScrollingUp, setIsScrollingUp] = useState(false); // To track scroll direction
  const previousScrollPosition = useRef(0); // useRef to track previous scroll position

  // Function to detect scroll direction
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrollingUp(scrollPosition < previousScrollPosition.current);
    previousScrollPosition.current = scrollPosition; // Update the previous scroll position
  };

  useEffect(() => {
    // Add scroll event listener to track scroll direction
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
      threshold: 0.5, // Trigger animation when 50% of the card is visible
    });

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <section id="why-cosmic" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <GradientText>Why Cosmic Logic 1</GradientText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {['Productivity', 'Agile Team', 'Best Services', 'Innovative Work', 'Affordable Price', 'Trusted Support'].map((benefit, index) => (
            <ServiceCard 
              key={index} 
              className={`service-card ${isInView[index] ? (isScrollingUp ? (index < 3 ? 'animate-right-to-left' : 'animate-left-to-right') : (index < 3 ? 'animate-left-to-right' : 'animate-right-to-left')) : ''}`}
            >
              <div className="service-icon"></div> {/* Icon Placeholder */}
              <h3>{benefit}</h3>
              <p>Description of why {benefit} is important. Highlight the advantages that Cosmic Logic provides through this feature.</p>
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyCosmic;
