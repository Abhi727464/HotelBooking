import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Home from "./Home/Home";
import About from "./About/About";
import Admin from "./Admin/Admin";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import UserData from "./UserData/UserData";
import { ToastContainer, toast } from "react-toastify";
import { HotelData } from "./HotelData";

function App() {
  const [bookedHotel, setBookedHotel] = useState([]);
  const [booked, setBooked] = useState("Book Now");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const getData = () => {
    let data = localStorage.getItem("bookedHotel") || [];
    //  if(data){
    //   return JSON.parse(data || [])
    //  }
    console.log(data);
    return data && data.length ? JSON.parse(data) : [];
  };

  const getHotelData = () => {
    let data = localStorage.getItem("bookedHotel") || [];

    console.log(data);
    return data && data.length ? JSON.parse(data) : [];
  };
  const [hotels, setHotels] = useState(getHotelData());
  console.log(hotels);
  const [users, setUsers] = useState(getData());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      toast.error("Please Provide Name");
    } else if (email.length === 0 || !email.includes("@")) {
      toast.error("Please Provide correct email");
    } else if (password.length === 0) {
      toast.error("Please type password");
    } else {
      console.log("btn clicked");
      let user = { name, email, password };
      setUsers([...users, user]);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/home", { replace: true });
      toast.success("Sign Up Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleBook = (item) => {
    let isPresent = false;

    bookedHotel.forEach((hotel) => {
      if (item.hotel_id === hotel.hotel_id) {
        isPresent = true;

        toast.error("Alraedy Booked");
      }
    });
    if (isPresent) {
      return;
    } else {
      setBookedHotel([...bookedHotel, item]);
      toast.success("Hotel Booked");
      localStorage.setItem("bookedHotel", JSON.stringify(bookedHotel || []));
    }
  };

  useEffect(() => {
   
  }, [bookedHotel]);
  console.log(bookedHotel);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Contact
              name={name}
              email={email}
              password={password}
              city={city}
              handleSubmit={handleSubmit}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          }
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/admin" element={<Admin users={users} />}></Route>
        <Route
          path="/about"
          element={<About handleBook={handleBook} bookedHotel={bookedHotel} />}
        ></Route>
        <Route
          path="/users"
          element={
            <UserData users={users} hotels={hotels} setHotels={setHotels} />
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
