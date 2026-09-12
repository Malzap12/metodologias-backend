const { Router } = require("express");
const { getEquipo, getMiembroById } = require("../controllers/equipo.controller");

const router = Router();

// GET /api/equipo -> Arreglo de integrantes del equipo
router.get("/", getEquipo);

// GET /api/equipo/:id -> Detalle por ID
router.get("/:id", getMiembroById);

module.exports = router;
