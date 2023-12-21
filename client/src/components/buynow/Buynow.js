import React, { useEffect, useState } from "react";
import "../../styles/Buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";
import Empty from "./Empty";
import { server } from "../../server";
import { toast } from "react-toastify";

const Buynow = () => {
  const [cartdata, setCartdata] = useState([]);

  const getCartData = async () => {
    try {
      const response = await fetch(`${server}/cartdetails`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);

      if (!response.ok) {
        throw new Error(
          `Fetch error: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      setCartdata(data.carts);

      setCartdata(data.carts);
    } catch (error) {
      console.log("Error getting cart data:", error);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <>
      {cartdata.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="leftbuyprice">Price</span>
              <Divider />

              {cartdata.map((item) => (
                <React.Fragment key={item._id}>
                  <div className="item_containert">
                    <img src={item.detailUrl} alt="imgitem" />
                    <div className="item_details">
                      <h3>{item.title.longTitle}</h3>
                      <h3>{item.title.shortTitle}</h3>
                      <h3 className="diffrentprice">₹{item.price.cost}.00</h3>
                      <p className="unusuall">Usually dispatched in 8 days.</p>
                      <p>Eligible for FREE Shipping</p>
                      <img
                        src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                        alt="logo"
                      />
                      <Option id={item._id} get={getCartData} />
                    </div>
                    <h3 className="item_price">₹{item.price.cost}.00</h3>
                  </div>
                  <Divider />
                </React.Fragment>
              ))}

              <Subtotal iteam={cartdata} />
            </div>
            <Right iteam={cartdata} />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Buynow;
