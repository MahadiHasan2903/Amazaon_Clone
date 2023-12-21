import React, { useContext, useState } from "react";
import "../../styles/Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "../context/ContextProvider";

import { server } from "../../server";

const Signin = () => {
  const { account, setAccount } = useContext(LoginContext);
  const navigate = useNavigate();
  const [logdata, setLogdata] = useState({
    email: "",
    password: "",
  });

  const addData = (e) => {
    const { name, value } = e.target;
    setLogdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;
    try {
      const res = await fetch(`${server}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        toast.error("Invalid Details ", {
          position: "top-center",
        });
      } else {
        setAccount(data);
        setLogdata({ email: "", password: "" });
        toast.success("Login Successfully done");
        navigate("/");
      }
    } catch (error) {
      console.log("Error" + error.message);
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
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={addData}
                value={logdata.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={addData}
                value={logdata.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <button type="submit" className="signin_btn" onClick={sendData}>
              Continue
            </button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>
            <NavLink to="/registration">Create your Amazon Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signin;
