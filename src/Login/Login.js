import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import background from "../../assets/background.png";
import { textAlign } from "@mui/system";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("usergunjan");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/home");
          toast.success("Log In Successfully", {
            position: "top-center",
          });
        }
      }
    }
  };

  return (
    <>
      <div
       className="container d-flex justify-content-between align-items-center"
      >
        <>
          <div
            className="row"
            style={{
              width:"30%",
              height:"50vh",
              background:"#D3D3D3",
              color: "black",
              borderRadius: "20px",
              boxShadow: "5px 5px 5px gray",
              margin:"10% auto"
              
            }}
          >
            <h1 className="text-center col-lg-12 mt-3">Log In</h1>
            <Form style={{ padding: "20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-4 text-center"
                onClick={addData}
                style={{
                  background: "#32CD32",
                  margin:"2px auto",
                  color:"black",
                  border:"none"
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3 text-center">
              Don't Have an Account{" "}
              <span>
                <NavLink to="/register">Register</NavLink>
              </span>{" "}
            </p>
          </div>
        </>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
