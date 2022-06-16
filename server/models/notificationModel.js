const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pharmacy",
    required: true,
  },
  type: {
    type: String,
    required: [true, "Type of notification"],
    enum: {
      values: ["Order_Placed", "Upload_Prescription"],
      message: "Please select the type",
    },
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
  prescription: {
    file: {
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
    text: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
