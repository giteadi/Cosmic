import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRocket, FaUsers, FaRegHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

// Styled component for the gradient text
const GradientText = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, #8b5cf6, #ffffff);
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
    background: linear-gradient(to right, #8b5cf6, #ffffff);
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(to right, #d8b4fe, #ffffff);
    -webkit-background-clip: text;
    color: transparent;

    &::after {
      background: linear-gradient(to right, #d8b4fe, #ffffff);
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
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
  border-image: linear-gradient(to right, #ff6f61, #8b1e2f) 1;

  &:hover {
    transform: scale(1.05);
    border-image: linear-gradient(to right, #ff6f61, #8b1e2f) 1;
  }

  .service-icon {
    font-size: 3rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ff6f61, #8b1e2f);
    border-radius: 50%;
    padding: 1rem;
    display: inline-block;
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
    padding: 1.5rem;

    .service-icon {
      font-size: 2.5rem;
      padding: 0.75rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

// Icon array for red-themed icons (Replaced FaDollarSign with rupee symbol)
const icons = [
  <FaRocket />,
  <FaUsers />,
  <FaRegHandshake />,
  <FaLightbulb />,
  <div style={{
    fontSize: '2rem',
    color: 'white',
    background: 'linear-gradient(135deg, #ff6f61, #8b1e2f)', // Matching gradient
    borderRadius: '50%',
    padding: '1rem',
    display: 'inline-block',
    width: '70px', // Oval width
    height: '50px', // Oval height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    ₹
  </div>, // Rupee symbol inside an oval
  <FaShieldAlt />,
];

function WhyCosmic() {
  const [isInView, setIsInView] = useState(new Array(6).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !isInView[index]) {
            setIsInView((prevState) => {
              const updatedState = [...prevState];
              updatedState[index] = true;
              return updatedState;
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((element, index) => observer.observe(element));

    return () => observer.disconnect();
  }, [isInView]);

  return (
    <section id="why-cosmic" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <GradientText>Why Cosmic Coder 24?</GradientText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: 'Productivity',
              description: 'At Cosmic Coder 24, we prioritize efficiency and productivity in every project, helping your team stay on track and hit deadlines without compromising quality.',
              icon: icons[0],
            },
            {
              title: 'Agile Team',
              description: 'Our agile, cross-functional teams are designed to adapt quickly, ensuring your project evolves and scales smoothly as per changing requirements.',
              icon: icons[1],
            },
            {
              title: 'Best Services',
              description: 'We offer a wide range of cutting-edge tech solutions that are tailored to meet your unique business needs, from web development to AI integration.',
              icon: icons[2],
            },
            {
              title: 'Innovative Work',
              description: 'Innovation is at the heart of everything we do. We leverage the latest technologies to create forward-thinking solutions that set you apart from the competition.',
              icon: icons[3],
            },
            {
              title: 'Affordable Price',
              description: 'Cosmic Coder 24 believes in providing high-quality solutions at competitive prices, ensuring you get the most value for your investment.',
              icon: icons[4],
            },
            {
              title: 'Trusted Support',
              description: 'Our dedicated support team is always available to assist you, ensuring your systems run smoothly and efficiently, no matter what challenges arise.',
              icon: icons[5],
            },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              className={`service-card ${isInView[index] ? (index < 3 ? 'animate-right-to-left' : 'animate-left-to-right') : ''}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyCosmic;
