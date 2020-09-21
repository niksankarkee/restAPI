const Player = require("../models/model.player");

exports.getAll = async (req, res) => {
  try {
    const players = await Player.find({}).lean().exec();
    res.status(200).json({ data: players });
  } catch (err) {}
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const player = await Player.findById(id).lean().exec();
    res.status(200).json({ data: player });
  } catch (err) {}
};

exports.createOne = async (req, res, next) => {
  const { name, age, club, position } = req.body;
  try {
    const player = await Player.create({
      name,
      age,
      club,
      position,
    });
    res.status(201).json({ data: player });
  } catch (err) {
    res.status(400).json({
      err: "Database error",
    });
  }
};

exports.deleteOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const player = await Player.findByIdAndDelete(id).lean().exec();
    res.status(200).json({ data: player });
  } catch (err) {
    console.log(err);
  }
};

exports.updateOne = async (req, res, next) => {
  const { id } = req.params;

  try {
    const player = await Player.findByIdAndUpdate(id, req.body, { new: true })
      .lean()
      .exec();
    res.status(200).json({ data: player });
  } catch (err) {
    console.log(err);
  }
};
