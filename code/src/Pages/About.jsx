import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import founder from "../assets/man.jpg";
import { WhyChoose } from "../Components/Why Choose/WhyChoose";
import Testimony from "../Components/Testimony/Testimony";
import FAQ from "../Components/FAQ/FAQ";
import Animation from "../Components/Animation/Animation";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-full bg-fixed text-white bg-center bg-cover">
      <Navbar></Navbar>
      <Animation></Animation>
      <div className="h-[100%]hero w-full ">
        <div className="hero bg-center bg-cover bg-aboutus w-full h-[100vh] flex  justify-center items-center">
          <h1 className="text-white font-bold text-[40px] md:text-[100px]">
            About Us
          </h1>
        </div>
        <div className=" w-[80%] m-auto flex flex-col justify-center  py-[30px]">
          <div className="welcome ">
            <div className="title">
              <h1
                className="text-center font-bold text-[40px]"
                data-aos="zoom-in"
              >
                {/* UrFlyntym Travels & Tours */}
                Welcome to UrFlyntym Travels & Tours!
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              We're thrilled to have you here and excited to share a little bit
              about who we are and what we stand for.
            </p>
            <p className="text-[20px] my-3">
              At UrFlyntym, we're not just another travel agency; we're your
              partners in exploration, your guides to discovery, and your
              companions on the journey of a lifetime. Our mission is simple yet
              profound: to inspire and empower you to see the world in all its
              beauty, diversity, and wonder.
            </p>
          </div>
          <div className="mission">
            <div className="title">
              <h1
                className="text-center font-bold text-[40px]"
                data-aos="zoom-in"
              >
                Our Mission
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              We exist to turn your travel dreams into reality. Whether you're
              dreaming of scaling snow-capped mountains, basking on sun-kissed
              beaches, or immersing yourself in vibrant cultures, we're here to
              make it happen. Our mission is to create personalized, seamless,
              and unforgettable travel experiences that exceed your expectations
              and leave you with memories to last a lifetime
            </p>
          </div>{" "}
        </div>

        <div className="values p-10 bg-about bg-cover bg-center text-white">
          <div className="title">
            <h1
              className="text-center font-bold text-[40px]"
              data-aos="zoom-in"
            >
              Our Values
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <div className="items flex flex-wrap justify-center">
            <div
              className="flex flex-col w-[500px] border-[3px] p-2 bg-gray-800"
              data-aos="zoom-in"
            >
              <div className="title2">
                <h1
                  className="text-center font-bold text-[30px]"
                  data-aos="zoom-in"
                >
                  Customer-Centricity
                </h1>
                <hr
                  className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] "
                  data-aos="zoom-out"
                />
              </div>{" "}
              <p className="text-[20px] my-3">
                Your satisfaction and happiness are at the core of everything we
                do. From the moment you reach out to us to the moment you return
                home, we prioritize your needs, preferences, and comfort above
                all else.
              </p>
            </div>
            <div
              className="flex flex-col w-[500px] border-[3px] p-2 bg-gray-700"
              data-aos="zoom-in"
            >
              <div className="title2">
                <h1
                  className="text-center font-bold text-[30px]"
                  data-aos="zoom-in"
                >
                  Integrity
                </h1>
                <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
              </div>
              <p className="text-[20px] my-3">
                We believe in transparency, honesty, and ethical conduct. You
                can trust us to provide you with accurate information, fair
                pricing, and unbiased advice, ensuring that every aspect of your
                journey is handled with the utmost integrity.
              </p>
            </div>
            <div
              className="flex flex-col w-[500px] border-[3px] p-2 bg-gray-700"
              data-aos="zoom-out"
            >
              <div className="title2">
                <h1
                  className="text-center font-bold text-[30px]"
                  data-aos="zoom-in"
                >
                  Expertise
                </h1>
                <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
              </div>
              <p className="text-[20px] my-3">
                With a team of seasoned travel experts and enthusiasts, we bring
                a wealth of knowledge, experience, and passion to the table.
                Whether you're seeking off-the-beaten-path adventures or luxury
                getaways, we have the expertise to craft the perfect itinerary
                for you.
              </p>
            </div>
            <div
              className="flex flex-col w-[500px] border-[3px] p-2 bg-gray-800"
              data-aos="zoom-in"
            >
              <div className="title2">
                <h1
                  className="text-center font-bold text-[30px]"
                  data-aos="zoom-in"
                >
                  Innovation
                </h1>
                <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
              </div>
              <p className="text-[20px] my-3">
                We're committed to staying ahead of the curve and embracing
                innovation in all aspects of our business. From cutting-edge
                technology to creative travel solutions, we're constantly
                exploring new ways to enhance your travel experience and make it
                even more memorable.
              </p>
            </div>
            <div
              className="flex flex-col w-[500px] border-[3px] p-2 bg-gray-700"
              data-aos="zoom-out"
            >
              <div className="title2">
                <h1
                  className="text-center font-bold text-[30px]"
                  data-aos="zoom-in"
                >
                  Community
                </h1>
                <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
              </div>
              <p className="text-[20px] my-3">
                We believe in the power of travel to connect people, cultures,
                and communities. That's why we're dedicated to supporting local
                economies, promoting sustainable tourism practices, and giving
                back to the communities we visit.
              </p>
            </div>
          </div>
        </div>
        <div className="story p-10 bg-city bg-cover bg-center text-white">
          <div className="title">
            <h1
              className="text-center font-bold text-[40px]"
              data-aos="zoom-in"
            >
              Our Story
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <div className="begin flex flex-col md:flex-row justify-between md:w-[80%] m-auto ">
            <div className="text md:mx-5">
              <div className="title2">
                <h1
                  className="text-center font-bold mt-10 md:mt-0 text-[30px]"
                  data-aos="zoom-in"
                >
                  The Beginning
                </h1>
                <hr
                  className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] "
                  data-aos="zoom-out"
                />
              </div>
              <p className="text-[20px] my-3  text-justify" data-aos="zoom-in">
                UrFlyntym was founded in 2016 by <b>Eneh Emmanuel A.</b>, a
                group of avid travelers who came together with a shared vision:
                to create a travel agency that not only offered unforgettable
                experiences but also fostered a sense of community and adventure
              </p>
              <p className="text-[20px] my-3  text-justify" data-aos="zoom-in">
                The inspiration behind UrFlyntym stemmed from our founders' own
                transformative travel experiences. From backpacking through
                Southeast Asia to road-tripping across Europe, each journey
                sparked a sense of wonder, curiosity, and discovery that left an
                indelible mark on their souls. It was these experiences that
                fueled their passion to inspire others to embark on their own
                adventures and see the world with fresh eyes.
              </p>
            </div>
            <img
              src={founder}
              data-aos="zoom-in"
              alt=""
              className="md:w-[300px] md:h-[400px]"
            />
          </div>
        </div>
        <WhyChoose></WhyChoose>
        <div className="testimony h-[100%]">
          <div className="title">
            <h1
              className=" text-center font-bold text-[40px]"
              data-aos="zoom-in"
            >
              Customer Testimonials
            </h1>
            <hr className="my-3 border-orange-500 m-auto border-[3px] w-[100px] " />
          </div>
          <Testimony></Testimony>
          <div className="md:w-[80%] w-[90%] m-auto">
            <FAQ></FAQ>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
