import React, { useEffect } from "react";
import { Footer } from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import FAQ from "../Components/FAQ/FAQ";
import Aos from "aos";
import "aos/dist/aos.css";
import Animation from "../Components/Animation/Animation";
import Contact from "../Components/Contact/Contact";
const Service = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-servicePage bg-fixed text-white bg-center bg-cover">
      <Navbar></Navbar>
      <div className="h-[100%] w-full ">
        <div className="hero bg-center bg-cover w-full h-[100vh] flex  justify-center items-center">
          <Animation></Animation>
          <h1 className="text-white font-bold text-[40px] md:text-[100px]">
            Our Services
          </h1>
        </div>
        <div className=" w-[80%] m-auto flex flex-col justify-center  py-[30px]">
          <div className="welcome ">
            <div className="title">
              <h1
                className="text-center font-bold text-[40px]"
                data-aos="zoom-in"
              >
                Welcome to UrFlyntym Travels & Tours!
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              Welcome to UrFlyntym Travels & Tours, where we turn your travel
              dreams into unforgettable experiences. At UrFlyntym, we understand
              that travel is not just about reaching a destination; it's about
              embarking on a journey of discovery, adventure, and personal
              growth. That's why we're dedicated to providing exceptional
              service, expert guidance, and unparalleled value to every traveler
              we serve.
            </p>
            <p className="text-[20px] my-3">
              What sets UrFlyntym apart is our commitment to personalized
              service, insider knowledge, and unparalleled attention to detail.
              When you book with us, you're not just another customer – you're
              part of the UrFlyntym family. Our team of experienced travel
              advisors will work closely with you to understand your unique
              preferences, interests, and budget, crafting a customized
              itinerary that exceeds your expectations and fulfills your travel
              aspirations.
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
              Our mission at UrFlyntym is simple: to inspire and empower you to
              explore the world with confidence, curiosity, and wonder. Whether
              you're seeking a relaxing beach getaway, an adrenaline-pumping
              adventure, or a cultural immersion in a far-flung corner of the
              globe, we're here to make it happen.
            </p>
            <p className="text-[20px] my-3">
              At UrFlyntym, we believe that travel has the power to enrich
              lives, foster connections, and create moments of joy and
              inspiration. That's why we're passionate about helping you
              discover the world in all its beauty, diversity, and wonder. So
              why wait? Let's embark on this journey together and make your
              travel dreams a reality with UrFlyntym Travels & Tours.
            </p>
          </div>
        </div>

        <div className="title">
          <h1 className="text-center font-bold text-[40px]" data-aos="zoom-in">
            Featured Packages
          </h1>
          <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
        </div>
        <div className="w-full bg-tropical bg-cover bg-center ">
          <div className=" w-[80%] m-auto flex flex-col justify-center  py-[30px]">
            <div className="title">
              <h1
                className="text-center font-bold text-[25px]"
                data-aos="zoom-in"
              >
                Tropical Paradise Retreat
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              Escape to the pristine beaches and lush landscapes of our Tropical
              Paradise Retreat. Enjoy a 7-day stay in a luxurious beachfront
              villa surrounded by swaying palm trees and crystal-clear waters.
              Highlights include:
            </p>
            <ul className="text-[20px]">
              <li>Private beach access for ultimate relaxation</li>
              <li>Daily yoga sessions overlooking the ocean</li>
              <li>
                Guided snorkeling adventures to explore vibrant coral reefs
              </li>
              <li>
                Gourmet meals featuring fresh local seafood and tropical fruits
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-asia bg-cover bg-center ">
          <div className=" w-[80%] m-auto flex flex-col justify-center  py-[30px]">
            <div className="title">
              <h1
                className="text-center font-bold text-[25px]"
                data-aos="zoom-in"
              >
                Cultural Expedition in Asia
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              Embark on a cultural journey through the heart of Asia with our
              10-day expedition. Immerse yourself in the rich heritage and
              traditions of diverse Asian cultures. Highlights include:
            </p>
            <ul className="text-[20px]">
              <li>
                Visits to iconic landmarks such as the Great Wall of China and
                Angkor Wat
              </li>
              <li>Authentic cooking classes to learn regional cuisines</li>
              <li>Insightful encounters with local artisans and craftsmen</li>
              <li>Guided tours through bustling markets and ancient temples</li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-amazon bg-cover bg-center ">
          <div className=" w-[80%] m-auto flex flex-col justify-center  py-[30px]">
            <div className="title">
              <h1
                className="text-center font-bold text-[25px]"
                data-aos="zoom-in"
              >
                Cultural Expedition in Asia
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              Experience the thrill of the Amazon Rainforest on a 5-day
              adventure deep into the heart of the jungle. Get up close and
              personal with exotic wildlife and stunning natural landscapes.
              Highlights include:
            </p>
            <ul className="text-[20px]">
              <li>
                Guided jungle hikes to spot rare animals like jaguars and
                monkeys
              </li>
              <li>
                Canoe expeditions along winding tributaries of the Amazon River
              </li>
              <li>Nighttime safaris for a chance to see nocturnal creatures</li>
              <li>
                Stay in eco-friendly lodges nestled within the rainforest canopy
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-europe bg-cover bg-center ">
          <div className=" w-[80%] m-auto flex flex-col justify-center  py-[30px]">
            <div className="title">
              <h1
                className="text-center font-bold text-[25px]"
                data-aos="zoom-in"
              >
                European Grand Tour
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              Embark on a grand tour of Europe, exploring the continent's most
              iconic cities and landmarks over 14 unforgettable days. Highlights
              include:
            </p>
            <ul className="text-[20px]">
              <li>
                Visits to Paris, Rome, Barcelona, and other iconic European
                cities
              </li>
              <li>
                Guided tours of world-renowned museums and historical sites
              </li>
              <li>Scenic train rides through picturesque countryside</li>
              <li>
                Authentic culinary experiences sampling local delicacies in each
                destination
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-african bg-cover bg-center ">
          <div className=" w-[80%] m-auto flex flex-col justify-center  py-[30px]">
            <div className="title">
              <h1
                className="text-center font-bold text-[25px]"
                data-aos="zoom-in"
              >
                Safari Expedition in Africa
              </h1>
              <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
            </div>
            <p className="text-[20px] my-3">
              Embark on a thrilling safari expedition across the African
              savannah, where you'll encounter majestic wildlife in their
              natural habitat. Highlights include:
            </p>
            <ul className="text-[20px]">
              <li>
                Game drives through famous national parks like Serengeti and
                Maasai Mara
              </li>
              <li>
                Close encounters with the Big Five: lions, elephants, buffalos,
                leopards, and rhinos
              </li>
              <li>
                Bush walks led by expert guides to explore the smaller wonders
                of the savannah
              </li>
              <li>
                Luxurious accommodations in tented camps with all modern
                amenities
              </li>
            </ul>
          </div>
        </div>
        <Contact></Contact>
        <div className="md:w-[80%] w-[90%] m-auto">
          <FAQ></FAQ>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Service;
