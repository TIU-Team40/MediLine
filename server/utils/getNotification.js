exports.UserNotification = (userId, notficationList) => {
  return notficationList.filter((notfication) => {
    return notfication.toUser._id.toString() === userId.toString();
  });
};
