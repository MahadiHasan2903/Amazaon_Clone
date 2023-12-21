import { Divider } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/Signup.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { server } from "../../server";

const Signup = () => {
  const navigate = useNavigate();
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${server}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(udata),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful");
        navigate("/login");
      } else {
        toast.error(data.error || "Registration failed");
      }
    } catch (error) {
      console.log("Error during registration:", error);
      toast.error("An error occurred during registration");
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="fname"
                onChange={adddata}
                value={udata.fname}
                id="name"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={udata.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="number"
                name="mobile"
                onChange={adddata}
                value={udata.mobile}
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={udata.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Password again</label>
              <input
                type="password"
                name="cpassword"
                onChange={adddata}
                value={udata.cpassword}
                id="passwordg"
              />
            </div>
            <button type="submit" className="signin_btn" onClick={senddata}>
              Continue
            </button>

            <Divider />

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
