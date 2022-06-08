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
