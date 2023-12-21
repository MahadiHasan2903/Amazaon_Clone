const products = require("../models/productSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

//Registration Controller
const registrationController = async (req, res) => {
  const { fname, email, mobile, password, cpassword } = req.body;

  if (!fname || !email || !mobile || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the details" });
  }

  try {
    const preuser = await User.findOne({ email: email });

    if (preuser) {
      return res
        .status(422)
        .json({ error: "This email is already registered" });
    }

    if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    }

    const newUser = new User({
      fname,
      email,
      mobile,
      password,
      cpassword,
    });

    const storedUser = await newUser.save();

    return res.status(201).json(storedUser);
  } catch (error) {
    console.error("Error occurred during registration:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = registrationController;

//Login Controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill in all the details" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = await user.generateAuthToken();

    res.cookie("amazon", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

//logout controller
const logoutController = async (req, res) => {
  try {
    req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
      return curelem.token !== req.token;
    });

    await req.rootUser.save();

    res.clearCookie("eccomerce", { path: "/" });

    res.status(200).json({ message: "User logged out successfully" });
    console.log("User logout");
  } catch (error) {
    console.error("Error occurred during logout:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all products
const getProductsController = async (req, res) => {
  try {
    const productsData = await products.find();
    res.status(200).json(productsData);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get individual product by ID
const getproductoneController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const individual = await products.findOne({ _id: id });

    if (!individual) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(individual);
  } catch (error) {
    console.error(
      "Error occurred while fetching individual product:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addtocartController = async (req, res) => {
  try {
    const { id } = req.params;
    const cartItem = await products.findOne({ _id: id });

    if (!cartItem) {
      return res.status(404).json({ error: "Product not found" });
    }

    const user = await User.findOne({ _id: req.userID });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the product is already in the user's cart
    const isAlreadyInCart = user.carts.some(
      (item) => item._id.toString() === id
    );

    if (isAlreadyInCart) {
      return res.status(400).json({ error: "Product is already in cart" });
    }

    // Add the product to the cart
    user.carts.push(cartItem);
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error("Error while adding to cart:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

//get cartdetils controller
const cartDetailsController = async (req, res) => {
  try {
    const buyuser = await User.findOne({ _id: req.userID });

    if (!buyuser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(buyuser);
  } catch (error) {
    console.error("Error occurred while fetching cart details:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// chehck  user is login or not  || get valid user
const validationController = async (req, res) => {
  try {
    const validUser = await User.findOne({ _id: req.userID });

    if (!validUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(validUser);
  } catch (error) {
    console.error("Error occurred during user validation:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//Remove caat item controller
const deletecartItemController = async (req, res) => {
  try {
    const { id } = req.params;
    const itemIdToDelete = new mongoose.Types.ObjectId(id);

    // Find the user
    const user = await User.findOne({ _id: req.userID });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Filter out the item with matching _id from user's cart
    user.carts = user.carts.filter(
      (cartItem) => cartItem._id.toString() !== itemIdToDelete.toString()
    );

    // Save the updated user document
    await user.save();

    console.log("Item removed from cart");

    res.status(200).json(user);
  } catch (error) {
    console.error("Error occurred while removing cart item:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = deletecartItemController;

module.exports = {
  getProductsController,
  getproductoneController,
  registrationController,
  loginController,
  logoutController,
  addtocartController,
  cartDetailsController,
  validationController,
  deletecartItemController,
};
