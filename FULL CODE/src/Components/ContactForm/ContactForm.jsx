import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d724p49", "template_s37yrna", form.current, {
        publicKey: "iiu2uyLyeNi5P6Pob",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <div className="md:w-[50%] w-full mx-auto p-4 text-[20px]">
      <ToastContainer />
      <form
        className="p-6 border border-gray-300 rounded-lg shadow-lg bg-blue-900 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-4">
          <label className="block mb-1 text-white">Name</label>
          <input
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Email</label>
          <input
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Phone No</label>
          <input
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            name="phone"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Message</label>
          <textarea
            className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            name="message"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="px-10 py-2 bg-orange-500 text-[20px] text-black font-bold rounded-md hover:text-white  focus:outline-none">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
