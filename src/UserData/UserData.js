import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./UserData.css";
import { toast } from "react-toastify";

const UserData = ({ hotels, setHotels }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/admin");
  };

  const handleComplete = (id) => {
    let completed = hotels.map((hotel) => {
      if (hotel.id === id) {
        setStatus(true);
        toast.success("Hotel Booked😄");
      }
    });
    // localStorage.setItem("todolist", JSON.stringify(completed));
    setHotels(completed);
    localStorage.setItem("hotels",JSON.stringify(hotels))
  };

  const handleDelete = (id) => {
    setHotels(hotels.filter((item) => item.hotel_id !== id));
  };
  return (
    <div className="container">
      <div className="main-container">
        <h1 className="newuser">NEW BOOKINGS</h1>
        <div className="view-container">
          <div className="table-responsive">
            <table className="table">
              <thead className="tablehead">
                <tr className="heading">
                  <th>Hotel Name</th>
                  <th>Check In Time</th>
                  <th>Check Out Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {hotels?.map((user) => {
                  return (
                    <tr key={user.hotel_id}>
                      <td>{user.hotel_name}</td>
                      <td>{user.checkin}</td>
                      <td>{user.checkout}</td>
                      <td>
                        {/* <button
                          className="confirmbtn"
                          onClick={() => handleComplete(user.hotel_id)}
                        >
                          {status ? "booked" : "confirm"}
                        </button> */}
                        <button
                          onClick={() => handleDelete(user.hotel_id)}
                          className="deletebtn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            margin: "10px auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button class="btn-hover color-9" onClick={logOut} type="submit">
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserData;
