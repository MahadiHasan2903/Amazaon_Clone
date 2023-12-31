const products = [];

export const getProductsReducer = (state = { products }, action) => {
  switch (action.type) {
    case "SUCESS_GET_PRODUCTS":
      return { products: action.payload };
    case "FAIL_GET_PRODUCTS":
      return { products: action.payload };
    default:
      return state;
  }
};
