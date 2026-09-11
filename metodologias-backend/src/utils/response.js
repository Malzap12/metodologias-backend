/**
 * Estandariza el formato de todas las respuestas de la API para que el
 * Frontend siempre reciba la misma "forma" de objeto, sin importar el
 * endpoint que consuma. Esto es una buena practica de arquitectura REST.
 */

function success(res, { statusCode = 200, message = "OK", data = null }) {
  return res.status(statusCode).json({
    ok: true,
    message,
    data
  });
}

function error(res, { statusCode = 500, message = "Ha ocurrido un error inesperado" }) {
  return res.status(statusCode).json({
    ok: false,
    message,
    data: null
  });
}

module.exports = { success, error };
