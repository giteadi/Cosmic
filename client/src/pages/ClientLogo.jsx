import React from 'react';

const ClientLogos = () => {
  return (
    <section className="py-16 bg-opacity-10 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-6 text-white">Trusted by Industry Leaders</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <img src="/path/to/logo1.png" alt="Logo 1" className="h-12 opacity-70" />
        <img src="/path/to/logo2.png" alt="Logo 2" className="h-12 opacity-70" />
        {/* Add more logos as needed */}
      </div>
    </section>
  );
};

export default ClientLogos;
