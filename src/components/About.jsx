import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center">
      <section className="flex flex-col gap-5 h-vh justify-center items-center text-center w-[95%]">
        <h2 className=" text-3xl text-white flex justify-center my-4">
          About Me
        </h2>
        <p className="text-2xl text-gray-400 items-center text-center w-54">
          {' '}
          <span className="text-3xl text-blue-700">Yousef Sheha</span> Full
          Stack Developer (MERN Developer){' '}
        </p>

        <img
          className="w-[60%] h-85 md:h-140 md:w-[50%] lg:w-[40%] lg:h-160 animate-pulse"
          src="/src/assets/IMG-20250816-WA0026.jpg"
          alt="yousef sheha"
        />

        <span className="my-5">
          I am a passionate Full Stack MERN Developer with a strong drive for
          building dynamic, efficient, and scalable web applications. With
          expertise in MongoDB, Express.js, React, and Node.js, I enjoy working
          across both frontend and backend to deliver seamless user experiences.
          My solid understanding of RESTful APIs, database design, and state
          management enables me to create complete, end-to-end solutions that
          are both functional and visually engaging. I am constantly exploring
          new technologies and best practices to stay ahead in the fast-evolving
          web development landscape. I take pride in writing clean, maintainable
          code and collaborating effectively with cross-functional teams to
          bring innovative ideas to life.{' '}
        </span>
      </section>
    </div>
  );
};

export default About;
