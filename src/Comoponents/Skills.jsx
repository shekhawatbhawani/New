import React from 'react';

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Bootstrap",
    "Tailwind"
  ];

  return (
    <section className="p-6 md:p-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 text-xl text-gray-700 font-semibold text-center hover:bg-gradient-to-r from-indigo-500 to-blue-500 hover:text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
