const express = require("express");
const cors = require("cors");

const corsOptions = require("./config/cors.config");
const metodologiasRoutes = require("./routes/metodologias.routes");
const equipoRoutes = require("./routes/equipo.routes");
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
      documentacion: "Ver README.md del repositorio",
      endpointsPrincipales: ["/api/metodologias", "/api/equipo"]
    }
  });
});

app.get("/api/health", (req, res) => {
  return success(res, { message: "Servicio en linea", data: { status: "UP" } });
});

// ---------- Rutas de la API ----------
app.use("/api/metodologias", metodologiasRoutes);
app.use("/api/equipo", equipoRoutes);

// ---------- Manejo de rutas no encontradas y errores ----------
app.use(notFound);
app.use(errorHandler);

module.exports = app;
