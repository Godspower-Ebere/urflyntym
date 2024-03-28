import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero flex w-[100%] h-[100vh] justify-center flex-col items-center">
        <h1 className="text-[60px] font-bold">404 Error</h1>
        <p className="text-[30px] mb-5">Page Not Found</p>
        <button className=" h-[50px] px-[10px] font-bold text-white bg-orange-500 rounded-lg">
          <Link to="/">Go to homepage</Link>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
