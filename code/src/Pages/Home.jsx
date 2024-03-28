import React from "react";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import { About } from "../Components/About/About";
import { Footer } from "../Components/Footer/Footer";
import Animation from "../Components/Animation/Animation";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Animation></Animation>
      <Hero />
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
