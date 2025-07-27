import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-6 py-3 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          📰 NEWSHUB
        </Link>
        <div className="space-x-4 text-sm">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/about" className="hover:text-red-500">About</Link>
          <Link to="/contact" className="hover:text-red-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
