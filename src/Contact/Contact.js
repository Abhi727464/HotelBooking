import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Contact = ({
  name,
  email,
  password,
  handleSubmit,
  setName,
  setEmail,
  setPassword,
}) => {
  const navigate = useNavigate()
  const handleAdmin=()=>{
    navigate("/admin")
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="main-container">
        <h1 className="contact-head">SIGN UP</h1>
        <div className="contact-container">
          <div className="contact">
            <form action="" name="submit-to-google-sheet">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                required
              />
              <button
                class="btn-hover color-9"
                onClick={handleSubmit}
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white", fontSize: "14px" }}>
            Click here if you are admin{" "}
            <button
              class="btn-hover color-9"
              onClick={handleAdmin}
              type="submit"
              style={{ width: "80px", height: "30px" }}
            >
              Login
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
