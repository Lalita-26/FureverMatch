import React from "react";

const Hero = () => {
  return (
    <div className="bg-Lightblue">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-4xl mb-4 font-bold">
            Welcome to <span className="font-bold">FureverMatch</span>
          </h1>
          <p className="text-lg text-gray-600">
            Find your furry soulmate with our breed-matching wizard!
          </p>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/src/assets/images/Dog&Cat.jpg"
            alt="Cute dog and cat"
            className="rounded-lg max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
