import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ef9d00" : "#fff",
                fontWeight: isActive ? "bold" : "normal",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {({ isActive }) => (
                <span
                  style={{
                    color: isActive ? "#ef9d00" : "#fff",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                >
                  About
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => ({
                color: isActive ? "text-red-500" : "text-black",
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
