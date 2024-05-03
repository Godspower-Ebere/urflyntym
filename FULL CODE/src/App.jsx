import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Service from "./Pages/Service";
import Contact from "./Pages/Contacts";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
