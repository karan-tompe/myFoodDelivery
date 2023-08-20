import React from "react";
import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import ResCard from "./ResCard";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurant/:id" element={<ResCard />} />
      </Routes>
    </div>
  );
};

export default Routing;
