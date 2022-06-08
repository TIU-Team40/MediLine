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

// Routes

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
