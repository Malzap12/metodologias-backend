/**
 * Configuracion segura y flexible de CORS (Cross-Origin Resource Sharing).
 * Permite entornos locales (localhost, Vite 5173/3000), despliegues en Vercel/Render,
 * y clientes como Postman/cURL.
 */

const ORIGENES_PERMITIDOS = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:4173",
  "http://127.0.0.1:5500",
  "http://127.0.0.1:5173",
  process.env.FRONTEND_URL
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // Permite peticiones sin origin (ej: Postman, curl, serverside)
    if (!origin) return callback(null, true);

    const esPermitido =
      ORIGENES_PERMITIDOS.includes(origin) ||
      origin.includes("localhost") ||
      origin.includes("127.0.0.1") ||
      origin.includes("vercel.app") ||
      origin.includes("render.com") ||
      process.env.NODE_ENV !== "production";

    if (esPermitido) {
      callback(null, true);
    } else {
      callback(new Error(`Origen no permitido por politica de CORS: ${origin}`));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
