const { Router } = require("express");
const router = Router();

const { getAll, createOne } = require("../controllers/controller.players");

// /api/players
router.get("/", getAll);
router.post("/", createOne);

module.exports = router;
