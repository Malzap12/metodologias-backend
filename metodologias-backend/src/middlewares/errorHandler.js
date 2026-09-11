const { error } = require("../utils/response");

/**
 * Middleware centralizado de manejo de errores (buena practica de
 * arquitectura de software). Cualquier error lanzado en un controlador
 * (throw new Error(...) o next(err)) termina aqui, evitando que el
 * servidor se caiga y devolviendo siempre una respuesta JSON controlada.
 *
 * Debe declararse SIEMPRE al final de la cadena de middlewares y con
 * 4 parametros (req, res, next, err) para que Express lo reconozca
 * como "error handler".
 */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error("[ERROR]", err.stack || err.message);

  const statusCode = err.statusCode || 500;
  const message =
    process.env.NODE_ENV === "production"
      ? "Error interno del servidor"
      : err.message || "Error interno del servidor";

  return error(res, { statusCode, message });
}

module.exports = errorHandler;
