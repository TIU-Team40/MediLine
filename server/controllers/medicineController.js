const Medicine = require("../models/medicineModel");
const Disease = require("../models/diseaseModel");
const BigPromise = require("../middlewares/bigPromise");

//   name,
//   picture,
//   price,
//   offerPrice,
//   description,
//   category,
//   seasons,
//   diseases,
//   ratings,
//   perUnitQuantity,

exports.getMedicine = BigPromise(async (req, res) => {
  const medicines = await Medicine.find().populate("diseases");
  const diseases = await Disease.find().populate("medicines");

  res.status(201).json({
    success: true,
    medicines,
    diseases,
  });
});

exports.addMedicine = BigPromise(async (req, res) => {
  const medicine = await Medicine.create(req.body);

  res.status(201).json({
    success: true,
    medicine,
  });
});

exports.addDiseaseToMedicine = BigPromise(async (req, res) => {
  const medicine = await Medicine.findById(req.params.id);

  medicine.diseases = [...medicine.diseases, ...req.body.diseases];

  await medicine.save();

  res.status(201).json({
    success: true,
    medicine,
  });
});
