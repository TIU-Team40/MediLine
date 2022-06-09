const Medicine = require("../models/medicineModel");
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

  res.status(201).json({
    success: true,
    medicines,
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
