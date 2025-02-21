import React from 'react';

const Passions = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-400 to-blue-500 p-6 md:p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-3xl text-center transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Passions
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          My passions drive me to explore new ideas, solve complex challenges, and stay engaged with the latest trends.
        </p>
        <ul className="list-none space-y-4 text-lg md:text-xl text-gray-700">
          <li className="hover:text-blue-700 transition-colors duration-300">🚀 Building impactful and user-friendly web applications</li>
          <li className="hover:text-blue-700 transition-colors duration-300">🤖 Learning about advancements in artificial intelligence and machine learning</li>
          <li className="hover:text-blue-700 transition-colors duration-300">🌍 Contributing to open-source projects</li>
          <li className="hover:text-blue-700 transition-colors duration-300">🎓 Mentoring others and sharing knowledge</li>
          <li className="hover:text-blue-700 transition-colors duration-300">📚 Continuous learning and self-improvement</li>
        </ul>
      </div>
    </section>
  );
};

export default Passions;
