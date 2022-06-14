const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const pharmacySchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please enter an email."],
    validate: [validator.isEmail, "Please enter a valid email format."],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please enter a password."],
    minLength: [6, "Password should be atleast 6 char"],
    select: false,
  },
  name: {
    type: String,
    require: [true, "Please enter a name."],
    maxLength: [30, "Name should be under 30 char."],
  },
  role: {
    type: String,
    default: "pharmacy",
  },
  picture: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Address Line required"],
  },
  pinCode: {
    type: String,
    require: true,
  },
  area: {
    type: String,
    require: true,
  },
  contactNo: {
    type: String,
    require: true,
  },
  inventory: [
    {
      medicine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine",
        require: true,
      },
      quantity: {
        type: Number,
        require: true,
      },
      price: {
        type: Number,
        require: true,
      },
    },
  ],
  ratings: {
    type: Number,
    required: true,
    default: 4.5,
  },
  notifications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
      require: true,
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
  ],
  forgotPasswordCode: String,
  forgotPasswordExpiry: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

pharmacySchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 10);
});

pharmacySchema.methods.isPasswordValidated = async function (userSentPassword) {
  return await bcrypt.compare(userSentPassword, this.password);
};

pharmacySchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_expiresIn,
  });
};

pharmacySchema.methods.getForgotPasswordCode = function () {
  const forgotCode = crypto.randomBytes(3).toString("hex");

  this.forgotPasswordCode = crypto
    .createHash("sha256")
    .update(forgotCode)
    .digest("hex");

  this.forgotPasswordExpiry = Date.now() + 20 * 60 * 100;

  return forgotCode;
};

module.exports = mongoose.model("Pharmacy", pharmacySchema);
