import React from "react";

const HomeBanner = () => {
  return (
    <div>
      <div className="hero bg-gradient-to-r  from-emerald-400 via-cyan-500 to-sky-600 text-gray-100">
        <div className="hero-content h-[100vh] flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/z2C3htR/1665751542229-removebg.png"
            className="w-[50%] rounded-lg shadow-2xl"
          />

          <div className="">
            <h1 className="text-6xl font-bold text-center">Arif Biswas</h1>
            <h2 className="text-4xl font-bold text-center">Front-End Web Developer</h2>
            <p className="py-6 text-justify first-letter:text-2xl">
              My name is Arif Biswas, I am react developer, and I study of
              bachelor of business studies . I live in Jatrabari, Dhaka in
              Bangladesh. My specific skill is react.js node.js express.js
              MongoDB , javascript(ES6) , HTMl5, CSS3, and firebase
              (authenticate system) . And my goal is to make a senior web
              developer.Starting from a love of programming. Now web development
              is my programming career I enjoy myself as a web programmer, so I
              have a lot of love for programming. And I will decide to learn
              more programming languages like python, c++, and all of the things
              I will gain through my hard work. And I will make a senior web
              developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
