import React from "react";
import "./Navbar.scss";
import { assets } from "../../assets/assets";

const Navbar = () => {
   return (
      <div className="navbar">
         <img src={assets.logo} alt="" className="logo" />
         <img src={assets.profile_image} className="profile" alt="" />
      </div>
   );
};

export default Navbar;
