const { equipo } = require("../data/equipo.data");
const { success } = require("../utils/response");

/**
 * GET /api/equipo
 * Devuelve el equipo completo con data como arreglo (compatible 100% con Frontend).
 */
function getEquipo(req, res, next) {
  try {
    return success(res, {
      message: "Equipo de trabajo obtenido correctamente",
      data: equipo.integrantes,
      metadata: {
        proyecto: equipo.proyecto,
        subtitulo: equipo.subtitulo,
        asignatura: equipo.asignatura,
        dinamica: equipo.dinamica,
        totalMiembros: equipo.integrantes.length
      }
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/equipo/:id
 * Devuelve un miembro especifico por su id (erika, andrey, miguel, sergio)
 */
function getMiembroById(req, res, next) {
  try {
    const { id } = req.params;
    const cleanId = String(id).toLowerCase().trim();

    const miembro = equipo.integrantes.find(
      (m) =>
        m.id.toLowerCase() === cleanId ||
        (cleanId.includes("back") && m.id === "andrey") ||
        (cleanId.includes("front") && m.id === "miguel") ||
        (cleanId.includes("qa") && m.id === "sergio") ||
        (cleanId.includes("investig") && m.id === "erika")
    );

    if (!miembro) {
      const err = new Error(`Miembro del equipo con ID '${id}' no encontrado.`);
      err.statusCode = 404;
      throw err;
    }

    return success(res, {
      message: `Informacion de ${miembro.nombre} obtenida correctamente`,
      data: miembro
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getEquipo,
  getMiembroById
};
