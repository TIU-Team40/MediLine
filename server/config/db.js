const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Succefully"))
    .catch((error) => {
      console.log(`DB CONNECTION FAILED`);
      console.log(error);
      process.exit(1);
    });
};
