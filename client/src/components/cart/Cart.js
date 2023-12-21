import React, { useContext, useEffect, useState } from "react";
import "../../styles/Cart.css";
import { Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { server } from "../../server";

const Cart = () => {
  const { account, setAccount } = useContext(LoginContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [individualData, setIndividualData] = useState(null);

  const getIndividualData = async () => {
    try {
      const response = await fetch(`${server}/getproductsone/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(
          `Fetch error: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      setIndividualData(data);
    } catch (error) {
      console.log("Error getting individual data:", error);
    }
  };

  useEffect(() => {
    getIndividualData();
  }, [id]);

  const addToCart = async () => {
    try {
      const response = await fetch(
        `${server}/addtocart/${individualData._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        if (responseData.error === "Product is already in cart") {
          toast.error("Product is already in cart");
        } else {
          throw new Error(
            `Fetch error: ${response.status} ${response.statusText}`
          );
        }
      } else {
        toast.success("Item added to cart");
      }
    } catch (error) {
      console.log("Error adding item to cart:", error);
      toast.error("Error adding item to cart");
    }
  };

  return (
    <div className="cart_section">
      {individualData ? (
        Object.keys(individualData).length && (
          <div className="cart_container">
            <div className="left_cart">
              <img src={individualData.detailUrl} alt="cart" />
              <div className="cart_btn">
                <button className="cart_btn1" onClick={addToCart}>
                  Add to Cart
                </button>
                <button className="cart_btn2">Buy Now</button>
              </div>
            </div>
            <div className="right_cart">
              <h3>{individualData.title.shortTitle}</h3>
              <h4>{individualData.title.longTitle}</h4>
              <Divider />
              <p className="mrp">
                M.R.P. : <del>₹{individualData.price.mrp}</del>
              </p>
              <p>
                Deal of the Day :{" "}
                <span style={{ color: "#B12704" }}>
                  ₹{individualData.price.cost}.00
                </span>
              </p>
              <p>
                You save :{" "}
                <span style={{ color: "#B12704" }}>
                  ₹{individualData.price.mrp - individualData.price.cost} (
                  {individualData.price.discount})
                </span>
              </p>

              <div className="discount_box">
                <h5>
                  Discount :{" "}
                  <span style={{ color: "#111" }}>
                    {individualData.discount}
                  </span>
                </h5>
                <h4>
                  FREE Delivery :{" "}
                  <span style={{ color: "#111", fontWeight: "600" }}>
                    Oct 8 - 21
                  </span>{" "}
                  Details
                </h4>
                <p style={{ color: "#111" }}>
                  Fastest delivery:{" "}
                  <span style={{ color: "#111", fontWeight: "600" }}>
                    Tomorrow 11AM
                  </span>
                </p>
              </div>
              <p className="description">
                About the Item :{" "}
                <span
                  style={{
                    color: "#565959",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "0.4px",
                  }}
                >
                  {individualData.description}
                </span>
              </p>
            </div>
          </div>
        )
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      )}
    </div>
  );
};
export default Cart;
