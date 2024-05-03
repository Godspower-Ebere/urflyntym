import { Tilt } from "react-tilt";
import Aos from "aos";
import { useEffect } from "react";
import { FaMailBulk, FaAddressBook, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: false, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container px-10 md:px-20 my-10">
      <div className="title">
        <h1 className="text-center font-bold text-[30px]" data-aos="zoom-in">
          Contact Us
        </h1>
        <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
      </div>
      <div className=" mt-10 text flex justify-center gap-5 md:gap-0 md:justify-between flex-wrap">
        <Tilt
          options={defaultOptions}
          style={{
            height: 250,
            width: 250,
          }}
        >
          <div className="w-full h-full rounded-xl border bg-black text-center py-10">
            <FaPhone
              size={60}
              className="text-orange-500 m-auto mb-10"
            ></FaPhone>
            <div className="content">
              <ul className="text-[20px]">
                <li>+234 802 2416 111</li>
                <li>+234 803 2614 199</li>
              </ul>
            </div>
          </div>
        </Tilt>

        <Tilt
          options={defaultOptions}
          style={{
            height: 250,
            width: 250,
          }}
        >
          <div className="w-full h-full rounded-xl border bg-black text-center py-10">
            <AiFillMail
              size={60}
              className="text-orange-500 m-auto mb-10"
            ></AiFillMail>
            <div className="content">
              <p className="text-[20px]">Urflyntym@gmail.com</p>
            </div>
          </div>
        </Tilt>
        <Tilt
          options={defaultOptions}
          style={{
            height: 250,
            width: 250,
          }}
        >
          <div className="w-full h-full rounded-xl border bg-black text-center py-8">
            <FaAddressBook
              size={60}
              className="text-orange-500 m-auto mb-6"
            ></FaAddressBook>
            <div className="content">
              <p className="text-[20px]">
                <b>Abuja Branch:</b> Plot 242, Nicon Plaza, Muhammed Buhari Way
                Central Business District, Fct Abuja
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt
          options={defaultOptions}
          style={{
            height: 250,
            width: 250,
          }}
        >
          <div className="w-full h-full rounded-xl border bg-black text-center py-8">
            <FaAddressBook
              size={60}
              className="text-orange-500 m-auto mb-6"
            ></FaAddressBook>
            <div className="content">
              <p className="text-[20px]">
                <b>Lagos Branch:</b> No 5 Temitope Street off Governors Road,
                Alimosho Lagos.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};
export default Contact;
