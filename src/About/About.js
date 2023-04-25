import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import axios from "axios";
import Footer from "../Footer/Footer";
import { HotelData } from "../HotelData";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";
const About = ({handleBook}) => {
 
  return (
    <>
      <Navbar />
      <div className="card-container">
        <h1>OUR FITNESS FREAKS</h1>
        <div className="cards">
          {HotelData.map((user) => {
            return (
              <div class="card" key={user}>
                <div className="img-div">
                  <img src={user.photo1} alt="Avatar" />
                </div>

                <div class="about-container">
                  <h4>
                    <b>{user.hotel_name.substring(0, 20)}</b>
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5px",
                    }}
                  >
                    <p>
                      {" "}
                      <b>City:</b> {user.city}
                    </p>
                    <p>
                      {" "}
                      <b>Rating:</b> {user.star_rating}
                      <AiFillStar
                        style={{
                          color: "green",
                          paddingTop: "5",
                          fontSize: "17px",
                        }}
                      />
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    <button
                      className="book-btn"
                      onClick={() => handleBook(user)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
