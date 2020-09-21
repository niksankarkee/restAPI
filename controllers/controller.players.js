exports.getAll = (req, res, next) => {
  res.json({ msg: "Hello I return all of the players" });
};

exports.createOne = (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.status(201).json({
      data: req.body
  })
};
