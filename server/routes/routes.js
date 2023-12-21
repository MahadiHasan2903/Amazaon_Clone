const express = require("express");
const {
  registrationController,
  loginController,
  logoutController,
  validationController,
  getProductsController,
  getproductoneController,
  addtocartController,
  cartDetailsController,
  deletecartItemController,
} = require("../controller/Controller");

const authenticate = require("../middleware/authenticate");

const router = new express.Router();

// Routes

// Registration
router.post("/register", registrationController);

// Login
router.post("/login", loginController);

// Logout
router.get("/logout", authenticate, logoutController);

// Validate user
router.get("/validuser", authenticate, validationController);

// Get products
router.get("/getproducts", getProductsController);

// Get individual product data
router.get("/getproductsone/:id", getproductoneController);

// Add item to cart (protected by authenticate)
router.post("/addtocart/:id", authenticate, addtocartController);

// Get cart items (protected by authenticate)
router.get("/cartdetails", authenticate, cartDetailsController);

// Remove item from cart (protected by authenticate)
router.delete("/remove/:id", authenticate, deletecartItemController);

module.exports = router;
