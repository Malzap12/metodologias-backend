const {
  concepto,
  caracteristicas,
  clasificacion,
  tablaComparativa,
  referencias
} = require("../data/metodologias.data");
const { success } = require("../utils/response");

/**
 * GET /api/metodologias
 * Devuelve la investigacion completa en un solo objeto.
 * Util para que el Frontend haga una unica peticion y renderice
 * toda la pagina de una vez.
 */
function getInvestigacionCompleta(req, res, next) {
  try {
    return success(res, {
      message: "Investigacion de Metodologias de Software obtenida correctamente",
      data: {
        concepto,
        caracteristicas,
        clasificacion,
        tablaComparativa,
        referencias
      }
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/concepto
 */
function getConcepto(req, res, next) {
  try {
    return success(res, {
      message: "Concepto de Metodologias de Software",
      data: concepto
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/caracteristicas
 */
function getCaracteristicas(req, res, next) {
  try {
    return success(res, {
      message: "Caracteristicas de las Metodologias de Software",
      data: caracteristicas
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/clasificacion
 * Soporta filtro opcional ?tipo=tradicionales | agiles
 */
function getClasificacion(req, res, next) {
  try {
    const { tipo } = req.query;

    if (tipo) {
      const resultado = clasificacion.find(
        (item) => item.id.toLowerCase() === String(tipo).toLowerCase()
      );

      if (!resultado) {
        const err = new Error(
          `Tipo de clasificacion '${tipo}' no existe. Usa 'tradicionales' o 'agiles'.`
        );
        err.statusCode = 404;
        throw err;
      }

      return success(res, {
        message: `Clasificacion filtrada por tipo: ${tipo}`,
        data: resultado
      });
    }

    return success(res, {
      message: "Clasificacion principal de las Metodologias de Software",
      data: clasificacion
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/comparativa
 */
function getTablaComparativa(req, res, next) {
  try {
    return success(res, {
      message: "Tabla comparativa: Metodologias Tradicionales vs Agiles",
      data: tablaComparativa
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/referencias
 */
function getReferencias(req, res, next) {
  try {
    return success(res, {
      message: "Referencias bibliograficas de la investigacion",
      data: referencias
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getInvestigacionCompleta,
  getConcepto,
  getCaracteristicas,
  getClasificacion,
  getTablaComparativa,
  getReferencias
};
