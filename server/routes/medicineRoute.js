const express = require("express");
const router = express.Router();

const {
  getMedicine,
  addMedicine,
  addDiseaseToMedicine,
} = require("../controllers/medicineController");

// Login Routes
router.route("/medicine").get(getMedicine).post(addMedicine);
router.route("/medicine/:id").post(addDiseaseToMedicine);

module.exports = router;
