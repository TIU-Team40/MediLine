const express = require("express");
const router = express.Router();
const {
  getNotifications,
  createNotification,
  deleteAllNotification,
  updateNotification,
} = require("../controllers/notificationController");
const { isLoggedIn } = require("../middlewares/user");
const { isPharmacyLoggedIn } = require("../middlewares/pharmacy");

router
  .route("/notification")
  .get(getNotifications)
  .post(isPharmacyLoggedIn, updateNotification)
  .delete(isPharmacyLoggedIn, deleteAllNotification);
router.route("/notification/create").post(isLoggedIn, createNotification);

module.exports = router;
