const Disease = require("../models/diseaseModel");
const BigPromise = require("../middlewares/bigPromise");

//   name,
//   information,
//   picture,
//   medicines,
//   seasons,

exports.getDiseases = BigPromise(async (req, res) => {
  const diseases = await Disease.find();

  res.status(201).json({
    success: true,
    diseases,
  });
});

exports.addDisease = BigPromise(async (req, res) => {
  const diseases = await Disease.create(req.body);

  res.status(201).json({
    success: true,
    diseases,
  });
});

exports.addMedicineToDisease = BigPromise(async (req, res) => {
  const disease = await Disease.findById(req.params.id);

  disease.medicines = [...disease.medicines, ...req.body.medicine];

  await disease.save();

  res.status(201).json({
    success: true,
    disease,
  });
});
