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
  const medicines = await Medicine.find();
  const diseases = await Disease.find();

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

  medicine.diseases = [...medicine.diseases, ...req.body.disease];

  await medicine.save();

  res.status(201).json({
    success: true,
    medicine,
  });
});
