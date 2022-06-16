module.exports = async (user, res) => {
  const userToken = await user.getJwtToken();

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRY * 60 * 60 * 1000),
    httpOnly: true,
    // sameSite: "none",
    // secure: true,
  };

  user.password = undefined;

  return res.status(201).cookie("token", userToken, cookieOptions).json({
    success: true,
    user,
    userToken,
  });
};
