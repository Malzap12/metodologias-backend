const { Router } = require("express");
const {
  getMetodologias,
  getMetodologiaById,
  getTablaComparativa,
  getInvestigacionCompleta,
  getConcepto,
  getCaracteristicas,
  getClasificacion,
  getReferencias,
  getFundamentos,
  getModeladoFuncional,
  getCriteriosSeleccion,
  getCasoEstudio
} = require("../controllers/metodologias.controller");

const router = Router();

// GET /api/metodologias -> Arreglo con las 22 metodologias completas (para el Front)
router.get("/", getMetodologias);

// Endpoints conceptuales y complementarios
router.get("/investigacion", getInvestigacionCompleta);
router.get("/concepto", getConcepto);
router.get("/caracteristicas", getCaracteristicas);
router.get("/clasificacion", getClasificacion);
router.get("/comparativa", getTablaComparativa);
router.get("/referencias", getReferencias);
router.get("/fundamentos", getFundamentos);
router.get("/modelado-funcional", getModeladoFuncional);
router.get("/criterios-seleccion", getCriteriosSeleccion);
router.get("/caso-estudio", getCasoEstudio);

// GET /api/metodologias/:id -> Detalle por ID (scrum, waterfall, xp, etc.)
router.get("/:id", getMetodologiaById);

module.exports = router;
