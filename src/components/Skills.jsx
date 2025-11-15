import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <h1 className="text-4xl my-7">My Skills</h1>
      </div>
      <div className="my-10 flex flex-col gap-4">
        <ul className="flex justify-around ">
          <li className="text-2xl text-red-300">Html 5</li>
          <li className="text-2xl">Css 3</li>
        </ul>
        <ul className="flex justify-around">
          <li className="text-2xl">JavaScript</li>
          <li className="text-2xl text-red-300">React</li>
        </ul>
        <ul className="flex justify-around">
          <li className="text-2xl text-red-300">Tailwindcss</li>
          <li className="text-2xl">Bootstrap</li>
        </ul>
        <ul className="flex justify-around">
          <li className="text-2xl">jQuery</li>
          <li className="text-2xl text-red-300">Nodejs</li>
        </ul>
        <ul className="flex justify-around">
          <li className="text-2xl text-red-300">Mongodb</li>
          <li className="text-2xl">Express</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
