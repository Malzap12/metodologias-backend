const {
  metodologias,
  tablaComparativa,
  concepto,
  caracteristicas,
  clasificacion,
  referencias,
  fundamentos,
  modeladoFuncional,
  comparativasGlobales,
  criteriosSeleccion,
  casoIntegradorBancario,
  rawData
} = require("../data/metodologias.data");
const { success } = require("../utils/response");

/**
 * GET /api/metodologias
 * Devuelve el listado de metodologias como arreglo (compatible 100% con Frontend).
 * Soporta filtros por query param:
 * ?tipo=agil|tradicional
 * ?categoria=tradicional|agil|escalado|contemporaneo
 * ?search=texto
 */
function getMetodologias(req, res, next) {
  try {
    const { tipo, categoria, search } = req.query;
    let resultado = [...metodologias];

    if (tipo) {
      resultado = resultado.filter(
        (m) => m.tipo.toLowerCase() === String(tipo).toLowerCase()
      );
    }

    if (categoria) {
      resultado = resultado.filter(
        (m) => m.categoria.toLowerCase() === String(categoria).toLowerCase()
      );
    }

    if (search) {
      const q = String(search).toLowerCase();
      resultado = resultado.filter(
        (m) =>
          m.nombre.toLowerCase().includes(q) ||
          m.descripcionCorta.toLowerCase().includes(q) ||
          m.lema.toLowerCase().includes(q) ||
          m.origen.toLowerCase().includes(q)
      );
    }

    return success(res, {
      message: `Listado de metodologias obtenido correctamente (${resultado.length} encontradas)`,
      data: resultado
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/:id
 * Devuelve una metodologia especifica por su ID (ej: scrum, waterfall, cascada, xp, kanban, etc.)
 */
function getMetodologiaById(req, res, next) {
  try {
    const { id } = req.params;
    const cleanId = String(id).toLowerCase().trim();

    // Soporte para alias comunes (waterfall <-> cascada)
    const encontrado = metodologias.find(
      (m) =>
        m.id.toLowerCase() === cleanId ||
        (cleanId === "cascada" && m.id === "waterfall") ||
        (cleanId === "waterfall" && m.id === "cascada")
    );

    if (!encontrado) {
      const err = new Error(`Metodologia con ID '${id}' no encontrada.`);
      err.statusCode = 404;
      throw err;
    }

    return success(res, {
      message: `Metodologia '${encontrado.nombre}' obtenida correctamente`,
      data: encontrado
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/comparativa y /api/metodologias/comparativa
 * Devuelve la matriz comparativa de criterios entre tradicional y agil
 */
function getTablaComparativa(req, res, next) {
  try {
    return success(res, {
      message: "Matriz comparativa: Enfoques Tradicionales vs Agiles",
      data: tablaComparativa
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/investigacion
 * Devuelve la investigacion completa unificada en un solo objeto
 */
function getInvestigacionCompleta(req, res, next) {
  try {
    return success(res, {
      message: "Investigacion completa de metodologias obtenida correctamente",
      data: {
        concepto,
        caracteristicas,
        clasificacion,
        totalMetodologias: metodologias.length,
        metodologias,
        tablaComparativa,
        fundamentos,
        modeladoFuncional,
        criteriosSeleccion,
        casoIntegradorBancario,
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
      message: "Concepto y genesis de las metodologias de software",
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
      message: "Caracteristicas fundamentales de las metodologias",
      data: caracteristicas
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metodologias/clasificacion
 */
function getClasificacion(req, res, next) {
  try {
    const { tipo } = req.query;
    if (tipo) {
      const match = clasificacion.find(
        (c) => c.id.toLowerCase() === String(tipo).toLowerCase()
      );
      if (!match) {
        const err = new Error(`Clasificacion '${tipo}' no existe. Opciones: tradicionales, agiles, escaladas, contemporaneas.`);
        err.statusCode = 404;
        throw err;
      }
      return success(res, { message: `Clasificacion filtrada: ${tipo}`, data: match });
    }
    return success(res, {
      message: "Taxonomia y clasificacion principal de metodologias",
      data: clasificacion
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
      message: "Referencias bibliograficas canonicas de la investigacion",
      data: referencias
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/fundamentos
 */
function getFundamentos(req, res, next) {
  try {
    return success(res, {
      message: "Fundamentos epistemologicos y fases canonicas del SDLC (ISO/IEC/IEEE 12207)",
      data: fundamentos
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/modelado-funcional
 */
function getModeladoFuncional(req, res, next) {
  try {
    return success(res, {
      message: "Modelado funcional: Casos de uso (Jacobson), comparativa REQ/HU/CU y trazabilidad",
      data: modeladoFuncional
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/criterios-seleccion
 */
function getCriteriosSeleccion(req, res, next) {
  try {
    return success(res, {
      message: "Modelos formales de seleccion metodologica: Radar Boehm-Turner y Matriz de Stacey",
      data: criteriosSeleccion
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/caso-estudio
 */
function getCasoEstudio(req, res, next) {
  try {
    return success(res, {
      message: "Caso integrador: Plataforma Nacional de Pagos Electronicos (Arquitectura Hibrida)",
      data: casoIntegradorBancario
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getMetodologias,
  getMetodologiaById,
  getTablaComparativa,
  getInvestigacionCompleta,
  getConcepto,
  getCaracteristicas,
  getClasificacion,
  getReferencias,
  getFundamentos,
  getModeladoFuncional,
  getCriteriosSeleccion,
  getCasoEstudio
};
