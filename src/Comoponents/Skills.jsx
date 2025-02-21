import React from 'react';

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React JS",
    "Node JS",
    "Express JS",
    "Mongodb",
    "Bootstrap",
    "Tailwind"
  ];

  return (
    <section className="p-6 md:p-10 bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-lg md:text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-300"
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
