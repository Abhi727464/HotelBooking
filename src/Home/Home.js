import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <Navbar />
      <div className="container hero-section">
        <div className="main-text">
          <h2 className="main-head">GET 50% OFF FOR ALL<br /> HOTEL BOOKING</h2>
          <div className="btn-container">
            <button
              class="btn-hover color-3"
              onClick={() => navigate("/about")}
            >
              BOOK NOW
            </button>
            {/* <button
              class="btn-hover color-9"
              onClick={() => navigate("/contact")}
            >
              CONTACT US
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
