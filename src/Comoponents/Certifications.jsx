import React from 'react';

const Certifications = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-400 p-6 md:p-10">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 w-full max-w-3xl text-center transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Certifications</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          I am certified as a Full Stack Developer, which has equipped me with the skills and knowledge to build robust and efficient web applications.
        </p>
        <ul className="list-none text-lg md:text-xl text-gray-700">
          <li className="mb-2">
            <span className="font-semibold">Full Stack Developer Certification</span> - (2025)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
