const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: [true, "Price of the Product Required."],
    maxLength: [6, "Product price should be less than 6 digits."],
  },
  description: {
    type: String,
    required: true,
  },
  category: { type: String },
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
    default: 4.5,
  },
  perUnitQuantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Medicine", medicineSchema);
