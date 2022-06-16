const BigPromise = require("./bigPromise");
const Pharmacy = require("../models/pharmacyModel");
const Order = require("../models/orderModel");
const Notification = require("../models/notificationModel");
const customError = require("../utils/customError");
const jwt = require("jsonwebtoken");
const { UserNotification } = require("../utils/getNotification");

exports.isPharmacyLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.json({
      success: false,
      message: "Please Login as Pharmacy First",
    });

  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const pharmacy = await Pharmacy.findById(decode.id)
    .populate("inventory.medicine")
    .populate("orders");

  const pharmacyId = pharmacy._id;

  const orders = await Order.find({ pharmacyId })
    .populate("medicines.medicine")
    .populate("address")
    .populate("pharmacy");

  pharmacy.orders = orders;

  const allNotifications = await Notification.find()
    .populate("fromUser")
    .populate("order")
    .populate("toUser");

  const userNotification = UserNotification(pharmacy._id, allNotifications);

  pharmacy.notification = userNotification;

  req.pharmacy = pharmacy;

  next();
};
