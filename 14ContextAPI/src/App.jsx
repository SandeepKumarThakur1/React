import React from "react";
import { Routes, Route, NavLink } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import User from "./Components/User";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div>
      <nav className="flex justify-center items-center gap-10 py-5">
        <NavLink to="/" className="text-lg font-semibold">
          Home
        </NavLink>
        <NavLink to="/about" className="text-lg font-semibold">
          About
        </NavLink>
        <NavLink to="/user" className="text-lg font-semibold">
          User
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
