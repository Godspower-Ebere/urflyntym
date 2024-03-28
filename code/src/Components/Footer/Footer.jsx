import React from "react";
import {
  FaAddressBook,
  FaArrowUp,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
export const Footer = () => {
  const date = new Date();
  return (
    <div
      className="relative h-[100%] w-full bg-gray-900 text-white"
      style={{ backgroundImage: "none" }}
    >
      <div className=" w-[80%] m-auto flex  py-[30px]">
        <div className="w-full ">
          <div className="links mb-10 flex md:justify-between flex-col md:flex-row items-center  w-full">
            <img
              src={logo}
              alt="Waitech Computer Engineering"
              className="w-[80px] h-[80px] mb-5"
            />
            <ul>
              <h1 className="font-bold mb-2 text-center md:text-left hover:text-orange-200 text-[20px]">
                Contact Us{" "}
              </h1>
              <li className="hover:text-orange-200 mb-2  md:items-center">
                <b>Abuja Branch: &nbsp; </b> Plot 242, Nicon Plaza, Muhammed
                Buhari Way Central Business District, Fct Abuja
              </li>
              <li className="hover:text-orange-200 mb-2  md:items-center">
                <b className="flex">Lagos Branch:&nbsp; </b> No 5 Temitope
                Street off Governors Road, Alimosho Lagos.
              </li>
              <li className="hover:text-orange-200 mb-2 flex md:items-center">
                <FaPhone></FaPhone>&nbsp; +234 802 2416 111, +234 803 2614 199
              </li>
              <li className="hover:text-orange-200 mb-2 flex md:items-center">
                <AiFillMail></AiFillMail>&nbsp; Urflyntym@gmail.com
              </li>
            </ul>
            <div>
              <h1 className="font-bold mb-2 hover:text-orange-200 text-[20px]">
                Social Media
              </h1>
              <div className="flex text-[25px] justify-between">
                <FaFacebook></FaFacebook>
                <FaTwitter></FaTwitter>
                <FaLinkedin></FaLinkedin>
                <FaInstagram></FaInstagram>
              </div>
            </div>
          </div>
          <p className="text-center">
            © Copyright {date.getFullYear()}. UrFlyntym Travels & Tours Powered
            by <b>Godspower</b>
          </p>
        </div>
      </div>
    </div>
  );
};
