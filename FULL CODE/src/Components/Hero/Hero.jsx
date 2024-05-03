import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="hero w-full bg-hero h-[100vh] bg-cover bg-center">
      <div className="content w-[80%] m-auto flex flex-col justify-center md:h-[100%] h-[100%]">
        <h1 className="md:text-[50px] text-[35px] text-center md:text-left text-white font-bold">
          <ReactTyped
            strings={["Welcome to UrFlyntym Travels and Tours"]}
            typeSpeed={80}
            cursorChar=" "
          />
        </h1>
        <p className="text-white font-bold md:text-[25px] text-[18px]  mt-5 text-justify">
          <ReactTyped
            strings={[
              "Unravel Your Adventures with UrFlyntym!",
              "Discover Your Dream Destinations",
              "Personalized Travel Experiences",
              "Unparalleled Customer Service",
              "Start Your Journey Today",
            ]}
            typeSpeed={80}
            backSpeed={40}
            startDelay={3000}
            loop
          />
        </p>
        <p className="text-white md:text-[25px] text-[18px]  mt-5 md:text-justify text-left">
          Are you ready to embark on unforgettable journeys, explore exotic
          destinations, and create memories that last a lifetime? Look no
          further! At UrFlyntym, we're passionate about curating extraordinary
          travel experiences tailored just for you.
        </p>
        <button className="md:w-[200px] w-[150px] bg-red-700 md:p-4 py-3 text-white md:text-[20px] text-[18px] font-bold mt-10 rounded-[10px] hover:bg-red-500 transition">
          <Link to="/contact">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
