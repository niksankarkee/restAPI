const { Router } = require("express");
const router = Router();

const {
  getAll,
  createOne,
  getOne,
  deleteOne,
  updateOne
} = require("../controllers/controller.players");

// /api/players
router.get("/", getAll);
router.post("/", createOne);
router.get("/:id", getOne);
router.delete("/:id", deleteOne);
router.put("/:id", updateOne);

module.exports = router;
