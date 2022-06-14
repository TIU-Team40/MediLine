const express = require("express");
const router = express.Router();

const {
  getDiseases,
  addDisease,
  addMedicineToDisease,
} = require("../controllers/diseaseController");

// Login Routes
router.route("/disease").get(getDiseases).post(addDisease);
router.route("/disease/:id").post(addMedicineToDisease);

module.exports = router;
