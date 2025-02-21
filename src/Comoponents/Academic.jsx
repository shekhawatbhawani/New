import React from 'react';

const AcademicBackground = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 to-blue-400 p-6 md:p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-3xl text-center transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Academic Background</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Here's a brief overview of my educational journey:
        </p>
        <ul className="list-none space-y-4 text-lg md:text-xl text-gray-700">
          <li className="hover:text-blue-700 transition-colors duration-300">
            <span className="font-semibold">Bachelor of Arts (BA),</span> MDSU University (2025)
          </li>
          <li className="hover:text-blue-700 transition-colors duration-300">
            <span className="font-semibold">Tally Prime Certification</span> (2024)
          </li>
          <li className="hover:text-blue-700 transition-colors duration-300">
            <span className="font-semibold">High School, Arts Stream,</span> XYZ School (2020)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AcademicBackground;
