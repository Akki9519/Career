import React from "react";

import image from "../Image/Teal Modern Company Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div
        className=" w-96 bg-[#ECE8E2] pl-24 pt-3"
        style={{ height: "1500px" }}
      >
        <img
          src={image}
          alt=""
          className="h-40 rounded-full
"
        />
        <div className="font-extrabold text-2xl mt-10 ">
          <div className="hover:underline">Home</div>
          <Link to="/about">
            <div className="mt-4 hover:underline">About</div>
          </Link>
          <Link to="/Contact">
            <div className="mt-4 hover:underline">Contact Us</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
