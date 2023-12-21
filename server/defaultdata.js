const productdata = require("./constant/Productdata");
const Products = require("./models/productSchema");

const DefaultData = async () => {
  try {
    await Products.deleteMany({});
    const storeData = await Products.insertMany(productdata);
    console.log(storeData);
  } catch (error) {
    console.log("Error occurred during DefaultData:", error);
  }
};

module.exports = DefaultData;
