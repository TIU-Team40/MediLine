const express = require("express");
const router = express.Router();

const {
  getAllPharmacies,
  signup,
  login,
  logout,
  userDashboard,
  updatePassword,
  updateUser,
  addInventoryItem,
  deleteInventoryItem,
  updateInventoryItem,
} = require("../controllers/pharmacyController");

const { isPharmacyLoggedIn } = require("../middlewares/pharmacy");

// Login Routes
router.route("/").get(getAllPharmacies);
router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);

// Logged In user routes
router.route("/pharmacydashboard").get(isPharmacyLoggedIn, userDashboard);
router.route("/password/update").post(isPharmacyLoggedIn, updatePassword);
router.route("/user/update").post(isPharmacyLoggedIn, updateUser);

// Routes
router
  .route("/inventory")
  .post(isPharmacyLoggedIn, addInventoryItem)
  .delete(isPharmacyLoggedIn, deleteInventoryItem)
  .put(isPharmacyLoggedIn, updateInventoryItem);

module.exports = router;
