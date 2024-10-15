import React from "react";
import { FaPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="w-11/12   text-white py-5  flex justify-between items-center h-16">
      <button className=" flex gap-2">
        <FaPlane size={20} /> Find Flight
      </button>
      <img src={logo} alt="explorica" className="w-24 ml-24" />
      {/* login Singup */}
      <div className="flex justify-center items-center gap-5">
        <Link
          to={`/auth/login`}
          className=" px-5 py-2 font-bold w-20 rounded-md"
        >
          Login
        </Link>
        <Link
          to={`/auth/signup`}
          className="px-5 py-2 bg-white text-zinc-800  rounded-md"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Header;
