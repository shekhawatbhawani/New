import React from 'react';

const AboutMe = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 p-6 md:p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Hello! My name is <span className="font-semibold">Bhawani Singh Shekhawat</span>, and I am from Sikar, Rajasthan. I am currently in the final year of my Bachelor of Arts (BA) degree and have a strong passion for learning and growing.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          Alongside my academic journey, I have become a skilled <span className="font-semibold">Full Stack Developer</span> with expertise in both frontend and backend technologies. I enjoy creating interactive and responsive web applications that deliver great user experiences.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          My tech stack includes <span className="font-semibold">HTML, CSS, JavaScript, React, Node.js, MongoDB</span>, and more. I am always eager to learn and take on new challenges that push me to grow further in my career.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
