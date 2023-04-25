import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiOutlineLogout } from "react-icons/ai";
import {BsCheckCircleFill, BsFacebook} from "react-icons/bs"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate= useNavigate()
  const logOut= ()=>{
    navigate("/")
  }
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>Easy Hotels</h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink index to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Hotels</NavLink>
            </li>
            <li>
              <AiOutlineLogout style={{fontSize:"25px",fontWeight:"bold",cursor:"pointer"}} onClick={logOut}/>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <AiFillYoutube/>
            </li>
            <li>
              <BsFacebook/>
            </li>
            <li>
              <AiFillInstagram/>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;