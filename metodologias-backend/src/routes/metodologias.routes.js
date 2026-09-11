const { Router } = require("express");
const {
  getInvestigacionCompleta,
  getConcepto,
  getCaracteristicas,
  getClasificacion,
  getTablaComparativa,
  getReferencias
} = require("../controllers/metodologias.controller");

const router = Router();

// GET /api/metodologias -> toda la investigacion en un solo JSON
router.get("/", getInvestigacionCompleta);

// GET /api/metodologias/concepto
router.get("/concepto", getConcepto);

// GET /api/metodologias/caracteristicas
router.get("/caracteristicas", getCaracteristicas);

// GET /api/metodologias/clasificacion?tipo=tradicionales|agiles
router.get("/clasificacion", getClasificacion);

// GET /api/metodologias/comparativa
router.get("/comparativa", getTablaComparativa);

// GET /api/metodologias/referencias
router.get("/referencias", getReferencias);

module.exports = router;
