import React from 'react';

const WorkExperience = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 to-blue-400 p-6 md:p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-3xl text-center transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Work Experience</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          As a fresher, I am eager to apply my skills and knowledge in a professional environment. I am ready to take on new challenges and grow as a developer.
        </p>
        <p className="text-lg md:text-xl text-gray-700">
          While I don't have formal work experience, I have been working on various personal projects, honing my skills in full-stack web development. My portfolio showcases the range of my abilities in building responsive, user-friendly web applications.
        </p>
      </div>
    </section>
  );
};

export default WorkExperience;
