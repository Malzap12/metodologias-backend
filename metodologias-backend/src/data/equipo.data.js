/**
 * ==========================================================================
 * CAPA DE DATOS - EQUIPO DE TRABAJO
 * ==========================================================================
 * NOTA PARA EL EQUIPO: el rol de Backend ya esta 100% documentado.
 * Cuando el companero de Frontend envie su descripcion, solo hay que
 * completar el objeto "frontend" de abajo (no hay que tocar nada mas
 * de la arquitectura). Estructura identica y lista para eso.
 * ==========================================================================
 */

const equipo = {
  proyecto: "Investigacion de Metodologias de Software - Plataforma Web (Front + Back)",
  dinamica: "Sustentacion tipo Shark Tank",
  integrantes: [
    {
      id: "back-01",
      rol: "Ingeniero de Backend y Arquitectura de Datos",
      responsabilidades: [
        "Diseñar y programar la logica del servidor y la capa de datos de la plataforma.",
        "Construir una API REST modular, limpia y escalable.",
        "Exponer de forma ordenada la investigacion sobre metodologias de software " +
          "(conceptos, caracteristicas, tablas comparativas y roles del equipo).",
        "Implementar buenas practicas de arquitectura de software (separacion por capas: " +
          "rutas, controladores, datos, middlewares).",
        "Manejo riguroso de errores mediante middlewares centralizados.",
        "Configurar politicas CORS seguras para la integracion con el cliente (Frontend).",
        "Documentar tecnicamente los endpoints para facilitar su consumo."
      ],
      entregables: [
        "Repositorio del servidor terminado.",
        "Endpoints funcionales y documentados (/api/metodologias, /api/equipo).",
        "Enlace local o mock (README) listo para que el Front empiece a conectar."
      ],
      tecnologias: ["Node.js", "Express.js", "CORS", "Dotenv", "Arquitectura REST"],
      estado: "Completado"
    },
    {
      id: "front-01",
      rol: "Ingeniero de Frontend y Experiencia de Usuario",
      responsabilidades: [
        "PENDIENTE: completar con la informacion que envie el companero de Frontend."
      ],
      entregables: [
        "PENDIENTE"
      ],
      tecnologias: [],
      estado: "Pendiente de informacion del companero"
    }
  ]
};

module.exports = { equipo };
