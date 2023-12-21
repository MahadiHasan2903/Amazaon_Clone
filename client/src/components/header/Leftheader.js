import React, { useContext } from "react";
import "../../styles/Leftheader.css";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "../context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";

const Leftheader = ({ logClose }) => {
  const imgd = "/bangladesh.png";
  const { account, setAccount } = useContext(LoginContext);

  return (
    <>
      <div className="lefttheader">
        <div className="left_nav">
          {account ? (
            <Avatar className="avtar2">{account.fname[0].toUpperCase()}</Avatar>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
          {account ? <h4>{account.fname.toUpperCase()}</h4> : ""}
        </div>
        <div className="nav_btn" onClick={() => logClose()}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop By Category</NavLink>
          <Divider style={{ width: "100%", marginLeft: -20 }} />
          <NavLink to="/" style={{ marginTop: 10 }}>
            Today's Deal
          </NavLink>
          {account ? (
            <NavLink to="/buynow">Your Order</NavLink>
          ) : (
            <NavLink to="/login">Your Order</NavLink>
          )}
          <Divider style={{ width: "100%", marginLeft: -20 }} />
          <div className="flag">
            <NavLink to="/" style={{ marginTop: 14 }}>
              Settings
            </NavLink>
            <img
              src={imgd}
              alt="bd flag"
              style={{ width: 35, marginLeft: 10 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftheader;
