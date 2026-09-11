const { Router } = require("express");
const { getEquipo, getIntegrantePorId } = require("../controllers/equipo.controller");

const router = Router();

// GET /api/equipo -> info completa del equipo
router.get("/", getEquipo);

// GET /api/equipo/:id -> info de un integrante especifico
router.get("/:id", getIntegrantePorId);

module.exports = router;
