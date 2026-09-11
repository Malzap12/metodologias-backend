const { equipo } = require("../data/equipo.data");
const { success } = require("../utils/response");

/**
 * GET /api/equipo
 * Devuelve la informacion completa del equipo (proyecto + integrantes).
 */
function getEquipo(req, res, next) {
  try {
    return success(res, {
      message: "Informacion del equipo de trabajo obtenida correctamente",
      data: equipo
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/equipo/:id
 * Devuelve un integrante especifico por su id (ej: back-01, front-01).
 */
function getIntegrantePorId(req, res, next) {
  try {
    const { id } = req.params;
    const integrante = equipo.integrantes.find((persona) => persona.id === id);

    if (!integrante) {
      const err = new Error(`No se encontro un integrante con id '${id}'`);
      err.statusCode = 404;
      throw err;
    }

    return success(res, {
      message: `Informacion del integrante ${id}`,
      data: integrante
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getEquipo, getIntegrantePorId };
