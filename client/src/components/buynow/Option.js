import React, { useContext } from "react";
import { LoginContext } from "../context/ContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { server } from "../../server";

const Option = ({ id, get }) => {
  const { account, setAccount } = useContext(LoginContext);

  const removeData = async (id) => {
    try {
      const response = await fetch(`${server}/remove/${id}`, {
        method: "DELETE",
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

      get();

      toast.success("Item removed from cart");
    } catch (error) {
      console.log("Error removing item from cart:", error);
      toast.error("Error removing item from cart");
    }
  };

  return (
    <div className="add_remove_select" key={id}>
      <select name="" id="">
        {[1, 2, 3, 4].map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
      <p onClick={() => removeData(id)} style={{ cursor: "pointer" }}>
        Delete
      </p>
      <span>|</span>
      <p className="forremovemedia">Save For Later</p>
      <span>|</span>
      <p className="forremovemedia">See More Like This</p>
    </div>
  );
};

export default Option;
