import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen bg-blue-500 text-center flex flex-col justify-center items-center p-10">
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        Welcome to Bhawani's Portfolio
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mt-4">
        Explore my work, skills, and passions.
      </p>
    </section>
  );
};

export default HeroSection;
