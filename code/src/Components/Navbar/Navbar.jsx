import React from "react";
import logo from "../../assets/logo.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const show = () => {
    document.getElementById("parent").style.display = "block";
  };
  const close = () => {
    document.getElementById("parent").style.display = "none";
  };
  return (
    <div className="w-full bg-white shadow-lg p-3 fixed z-50">
      <div className="flex justify-between md:w-[80%] w-full m-auto items-center">
        <Link to="/" className="w-[50%]">
          <img
            src={logo}
            className="cursor-pointer w-[90px] h-[70px] md:w-[120px] md:h-[100px]"
            alt="Waitech Computer Engineering"
          />
        </Link>
        <ul className="md:flex hidden w-[50%] justify-between text-[20px]">
          <li className="flex items-center text-blue-900 hover:text-orange-500 font-bold">
            <AiFillHome></AiFillHome>
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center text-blue-900 hover:text-orange-500 font-bold">
            <FaUser></FaUser>
            <Link to="/about">About Us</Link>
          </li>
          <li className="flex items-center text-blue-900 hover:text-orange-500 font-bold">
            <FaToolbox></FaToolbox>
            <Link to="/service">Services</Link>
          </li>
          <li className="flex items-center text-blue-900 hover:text-orange-500 font-bold">
            <FaPhone></FaPhone>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <AiOutlineMenu
          size={40}
          className="cursor-pointer  h-[60px] md:hidden block"
          onClick={show}
        />
      </div>
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        className=" mobilenav h-[100vh] w-full absolute z-50 top-0 p-5 hidden transition-all"
        id="parent"
      >
        <div className="items h-[100%] bg-white p-10">
          <AiOutlineClose
            size={40}
            className="cursor-pointer float-end"
            onClick={close}
          />
          <ul className=" h-[30%] flex justify-between flex-col text-[20px] mt-[70px]">
            <li className="flex items-center text-gray-600 hover:text-blue-500 font-bold">
              <Link to="/" onClick={close}>
                Home
              </Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-500 font-bold">
              <Link to="/about" onClick={close}>
                About Us
              </Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-500 font-bold">
              <Link to="/service" onClick={close}>
                Services
              </Link>
            </li>
            <li className="flex items-center text-gray-600 hover:text-blue-500 font-bold">
              <Link to="/Contact" onClick={close}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
