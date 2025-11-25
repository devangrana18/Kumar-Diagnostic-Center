import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide">
          Kumar Diagnostic
        </h1>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul
          className={`md:flex md:items-center absolute md:static bg-blue-600 w-full left-0 md:w-auto transition-all duration-300 
          ${open ? "top-16" : "top-[-300px]"}`}
        >
          <li className="md:ml-6 my-2 md:my-0">
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li className="md:ml-6 my-2 md:my-0">
            <Link to="/services" className="hover:text-gray-200">Services</Link>
          </li>
          <li className="md:ml-6 my-2 md:my-0">
            <Link to="/branches" className="hover:text-gray-200">Branches</Link>
          </li>
          <li className="md:ml-6 my-2 md:my-0">
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </li>
           <li className="md:ml-6 my-2 md:my-0">
            <Link to="/about" className="hover:text-gray-200">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
