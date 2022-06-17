const Pharmacy = require("../models/pharmacyModel");
const Medicine = require("../models/medicineModel");
const Order = require("../models/orderModel");
const Notification = require("../models/notificationModel");
const BigPromise = require("../middlewares/bigPromise");
const cookieToken = require("../utils/pharmacyCookieToken");
const { extend } = require("lodash");
const validator = require("validator");
const { UserNotification } = require("../utils/getNotification");

exports.getAllPharmacies = BigPromise(async (req, res) => {
  const pharmacies = await Pharmacy.find();

  res.status(200).json({
    success: true,
    pharmacies,
  });
});

exports.signup = BigPromise(async (req, res) => {
  const { name, email, password, contactNo, address, pinCode } = req.body;

  if (!name || !email || !password || !contactNo || !address || !pinCode) {
    return res.json({
      success: false,
      message: "All fields are required !!",
    });
  }

  if (!validator.isEmail(email))
    return res.json({
      success: false,
      message: "Enter correct email format.",
    });

  const userAlreadyExist = await Pharmacy.findOne({ email });

  if (userAlreadyExist)
    return res.json({
      success: false,
      message: "Email Already Registered.",
    });

  if (password.length < 6)
    return res.json({
      success: false,
      message: "Password should be of atleast of 6 chars.",
    });

  const pharmacy = await Pharmacy.create(req.body);

  cookieToken(pharmacy, res);
});

exports.login = BigPromise(async (req, res) => {
  const { email, password } = req.body;

  // If field not recived from body.
  if (!email || !password)
    return res.json({
      success: false,
      message: "Email and Password both required",
    });

  const pharmacy = await Pharmacy.findOne({ email })
    .select("+password")
    .populate("inventory.medicine")
    .populate("orders");

  // If pharmacy not present in database.
  if (!pharmacy)
    return res.json({
      success: false,
      message: "User Doesn't exists in the database.",
    });

  // If password doesn't match.
  if (!(await pharmacy.isPasswordValidated(password)))
    return res.json({
      success: false,
      message: "Incorrect Password !!",
    });

  const allNotifications = await Notification.find()
    .populate("fromUser")
    .populate("order")
    .populate("toUser");

  const userNotification = UserNotification(pharmacy._id, allNotifications);

  pharmacy.notifications = userNotification;

  const pharmacyId = pharmacy._id;

  const orders = await Order.find({ pharmacyId })
    .populate("medicines.medicine")
    .populate("address")
    .populate("pharmacy");

  pharmacy.orders = orders;

  cookieToken(pharmacy, res);
});

exports.logout = BigPromise(async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logout Success",
  });
});

//User loggedIn Controllers
exports.userDashboard = BigPromise(async (req, res) => {
  const pharmacy = req.pharmacy;

  res.status(200).json({
    success: true,
    pharmacy,
  });
});

exports.updatePassword = BigPromise(async (req, res) => {
  const pharmacy = await Pharmacy.findById(req.pharmacy.id).select("+password");

  const isPasswordValidated = await pharmacy.isPasswordValidated(
    req.body.oldPassword
  );

  if (!isPasswordValidated)
    res.json({
      success: false,
      message: "Enter correct old password.",
    });

  const { password, confirmPassword } = req.body;

  if (!password || !confirmPassword)
    return res.json({
      success: false,
      message: "Password and ConfirmPassword both fields are required",
    });

  if (password !== confirmPassword)
    res.json({
      success: false,
      message: "Password and Confirm Password didn't match",
    });

  pharmacy.password = password;

  await pharmacy.save();

  cookieToken(pharmacy, res);
});

exports.updateUser = BigPromise(async (req, res) => {
  const pharmacy = req.pharmacy;

  if (req.body.email) {
    if (!validator.isEmail(req.body.email))
      return res.json({
        success: false,
        message: "Enter correct email format.",
      });
  }

  const updatedPharmacy = extend(pharmacy, req.body);

  await pharmacy.save();

  res.status(200).json({
    success: true,
    updatedPharmacy,
  });
});

// Controllers
exports.addInventoryItem = BigPromise(async (req, res) => {
  const pharmacy = req.pharmacy;

  pharmacy.inventory.push({
    medicine: req.body.medicineId,
    quantity: req.body.quantity,
    price: req.body.price,
  });

  await pharmacy.save();

  res.status(200).json({
    success: true,
    pharmacy,
  });
});

exports.deleteInventoryItem = BigPromise(async (req, res) => {
  const pharmacy = req.pharmacy;

  const updatedInventory = pharmacy.inventory.filter(
    (prod) => prod.medicine._id.toString() !== req.body.medicineId
  );

  await pharmacy.updateOne({ inventory: updatedInventory });

  res.status(200).json({
    success: true,
    updatedInventory,
  });
});

exports.updateInventoryItem = BigPromise(async (req, res) => {
  const pharmacy = req.pharmacy;

  const updatedInventory = pharmacy.inventory.map((prod) => {
    if (prod.medicine._id.toString() === req.body.medicineId) {
      if (req.body.quantity) prod.quantity = req.body.quantity;
      if (req.body.price) prod.price = req.body.price;
    }
    return prod;
  });

  extend(pharmacy, { inventory: updatedInventory });

  await pharmacy.save();

  res.status(200).json({
    success: true,
    pharmacy,
  });
});
