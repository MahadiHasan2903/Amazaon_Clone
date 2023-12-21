import { server } from "../../../server";

export const getProducts = async (dispatch) => {
  try {
    const data = await fetch(`${server}/getproducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await data.json();
    // console.log(res);
    dispatch({ type: "SUCESS_GET_PRODUCTS", payload: res });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};
