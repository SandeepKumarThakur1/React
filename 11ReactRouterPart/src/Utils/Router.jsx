import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Router;
