/**
 * Configuracion segura de CORS (Cross-Origin Resource Sharing).
 *
 * En vez de usar cors() "abierto a todo" (origin: "*"), se define una
 * lista blanca de origenes permitidos. Esto es una buena practica de
 * seguridad: solo el Frontend del equipo (y el entorno local de
 * desarrollo) pueden consumir la API.
 *
 * IMPORTANTE PARA EL FRONT: si despliegan la pagina en Netlify, Vercel,
 * GitHub Pages, etc., agreguen esa URL en el arreglo ORIGENES_PERMITIDOS
 * (o en la variable de entorno FRONTEND_URL del archivo .env).
 */

const ORIGENES_PERMITIDOS = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5500", // Live Server de VSCode
  process.env.FRONTEND_URL // URL de produccion del Frontend (definida en .env)
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // Permite peticiones sin "origin" (ej: Postman, curl, apps moviles)
    if (!origin || ORIGENES_PERMITIDOS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Origen no permitido por la politica de CORS: ${origin}`));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
