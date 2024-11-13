import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-br from-blue-800 to-purple-800">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Powerful Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard title="Feature One" description="Description for feature one." />
        <FeatureCard title="Feature Two" description="Description for feature two." />
        <FeatureCard title="Feature Three" description="Description for feature three." />
      </div>
    </section>
  );
};

export default Features;
