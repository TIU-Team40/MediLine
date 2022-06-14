const BigPromise = require("./bigPromise");
const User = require("../models/userModel");
const Order = require("../models/orderModel");
const Notification = require("../models/notificationModel");
const customError = require("../utils/customError");
const jwt = require("jsonwebtoken");
const { UserNotification } = require("../utils/getNotification");

exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.json({ success: false, message: "Please Login First" });

  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await User.findById(decode.id)
    .populate("cart.medicine")
    .populate("cart.pharmacy")
    .populate("addresses")
    .populate("orders");

  const userId = user._id;

  const orders = await Order.find({ userId })
    .populate("medicines.medicine")
    .populate("address")
    .populate("pharmacy");

  user.orders = orders;

  // const allNotifications = await Notification.find()
  //   .populate("fromUser")
  //   .populate("post")
  //   .populate("toUser");

  // const userNotification = UserNotification(user._id, allNotifications);

  // user.notification = userNotification;

  req.user = user;

  next();
};

exports.isUserVerified = async (req, res, next) => {
  const code = req.cookies.userVerify;

  if (!code) return res.json({ success: false, message: "Invalid Code !" });

  const user = await User.findOne({
    code,
    forgotPasswordExpiry: { $gt: Date.now() },
  })
    .select("+password")
    .populate("cart.medicine")
    .populate("cart.pharmacy")
    .populate("addresses")
    .populate("orders");

  const userId = user._id;

  const orders = await Order.find({ userId })
    .populate("medicines.medicine")
    .populate("address")
    .populate("pharmacy");

  user.orders = orders;

  req.user = user;

  next();
};

exports.isRoleAdmissible = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(400).send("User not admissible for this information.");

    next();
  };
};
