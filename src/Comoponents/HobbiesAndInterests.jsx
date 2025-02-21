import React from 'react';

const HobbiesAndInterests = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-500 p-6 md:p-10">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-3xl text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Hobbies & Interests
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          In my free time, I enjoy various activities that fuel my creativity and passion.
        </p>
        <ul className="list-none space-y-4 text-lg md:text-xl text-gray-700">
          <li className="hover:text-indigo-600 transition-colors duration-300">📚 Reading technical books and blogs</li>
          <li className="hover:text-indigo-600 transition-colors duration-300">💻 Exploring new technologies and frameworks</li>
          <li className="hover:text-indigo-600 transition-colors duration-300">♟️ Playing chess and problem-solving games</li>
          <li className="hover:text-indigo-600 transition-colors duration-300">🌍 Traveling and exploring new cultures</li>
          <li className="hover:text-indigo-600 transition-colors duration-300">📸 Photography and digital arts</li>
        </ul>
      </div>
    </section>
  );
};

export default HobbiesAndInterests;
