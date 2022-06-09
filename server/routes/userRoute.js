const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
  forgotPassword,
  verifyForgotCode,
  passwordReset,
  userDashboard,
  updatePassword,
  updateUser,
  addToCart,
  deleteFromCart,
  updateCartQuantity,
  emptyCart,
  addAddress,
  editAddress,
  deleteAddress,
  createOrder,
  cancelOrder,
  adminUsers,
  adminGetUser,
  adminUpdateUser,
  adminDeleteUser,
} = require("../controllers/userController");

const {
  isLoggedIn,
  isUserVerified,
  isRoleAdmissible,
} = require("../middlewares/user");

// Login Routes
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);

// Forgot Password Routes
router.route("/forgotPassword").post(forgotPassword);
router.route("/verifyCode").post(verifyForgotCode);
router.route("/password/reset").post(isUserVerified, passwordReset);

// Logged In user routes
router.route("/userdashboard").get(isLoggedIn, userDashboard);
router.route("/password/update").post(isLoggedIn, updatePassword);
router.route("/user/update").post(isLoggedIn, updateUser);

// Cart Routes
router
  .route("/user/cart")
  .post(isLoggedIn, addToCart)
  .delete(isLoggedIn, deleteFromCart)
  .put(isLoggedIn, updateCartQuantity);
router.route("/user/emptycart").delete(isLoggedIn, emptyCart);

// Address Route
router.route("/user/address").post(isLoggedIn, addAddress);
router
  .route("/user/address/:addressId")
  .post(isLoggedIn, editAddress)
  .delete(isLoggedIn, deleteAddress);

// Order Route
router
  .route("/user/order")
  .post(isLoggedIn, createOrder)
  .delete(isLoggedIn, cancelOrder);

// Admin Routes
router
  .route("/admin/users")
  .get(isLoggedIn, isRoleAdmissible("admin"), adminUsers);

router
  .route("/admin/user/:id")
  .get(isLoggedIn, isRoleAdmissible("admin"), adminGetUser)
  .put(isLoggedIn, isRoleAdmissible("admin"), adminUpdateUser)
  .delete(isLoggedIn, isRoleAdmissible("admin"), adminDeleteUser);

module.exports = router;
