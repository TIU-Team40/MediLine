const Pharmacy = require("../models/pharmacyModel");
const Notification = require("../models/notificationModel");
const BigPromise = require("../middlewares/bigPromise");
const cloudinary = require("cloudinary").v2;
const { extend } = require("lodash");

exports.getNotifications = BigPromise(async (req, res) => {
  const notifications = await Notification.find()
    .populate("fromUser")
    .populate("order")
    .populate("toUser");

  res.status(200).json({
    success: true,
    notifications,
  });
});

exports.createNotification = BigPromise(async (req, res) => {
  const user = req.user;
  const { toUserId, type, orderId, text } = req.body;

  const notificationObject = {
    fromUser: user,
    toUser: toUserId,
    type,
    isRead: false,
    prescription: {},
  };

  if (orderId) notificationObject.ordrer = orderId;
  if (text) notificationObject.prescription.text = text;
  if (req.files) {
    const prescription = req.files.prescription;
    try {
      const result = await cloudinary.uploader.upload(
        prescription.tempFilePath,
        {
          folder: "mediline/prescription",
          crop: "scale",
        }
      );
      notificationObject.prescription.file = {
        id: result.public_id,
        secure_url: result.secure_url,
      };
    } catch (err) {
      console.log(err);
    }
  }

  // console.log(notificationObject, "LOL");

  const notification = await Notification.create(notificationObject);

  const toUser = await Pharmacy.findById(toUserId);

  toUser.notifications.push(notification._id.toString());

  await toUser.save();

  res.status(200).json({
    success: true,
  });
});

exports.updateNotification = BigPromise(async (req, res) => {
  const pharmacy = req.pharmacy;
  const { notificationIdArray } = req.body;

  for (let i = 0; i < notificationIdArray.length; i++) {
    const id = notificationIdArray[i]._id;
    const notification = await Notification.findById(id);
    notification.isRead = true;
    await notification.save();
  }

  res.status(200).json({
    success: true,
  });
});

exports.deleteAllNotification = BigPromise(async (req, res) => {
  const user = req.user;

  user.notification.forEach(async (notification) => {
    const noti = await Notification.findById(notification._id);
    await noti.delete();
  });

  await user.updateOne({ notification: [] });

  res.status(200).json({
    success: true,
  });
});
