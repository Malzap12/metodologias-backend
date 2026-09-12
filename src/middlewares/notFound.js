const { error } = require("../utils/response");

/**
 * Middleware de 404: se ejecuta cuando ninguna ruta definida coincide
 * con la peticion entrante. Evita que Express devuelva el HTML por
 * defecto y mantiene el formato JSON consistente de la API.
 */
function notFound(req, res, next) {
  return error(res, {
    statusCode: 404,
    message: `Recurso no encontrado: ${req.method} ${req.originalUrl}`
  });
}

module.exports = notFound;
