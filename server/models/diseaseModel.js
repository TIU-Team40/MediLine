const mongoose = require("mongoose");

const diseaseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    require: true,
  },
  medicines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine",
      required: true,
    },
  ],
  seasons: [{ type: String, required: true }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Disease", diseaseSchema);
