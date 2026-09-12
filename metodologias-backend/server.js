require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("========================================================");
  console.log(" API Metodologias de Software - Backend Activo");
  console.log(` Servidor corriendo en:    http://localhost:${PORT}`);
  console.log(` Endpoint metodologias:    http://localhost:${PORT}/api/metodologias`);
  console.log(` Endpoint comparativa:     http://localhost:${PORT}/api/comparativa`);
  console.log(` Endpoint equipo:          http://localhost:${PORT}/api/equipo`);
  console.log(` Endpoint fundamentos:     http://localhost:${PORT}/api/fundamentos`);
  console.log(` Endpoint modelado:        http://localhost:${PORT}/api/modelado-funcional`);
  console.log(` Endpoint seleccion:       http://localhost:${PORT}/api/criterios-seleccion`);
  console.log(` Endpoint caso estudio:    http://localhost:${PORT}/api/caso-estudio`);
  console.log(` Endpoint investigacion:   http://localhost:${PORT}/api/investigacion`);
  console.log("========================================================");
});
