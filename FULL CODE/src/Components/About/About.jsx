import React from "react";
import about from "../../assets/success.jpg";
import about2 from "../../assets/computer-and-laptop-repairs-all-makes.jpg";
import why from "../../assets/why.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WhyChoose } from "../Why Choose/WhyChoose";
export const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="h-[100%]hero w-full" style={{ backgroundImage: "none" }}>
      <div className=" md:w-[80%] w-full m-auto flex flex-col justify-center  py-[30px]">
        <h1 className="text-blue-800 text-[30px] font-bold text-center">
          About UrFlyntym Travels & Tours
        </h1>
        <hr className="border-[2px] border-solid border-blue-800 mb-7" />
        <div className="bg-about bg-center bg-cover section1 md:flex block w-[100%] justify-between">
          <img
            src={about}
            alt="UrFlyntym Travels & Tours"
            className="md:w-[48%] hover:shadow-2xl "
            data-aos="zoom-in"
          />
          <div className="md:w-[48%] flex justify-center items-center">
            <p
              data-aos="zoom-in"
              className="text-[20px] text-left md:text-justify m-[auto] p-4 font-bold text-white md:p-10"
            >
              At UrFlyntym, we believe that travel is not just about reaching a
              destination; it's about experiencing the journey. Established with
              a passion for exploration and a commitment to excellence,
              UrFlyntym Travels & Tours has been making travel dreams come true
              since 2016.
            </p>
          </div>
        </div>

        <div className="mt-10 section1 bg-mission bg-center bg-cover flex flex-col-reverse md:flex-row w-[100%] justify-between">
          <div className="md:w-[48%]">
            <h1 className="text-[25px] text-center text-white font-bold underline">
              Our Mission
            </h1>
            <p
              data-aos="zoom-in"
              className="p-4 text-[20px] text-left text-white md:text-justify m-[auto] font-bold md:p-10"
            >
              Our mission is simple: to inspire and empower travelers to explore
              the world with confidence and curiosity. We strive to provide
              personalized, unforgettable travel experiences that exceed
              expectations and create lifelong memories.
            </p>
          </div>
          <img
            src={about2}
            alt="UrFlyntym Travels & Tours"
            className="md:w-[48%] hover:shadow-2xl"
            data-aos="zoom-in"
          />
        </div>

        <div className=" mt-10 section1 md:flex block w-[100%] justify-between">
          <div className="">
            <WhyChoose></WhyChoose>
          </div>
        </div>
      </div>
    </div>
  );
};
