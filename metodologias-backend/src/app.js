const express = require("express");
const cors = require("cors");

const corsOptions = require("./config/cors.config");
const metodologiasRoutes = require("./routes/metodologias.routes");
const equipoRoutes = require("./routes/equipo.routes");
const metodologiasController = require("./controllers/metodologias.controller");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const { success } = require("./utils/response");

const app = express();

// ---------- Middlewares globales ----------
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------- Ruta raiz / salud del servicio ----------
app.get("/", (req, res) => {
  return success(res, {
    message: "API de Investigacion de Metodologias de Software - Backend activo",
    data: {
      proyecto: "Metodologias de Desarrollo de Software (Front + Back)",
      documentacion: "Ver endpoints disponibles y README.md",
      endpointsPrincipales: [
        "/api/metodologias",
        "/api/metodologias/:id",
        "/api/comparativa",
        "/api/equipo",
        "/api/fundamentos",
        "/api/modelado-funcional",
        "/api/criterios-seleccion",
        "/api/caso-estudio",
        "/api/investigacion"
      ]
    }
  });
});

app.get("/api/health", (req, res) => {
  return success(res, { message: "Servicio en linea", data: { status: "UP", timestamp: new Date().toISOString() } });
});

// ---------- Rutas de la API ----------
app.use("/api/metodologias", metodologiasRoutes);
app.use("/api/equipo", equipoRoutes);

// Endpoint directo /api/comparativa (consumido directamente por el Frontend)
app.get("/api/comparativa", (req, res, next) => {
  metodologiasController.getTablaComparativa(req, res, next);
});

// Endpoints profundos de la investigacion formal
app.get("/api/fundamentos", (req, res, next) => {
  metodologiasController.getFundamentos(req, res, next);
});

app.get("/api/modelado-funcional", (req, res, next) => {
  metodologiasController.getModeladoFuncional(req, res, next);
});

app.get("/api/criterios-seleccion", (req, res, next) => {
  metodologiasController.getCriteriosSeleccion(req, res, next);
});

app.get("/api/caso-estudio", (req, res, next) => {
  metodologiasController.getCasoEstudio(req, res, next);
});

app.get("/api/investigacion", (req, res, next) => {
  metodologiasController.getInvestigacionCompleta(req, res, next);
});

app.get("/api/raw-data", (req, res) => {
  res.json(require("./data/data.json"));
});

// ---------- Manejo de rutas no encontradas y errores ----------
app.use(notFound);
app.use(errorHandler);

module.exports = app;
