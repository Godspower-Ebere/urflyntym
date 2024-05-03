import React, { useEffect } from "react";
import Animation from "../Components/Animation/Animation";
import Navbar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact/Contact";
import Aos from "aos";
import FAQ from "../Components/FAQ/FAQ";
import { Footer } from "../Components/Footer/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";

const Contacts = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-about bg-fixed w-[100%] h-[100%] bg-cover bg-center">
      <Animation></Animation>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-white form m-auto w-[95%] md:w-[80%] flex justify-center flex-col items-center">
        <div className="title">
          <h1 className="text-center font-bold text-[40px]" data-aos="zoom-in">
            Contact Us
          </h1>
          <hr className="mt-3 border-orange-500 m-auto border-[3px] w-[100px] " />
        </div>

        <p className="text-[20px] font-bold">
          Please fill out the form below to send us your inquiries or messages.
          We'll get back to you as soon as possible.
        </p>
        <ContactForm></ContactForm>
        <div className="faq w-full m-auto">
          <FAQ></FAQ>
        </div>
      </div>
      <div className="content text-white flex justify-center  w-full items-center h-[100%]">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contacts;
