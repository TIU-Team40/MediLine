exports.home = (req, res) => {
  res.status(200).json({
    success: "true",
    greeting: "Hello Backend Developer",
  });
};
