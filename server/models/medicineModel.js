const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    id: {
      type: String,
      require: true,
      default: "",
    },
    secure_url: {
      type: String,
      require: true,
      default: "",
    },
  },
  price: {
    type: Number,
    required: [true, "Price of the Product Required."],
    maxLength: [6, "Product price should be less than 6 digits."],
  },
  offerPrice: {
    type: Number,
    required: [true, "Price before discount of the Product Required."],
  },
  description: {
    type: String,
    required: true,
  },
  category: [{ type: String, required: true }],
  seasons: [{ type: String, required: true }],
  diseases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disease",
      required: true,
    },
  ],
  ratings: {
    type: Number,
    required: true,
  },
  perUnitQuantity: {
      type: String,
      required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Medicine", medicineSchema);
