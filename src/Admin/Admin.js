import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Admin.css"
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = ({ users }) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const getEmail = localStorage.getItem("adminEmail")
  const getPassword = localStorage.getItem("adminPassword")
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
      e.preventDefault()
      if(email==="abhi@gmail.com" && password==="12345"){
        navigate("/users")  
      }
      else{
        toast.error('Please Provide Email or Password', {
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
  }
  return (
    <>
      
      <div className="main-container">
        <h1 className="contact-head">ADMIN LOGIN</h1>
        <div className="contact-container">
          <div className="contact">
            <form action="" name="submit-to-google-sheet"> 
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
                SEND
              </button>
            </form>
            <p style={{color:"white"}}>admin email: abhi@gmail.com</p>
            <p style={{color:"white"}}>admin password: 12345</p>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer/>
    </>
  );
};
export default Admin;
