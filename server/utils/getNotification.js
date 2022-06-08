exports.UserNotification = (userId, notficationList) => {
  return notficationList.filter((notfication) => {
    console.log(notfication.toUser._id, userId);
    return notfication.toUser._id.toString() === userId.toString();
  });
};
