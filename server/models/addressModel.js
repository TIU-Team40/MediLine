const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of the User."],
  },
  addressLine: {
    type: String,
    required: [true, "Address Line required"],
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    require: true,
  },
  pinCode: {
    type: String,
    require: true,
  },
  mobileNo: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Address", addressSchema);
