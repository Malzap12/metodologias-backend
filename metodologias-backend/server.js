require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("========================================================");
  console.log(" API Metodologias de Software - Backend");
  console.log(` Servidor corriendo en: http://localhost:${PORT}`);
  console.log(` Endpoint investigacion: http://localhost:${PORT}/api/metodologias`);
  console.log(` Endpoint equipo:        http://localhost:${PORT}/api/equipo`);
  console.log("========================================================");
});
